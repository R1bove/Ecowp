$(document).ready(() => {
    showCurrentGirl();
    $(window).scroll(() => {
        showCurrentGirl();
        checkOffset();
    });
});

function isElementHidden(el) {
    return el.hasClass('fadeOut');
}

function showSectionImage(sectionInfo) {
    showElement(sectionInfo.sectionImage);
}

function hideElement(el) {
    el.addClass('fadeOut');
    el.removeClass('fadeIn');
}

function showElement(el) {
    el.removeClass('hidden');
    el.removeClass('fadeOut');
    el.addClass('fadeIn');
}

function hideAllGirls() {
    const girls = $('.girls > div');
    for (let i = 0; i < girls.length; i++) {
       hideElement($(girls[i]));
    }
}

function showCurrentGirl() {
    let currentScroll = $(window).scrollTop() - 300;
    let currentSection = getCurrentSectionInfo(currentScroll);
    if (currentSection && currentSection.sectionImage) {
        if (isElementHidden(currentSection.sectionImage)) {
            hideAllGirls();
            showSectionImage(currentSection);
        }
    } else {
        hideAllGirls();
    }
}

// fade opacity girl function
function getCurrentSectionInfo(currentScroll) {
    let first_section = $('.the-explorer').offset().top - $(window).height(),
        second_section = $('.zero-waster').offset().top - $(window).height(),
        third_section = $('.conscious-consumer').offset().top - $(window).height(),
        fourth_section = $('.activist').offset().top - $(window).height(),
        fifth_section = $('.contributing').offset().top - $(window).height(),
        footer = $('#footer').offset().top - $(window).height(),
        take_section = $('.take').offset().top - $(window).height(),
        girl1 = $('.girl'),
        girl2 = $('.girl2'),
        girl3 = $('.girl3'),
        girl4 = $('.girl4');

    if (currentScroll > take_section && currentScroll < first_section) {
        return {
            sectionImage: null,
            nextSectionImage: girl1,
            prevSectionImage: null
        };
    }

    if (currentScroll > first_section && currentScroll < second_section) {
        return {
            sectionImage: girl1,
            nextSectionImage: girl2,
            prevSectionImage: null
        };
    }
    if (currentScroll > second_section && currentScroll < third_section) {
        return {
            sectionImage: girl2,
            nextSectionImage: girl3,
            prevSectionImage: girl1
        };
    }
    if (currentScroll > third_section && currentScroll < fourth_section) {
        return {
            sectionImage: girl3,
            nextSectionImage: girl4,
            prevSectionImage: girl2
        };
    }
    if (currentScroll > fourth_section && currentScroll < fifth_section) {
        return {
            sectionImage: girl4,
            nextSectionImage: girl3,
            prevSectionImage: girl2
        };checkOffset();
    }
    if (currentScroll > fifth_section && currentScroll < footer) {

        return {
            sectionImage: girl4,
            nextSectionImage: null,
            prevSectionImage: girl3
        };

    }

    if (currentScroll > footer) {

        return {
            sectionImage: girl4,
            nextSectionImage: null,
            prevSectionImage: null
        };

    }


}

//Function for fixed girl to footer section
function checkOffset() {
    if ($('.girl4').offset().top + $('.girl3').height() >= $('#footer').offset().top - 160) {
        $('.girl4').css('position', 'absolute');
    }


    if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top - 110) {
        $('.girl4').css('position', 'fixed');
    }

}
