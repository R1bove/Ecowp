/*$(document).ready(function(){
 
     $(window).scroll(function(){
            if ( $(this).scrollTop() > 500 ){
                $(".fixed").css({ opacity : "0.5" } );
                 $(".fixed2").css({ opacity : "0.5" } );
            } else if( $(this).scrollTop() < 50 ) {
                $(".fixed2").css({ opacity : 0 });
                $(".fixed").css({ opacity : 1 });
            } 
            if ( $(this).scrollTop() > 800 ) {
                $(".fixed").css({ opacity : 0 });
                $(".fixed2").css({ opacity : 1 });

            }
          if ( $(this).scrollTop() > 1000 ) {
                $(".fixed2").css({ opacity : 0.5 });
                $(".fixed3").css({ opacity : 0.5 });
            }else if( $(this).scrollTop() < 800 ) {
                $(".fixed3").css({ opacity : 0 });
              
            }
            if ( $(this).scrollTop() > 1200 ) {
                $(".fixed2").css({ opacity : 0 });
                $(".fixed3").css({ opacity : 1 });
            }else if( $(this).scrollTop() < 800 ) {
                $(".fixed3").css({ opacity : 0 });
              
            }

        
        });
    $(".xor").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000 );
            return false;
    });
    
    });