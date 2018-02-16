
$.ajax({
  url: 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,phone,dob', 
  dataType: 'json',
  success: function(data) {
    console.log(data);
    /*  Pull Data and put data into html tags */
    let employee = '<div class="employee">';
    /* Loop for results of ajax request to loop through the 12 results */
   for(let i = 0; i <data.results.length; i++){
     let employeesData = data.results[i];
     employee += '<div class="profile">'; 
     employee += '<img src="'+employeesData.picture.large+'">';
     employee += '<div class="contact">';
     employee += '<div class="fullName">'+employeesData.name.first+' '+employeesData.name.last+'</div>';
     employee += '<div class="email">' +employeesData.email+ '</div>';
     employee += '<div class="city">'  +employeesData.location.city+ '</div>';
     employee +='</div>';
     employee += '<div class="moreContact">' ;
     employee += '<hr class="divider">';
     employee += '<div class="phone">' +employeesData.phone+ '</div>';
     employee += '<div class="address">' +employeesData.location.street+ " " +employeesData.location.city+ " " +employeesData.location.state+ " "+ employeesData.location.postalcode+ '</div>';
     employee += '</div>';
     employee +='</div>';
     }
    employee += '</div>';

     $('#main').html(employee);
  }
});

/*  Modal */
$('profile').click( function(){
   console.log('bob');
  $('.modal').css({'display' : 'block'});
  $('.modal-profile').html(this.innerHTML);

});

