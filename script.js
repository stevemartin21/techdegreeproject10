
$.ajax({
  url: 'https://randomuser.me/api/?results=12&inc=picture,name,id,email,location,phone,dob', 
  dataType: 'json',
  success: function(data) {
    console.log(data);
    /*  Pull Data and put data into html tags */
    let employee = '<div class="employee">';
    /* Loop for results of ajax request to loop through the 12 results */
   for(let i = 0; i <data.results.length; i++){
     let employeesData = data.results[i];
     employee += '<div class="profile">'; 
     employee += '<span class="close">&times;</span>'
     employee += '<img src="'+employeesData.picture.large+'">';
     employee += '<div class="contact">';
     employee += '<div class="fullName">'+employeesData.name.first+' '+employeesData.name.last+'</div>';
     employee += '<div class="email">' +employeesData.email+ '</div>';
     employee += '<div class="city">'  +employeesData.location.city+ '</div>';
     employee +='</div>';
     employee += '<div class="moreContact">' ;
     employee += '<hr class="divider">';
     employee += '<div class="id">' +employeesData.id.name+ '</div>';
     employee += '<div class="phone">' +employeesData.phone+ '</div>';
     employee += '<div class="address">' +employeesData.location.street+ '</div>';
     employee += '<div class="city">' +employeesData.location.city+ " " +employeesData.location.state+'</div> ';
     employee += '<div class="zip"> ' +employeesData.location.postcode+   '</div>';
     employee += '<div class="dob">'   +employeesData.dob+   '</div>';
     employee += '</div>';
     employee +='</div>';
     }
    employee += '</div>';

     $('#main').html(employee);

  $('.profile').click( function(){
  $('.modal').css({'display' : 'block'});
  $('.modal-profile').html(this.innerHTML);
  $('.close').css({'display' : 'block'});
  $('.moreContact').css({'display' : 'block'});
  $('.profile .moreContact').css({'display':'none'});
  $('.profile .close').css({'display':'none'});
  

 

  });

   $('.modal').click( function(){
    
    $('.modal').css({'display' : 'none'});
    $('.moreContact').css({'display' : 'none'});
    $('.close').css({'display' : 'none'});


});




    
  }
});

/*  Here is my attempt to put the data into the modal---I tried to use jquery to once you click one of the profiles to display the modal with the html data from the profile that was clicked on
I think there are things I am not understanding conceptually Thanks for your help! */


