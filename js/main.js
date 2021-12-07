$(document).ready(function (){
    $(window).scroll(function (){
        if (this.scrollY > 50){
            $('#home').addClass("back-white");
        }else if(this.scrollY < 50){
            $('#home').removeClass("back-white");
        }
    })
});

// <==   MixItUp Filter PORTFOLIO   ==> //
const mixer = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 400
    }
});

const linkPortfolio = document.querySelectorAll('.portfolio-change')
function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('filter-active'))
        this.classList.add('filter-active')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

!(function ($){
    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

})(jQuery);