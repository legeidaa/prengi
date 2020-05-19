$(document).ready(function () {
    $('.manage__slider').slick({
        autoplay: false,
        dots: true,
        arrows:true,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }]
    });

    $('.decision__slider').slick({
        autoplay: false,
        dots: true,
        arrows:true,
        appendDots: $('.slider-dots'),
        swipeToSlide: true
    });
});



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.manage__nav-menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('manage__nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('manage__nav-menu_active');   
        });
    });

});


$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
});
$('.modal__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});



$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});