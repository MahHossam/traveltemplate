//updated..

$(document).ready(function () {
    $(document).ready(function () {

        //owl 
        $(".owl-carousel").owlCarousel({
            center: true,
            loop: true,
            items: 4,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 4
                }
            }
        });


        //card slider
        $('.card-slider').bxSlider({
            mode:'fade',
            pager:false,
            controls:true
        });
        

    }); // doc.ready
});
