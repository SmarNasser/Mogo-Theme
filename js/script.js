const search = document.querySelector(".mdi-magnify");
const cards = document.querySelectorAll(".card-header");
let globalIndex = 0;

search.addEventListener('click',function(){
    const searchForm = document.querySelector(".navbar-search");
    searchForm.classList.toggle("d-none");
})
for(let [index, value] of cards.entries()){
    value.addEventListener('click',function(){
        const arrows = document.querySelectorAll(".arrow");
        for(let i = 0; i < arrows.length; i++){
            if(i !== index && arrows[i].classList.contains("rotate")){
                arrows[i].classList.toggle("rotate");
            }
        }
        arrows[index].classList.toggle("rotate");
    })
}

let aboutOffset = $(".about").offset().top ;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > aboutOffset){
        $('#navbar').addClass('fixed-top');
        $('#navbar').addClass('navbar-background');
        $('#navbar').removeClass('bg-light');
        $('#backTop').fadeIn(1000);
    }
    else{
        $('#navbar').removeClass('fixed-top');
        $('#navbar').removeClass('navbar-background');
        $('#navbar').addClass('bg-light');
        $('#backTop').fadeOut(500);

    }
})

$('#backTop').click(function(){
    $('html, body').animate({scrollTop:0},1000)
})


$(document).ready(function(){
    $('.slick-content').slick({
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        fade: true,
    });
    $('.testimonials-content').slick({
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        fade: true,
    });
  });

//   $(document).ready(function(){
//     $('.testimonials-content').slick({
//         slidesToScroll: 1,
//         autoplay:true,
//         autoplaySpeed: 4000,
//         fade: true,
//     });
//   });

//   $('.slick-prev').click(function(){
//     $('.slick-content').slick('slickPrev');
//   })
  
//   $('.slick-next').click(function(){
//     $('.slick-content').slick('slickNext');
//   })
  