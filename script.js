gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -10",
        scrub:1,
    }

})