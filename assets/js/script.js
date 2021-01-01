var list=[];  //A list of ids to be removed from db

// Used to add the checkbox information,which helps in identifying ids of the tasks/entries present in the db
$('#checkbox input').on('click',function(e){

    let val=e.target.value;
    if(!list.includes(val,0)){
        list.push(val);
    }
    else{
        let index= list.indexOf(val);
        list.splice(index,1);
    }

});

// To append the list of id's to be deleted from db,to the route
$('#delete_btn').on('click',function(){

    newUrl="/delete-task?del_list="+list;
    $('#delete').attr('href',newUrl);

});


// to handle count of the pending tasks
var count =$('#results-container > div').length;

if(count>1)
$('#count').html(count + ' tasks');
else if(count==1)
$('#count').html(count + ' task');
else{
    $('#count').html('no tasks');
}



// To display select all only if atleast one entry is present in the db
if(count>=1){
    $('#select-all').css('display','block');
}

// To add the functionality to select-all link so that all checkboxes can be checked
var flag=true;
$('#select-all').on('click',function(e){
    e.preventDefault();
    $('input[type="checkbox"]').trigger('click');
    flag=!flag;
})


// Adding dynamic styles to the form elements
var l=['#desc','#category-container','#date-container']
$('#desc').on('focus',function(){
    $('#description').css('backgroundColor','lightgray');
})


$('#desc').on('blur',function(){
    $('#description').css('backgroundColor','whitesmoke');
})


$('#cat').on('focus',function(){
    $('#category-container').css('backgroundColor','lightgray');
})
$('#cat').on('blur',function(){
    $('#category-container').css('backgroundColor','whitesmoke');
})



$('#date').on('focus',function(){
    $('#date-container').css('backgroundColor','lightgray');
})


$('#date').on('blur',function(){
    $('#date-container').css('backgroundColor','whitesmoke');
})