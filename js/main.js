$(document).ready(function(){
           $(".left-main-pic, .right-main-pic").hover(function(){
           	$(this).find('.main-caption').fadeIn('slow');
               $(this).find('.main-caption').show();
           }, function(){
               $(this).find('.main-caption').hide();
           })
       })

$(document).ready(function(){
           $(".content-item").hover(function(){
           	$(this).find('.form').fadeIn('slow');
               $(this).find('.form').show();
           }, function(){
               $(this).find('.form').hide();
           })
       })

$(document).ready(function(){
           $(".bg-hover").hover(function(){
           	$(this).find('.wrap-item').fadeIn('slow');
               $(this).find('.wrap-item').show();
           }, function(){
               $(this).find('.wrap-item').hide();
           })
       })