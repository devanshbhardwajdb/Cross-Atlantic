burger = document.querySelector('.burger');
navbar = document.querySelector('#nav');
leftnav = document.querySelector('#nav-left');
rightnav = document.querySelector('#nav-right');


burger.addEventListener('click',()=>{
    // leftnav.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    burger.classList.toggle('rotate')

})


// gsap.to("#nav",{
//     backgroundColor : "rgba(0,0,0,0.7)",
//     height: "75px",
//     duration: 0.5,
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller :"body",
//         // markers: true,
//         start:"top -10%",
//         end :"top -11%",
//         scrub:1

//     }
// });

gsap.registerPlugin(ScrollTrigger);

//responsive
let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
    gsap.to("#nav",{
        backgroundColor : "rgba(0,0,0,0.7)",
        height: "75px",
        duration: 0.5,
        scrollTrigger:{
            trigger:"#nav",
            scroller :"body",
            // markers: true,
            start:"top -10%",
            end :"top -11%",
            scrub:1
    
        }
    });

});

gsap.to("#arrow",{
    opacity:1,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#btn2",
        scroller :"body",
        // markers: true,
        start:"top 70%",
        end :"top 75%",
        scrub:1

    }
});
