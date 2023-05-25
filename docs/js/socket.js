var all_data = []

var config = {
    type: 'line',
    data: [],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };
const ctx = document.getElementById("realTimeChart");
var realTimeChart = (ctx,config);
function appendMessage(content) {
  console.log(content);
  const item = document.createElement("li");
  item.textContent = content;
  const messages = document.getElementById("messages");
  messages.appendChild(item);
};


function mapData (item){
  return (item.A1*item.V1+item.A2*item.V2+item.A3*item.V3)/1000;
}

function formatNum(num){
  return num.toFixed(2) + " KW"
}
function visualize (data) {
    const s1 = data.A1*data.V1/333;
    const s2 = data.A2*data.V2/333;
    const s3 = data.A3*data.V3/333;
    const s4 = mapData(data)
    gauges[0].refresh(s1)
    gauges[1].refresh(s2)
    gauges[2].refresh(s3)
    gauges[3].refresh(s4,100,0,new Date().toLocaleTimeString());
  
    setTimeout(()=>{
      $("#gauge_1 text tspan").first().text(formatNum(s1))
      $("#gauge_2 text tspan").first().text(formatNum(s2))
      $("#gauge_3 text tspan").first().text(formatNum(s3))
      $("#gauge_4 text tspan").first().text(formatNum(s4))
    },100)


}

const socket = io('http://13.50.175.191:3000', {
    transports: ['websocket'],
  });

socket.on("connect", () => {
  
  //appendMessage(`event: connect | session id: ${socket.id}`);
  socket.emit('joinroom', 'sensordata');
  socket.emit('chat message', 'hello', (ans)=>{console.log(ans)});
});

socket.on("connect_error", (err) => {
  //appendMessage(`event: connect_error | reason: ${err.message}`);
});

socket.on("disconnect", (reason) => {

  //appendMessage(`event: disconnect | reason: ${reason}`);
});

socket.onAny((event, ...args) => {
  //appendMessage(`event: ${event} | arguments: ${args}`);
});


socket.on('chat message', function(msg) {
    //appendMessage(`event: chatmessage`,msg)
  });
  
  socket.on('datapoint', (time, data) => {
   visualize(data);
   console.log(data);
    //appendMessage('datapoint:', JSON.stringify({time, data:JSON.stringify(data)}));
  })
