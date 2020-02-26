$(document).ready(function(){
  $('.hide_show a').click(function(){
    $('.sidebar').toggleClass("Amenu-space-remov");  
    var abc = $( "#myvideo" ).text();
    if(abc == ">"){
      $("#myvideo").text("<");
      $('.hide_show a').css({"transition-delay":"0.5s","border-radius":"0","border-top-right-radius":"50%","border-bottom-right-radius":"50%"});
    }else{
      $("#myvideo").text(">");
      $('.hide_show a').css({"transition-delay":"0.5s","border-radius":"0","border-top-right-radius":"50%","border-bottom-right-radius":"50%"});
    }
 });



 $('#select_all').on('click',function(){
  if(this.checked){
      $('.select_ms').each(function(){
          this.checked = true;
          $('.refresh').css("display","block");
      });
  }else{
       $('.select_ms').each(function(){
          this.checked = false;
          $('.refresh').css("display","none");
      });
    }
  });
});
