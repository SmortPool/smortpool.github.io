//define template
var template = $('#poolsections .poolsection:first').clone();

//define counter
var sectionsCount = 1;

//add new section
$('body').on('click', '.addsection', function() {

    //increment
    sectionsCount++;
    
    //loop through each input
    var poolsection = template.clone().find(':input').each(function(){

        //set id to store the updated section number
        var newId = this.id + sectionsCount;

        //update for label
        $(this).prev().attr('for', newId);

        //update id
        this.id = newId;

    }).end()
   
    //inject new section
    .appendTo('#poolsections');
    return false;
});

//remove section
$('#poolsections').on('click', '.poolremove', function() {
    //fade out section
    $(this).parent().fadeOut(300, function(){
        //remove parent element (main section)
        $(this).parent().empty();
        return false;
    });
    return false;
});
