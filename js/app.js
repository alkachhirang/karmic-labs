//  navbar

function opennav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hiddden")
    document.getElementById("menubtn-icon").classList.toggle("cross");
}

// project-slider
$('.custom_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows:false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow:4,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint:850,
            settings: {
                slidesToShow:2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint:576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1.10,
                slidesToScroll: 1,
            }
        },
    ]
});
// about
$('.myslider').slick({
    dots: false,
    infinite: true,
    speed:5000,
    slidesToShow:3,
    slidesToScroll:3,
    arrows: false,
    autoplay: true,
    autoplayspeed:0,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow:3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1.10,
                slidesToScroll: 1,
            }
        },
    ]
});
// preloader
        setTimeout(() => {
        console.log("Delayed for 5 second.");
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow_hidden")
        }, 5000);
