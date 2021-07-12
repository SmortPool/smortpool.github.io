//define template
var ventTemplate = $('#ventsections .ventsection:first').clone();

//define counter
var ventSectionsCount = 1;

//add new section
$('.form-pool').on('click', '.addVentSection', function() {

    //increment
    ventSectionsCount++;
    
    //loop through each input
    var ventsection = ventTemplate.clone().find(':input').each(function(){

        //set id to store the updated section number
        var newVentId = this.ventId + ventSectionsCount;

        //update for label
        $(this).prev().attr('for', newVentId);

        //update id
        this.ventId = newVentId;

    }).end()
   
    //inject new section
    .appendTo('#ventsections');
    return false;
});

//remove section
$('#ventsections').on('click', '.ventremove', function() {
    //fade out section
    $(this).parent().fadeOut(300, function(){
        //remove parent element (main section)
        $(this).parent().empty();
        return false;
    });
    return false;
});
