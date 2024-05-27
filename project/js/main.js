gsap.from(".heading2 .decoration",{
    height:0,
    ease: "power3.inOut",
    scrollTrigger:{
        trigger:".heading2",
        start: "top center",
    }
});

gsap.from(".heading2 h2",{
    x: "-120%",
    duration: 1.0,
    ease: "power3.in",
    scrollTrigger: {
        trigger:".heading2",
        start: "top center",
    }
});

gsap.from(".heading1 .decoration",{
    y:100,
    duration:1,
    stagger: 0.3,
    ease: "power3.inOut",
    scrollTrigger : {
        trigger: ".heading1",
        start:"top center",
    }
});
gsap.from(".heading1 h2",{
    opacity:0,
    duration:0.8,
    ease:"power3.in",
    scrollTrigger: {
        trigger:".heading1",
        start: "top center",
    }
})


let navbar = document.getElementById("navbar");
navlinks = document.getElementById("nav-links");
window.addEventListener("scroll", function() 
{
    if (this.window.pageYOffset > 10) {
        navbar.classList.add('icon');
        navlinks.classList.add("icon");
    }else {
        navbar.classList.remove('icon');
        navlinks.classList.remove("icon");
    }
    
})