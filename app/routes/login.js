import Ember from 'ember';
import express from 'require'

export default Ember.Route.extend({  

    actions:{
        validate(){
            /*var e=document.getElementById('email').value;
            var p=document.getElementById('password').value;
            if(e=='nageshrupnar@gmail.com' && p=='123456'){
                alert('Login Successful');
               window.open('employee');
            }

            else if(e=='vasanthugar@gmail.com'&&p=='vasant@123')
            {
                alert('Login Successful');
                window.open('allUserData');
            }

            else
            sweetAlert('Oops!', 'Wrong email or password!', 'error');
        },*/

        var e=$('#email').val();
        var p=$('#password').val();
        console.log(e+''+p);

        $.ajax({
            type:'GET',
            url : 'api/loginuserdatas/',
            dataType: 'json',
            async:false,
            data:'{"email":"'+email+'","password" :"'+password+'"}',
            success:function(){
                alert('fdfhgdshf');
            }
        })
    },

     backbtn(){
            window.history.back();
        }
  
}
});