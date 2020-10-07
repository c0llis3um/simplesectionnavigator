//Simple script that detects if user clicks the arrow down and scrolls  href to scroll to anchor name 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=  
     if (scroll <= 700) {
        $("#sdown").attr("href","#a2");
    }
  
    if (scroll >= 100) {
        $("#sdown").attr("href","#a2");
        $("#sup").addClass("yes-d");
    }
  
    if (scroll >= 700) {
        $("#sdown").attr("href","#a3");
    }

 });