$(document).ready(function(){
    // validate username and password for signup page
    $('.register-form #id_username,.register-form #id_password,.register-form #re_pass').on('change',function(){
        console.log('abc')
        var name = $('#id_username').val();
        var password = $('#id_password').val();
        var re_password = $('#re_pass').val();
        $.ajax({
            type: "GET",
            url: '/validate/user/',
            data:{'user_name':name,'password':password},
            success: function(response)
            {
              if (response['is_taken'])
              {
                  $('.name-error').html('This user is already selected');
                  $('.name-error').css("color", "red");
              }
              else{
                $('.name-error').html('');
                $('.name-error').removeAttr("style");
              }

              if (response['password_error'])
              {
                $(".password").html('Password should be more than 6 character');
                $('.password').css("color", "red");
              }
              else{
                $(".password").html('');
                $('.password').removeAttr('style');

              }
              if(password!==re_password && re_password.length>0)
              {
                $(".re-password").html('Password should be same');
                $('.re-password').css("color", "red");
              }
              else{
                $(".re-password").html('');
                $('.re-password').removeAttr('style');
              }
            }
            });
    })

    // Login page 

    // $('.login-form').submit(function(e){
    //   var name = $('.login-form #id_username').val();
    //   var password = $('.login-form #id_password').val();
    //   console.log(name,password)
    //   e.preventDefault();
    //   $.ajax({

    //     type: "GET",
    //     url: '/validate/user/',
    //     data:{'user_name':name,'password':password},
    //     success: function(response)
    //         {
    //           console.log(response['valid_user']);
    //           if(!response['valid_user']){
    //             $('.login_error').html('Uername or passsword is incorrect');
    //             $('.login_error').css('color','red');
    //           }
    //           else{
    //             $('.login_error').html('');
    //             $('.login_error').removeAttr('style');
    //           }
    //         }

    //   })
    // })


});