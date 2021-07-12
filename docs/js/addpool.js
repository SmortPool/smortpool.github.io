//define template
var poolTemplate = $('#poolsections .poolsection:first').clone();

//define counter
var poolSectionsCount = 1;

//add new section
$(".form-pool").on('click', '.addPoolSection', function() {

    //increment
    poolSectionsCount++;
    
    //loop through each input
    var poolsection = poolTemplate.clone().find(':input').each(function(){

        //set id to store the updated section number
        var newPoolId = this.poolId + poolSectionsCount;

        //update for label
        $(this).prev().attr('for', newPoolId);

        //update id
        this.poolId = newPoolId;

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
