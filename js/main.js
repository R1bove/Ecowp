   // smooth opacity girl function
  $(function() {
    $(window).scroll(function(scroll){
    	let sectionminusheight = 500;
        let currentScroll = $(window).scrollTop() - sectionminusheight ;
       let currentSection = getCurrentSectionInfo(currentScroll);
       if (currentSection) {
        let currentOpacity = getCurrentOpacity(currentSection, currentScroll);
        if (currentOpacity > 0.5) {
            if (currentSection.sectionImage) {
                currentSection.sectionImage.css("opacity", 1);
            }
            currentSection.nextSectionImage.css("opacity", 0);
        }
        else {
            if (currentSection.sectionImage) {
                currentSection.sectionImage.css("opacity", currentOpacity * 5  );
            }
            if (currentSection.nextSectionImage) {
                currentSection.nextSectionImage.css("opacity", 1 - currentOpacity * 5);
            }
        } 
        if (currentSection.prevSectionImage) {
            currentSection.prevSectionImage.css("opacity", 0);
        }
    }
       else {
        hideAllGirls();
       }
    });

});

// fade opacity girl function
  function getCurrentSectionInfo(currentScroll) {
        let first_section = $('.the-explorer').offset().top - $(window).height(),
            second_section = $('.zero-waster').offset().top - $(window).height(),
            third_section = $('.conscious-consumer').offset().top - $(window).height(),
            fourth_section = $('.activist').offset().top - $(window).height(),
            fifth_section = $('.contributing').offset().top - $(window).height(),
            footer =  $('#footer').offset().top - $(window).height(),
            take_section = $('.take').offset().top - $(window).height(),
            girl1 = $('.girl'),
            girl2 = $('.girl2'),
            girl3 = $('.girl3'),
            girl4 = $('.girl4');

            if  (currentScroll > take_section && currentScroll <  first_section){
                return {
                    sectionStart: take_section,
                    sectionEnd: first_section,
                    sectionImage: null,
                    nextSectionImage: girl1,
                    prevSectionImage: null
                };
            }

        if  (currentScroll > first_section && currentScroll < second_section){
            return {
                sectionStart: first_section,
                sectionEnd: second_section,
                sectionImage: girl1,
                nextSectionImage: girl2,
                prevSectionImage: null
            };
        }
         if  (currentScroll > second_section && currentScroll < third_section) {
             return {
                sectionStart: second_section,
                sectionEnd: third_section,
                sectionImage: girl2,
                nextSectionImage: girl3,
                prevSectionImage: girl1
            };
        }
        if  (currentScroll > third_section && currentScroll < fourth_section){
             return {
                sectionStart: third_section,
                sectionEnd: fourth_section,
                sectionImage: girl3,
                nextSectionImage: girl4,
                prevSectionImage: girl2
            };
        }
        if  (currentScroll > fourth_section && currentScroll < fifth_section){
             return {
                sectionStart: fourth_section,
                sectionEnd: fifth_section,
                sectionImage: girl4,
                nextSectionImage: girl3,
                prevSectionImage: girl2
            };
        }
        if  (currentScroll > fifth_section && currentScroll < footer){

          return {
                sectionStart: footer,
                sectionEnd: null,
                sectionImage: girl3,
                nextSectionImage: null,
                prevSectionImage: girl4
            },
           girl4.css("opacity", 0), //last static opacity
           girl3.css("opacity", 1); //last static opacity
    
        }
    
}
  
//Function for fixed girl to footer section
  function checkOffset() { 					
    if($('.girl3').offset().top + $('.girl3').height() 
                                           >= $('#footer').offset().top ) 
        $('.girl3').css('position', 'absolute')  + height() - top ;
   

    if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
        $('.girl3').css('position', 'fixed'); 

}
$(document).scroll(function() {
    checkOffset();
});



  function getCurrentOpacity(currentSection, currentScroll) {
        return (currentSection.sectionEnd - currentScroll ) / (currentSection.sectionEnd - currentSection.sectionStart);
    }