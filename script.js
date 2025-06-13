Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hing", { videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/3.mp4"]})

gsap.to(".scrollitem", {
    scrollTrigger: {
        trigger: "#featuredsection",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})
let sections = document.querySelectorAll(".scrollitem")
Shery.imageEffect(".screen", {
    style: 5, 
    slideStyle: (setScroll) => {
        sections.forEach( (section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                },
            })
        })
    },
});
const footer = document.getElementById('footer');
const footerVideo = footer.querySelector('.playback video');

footer.addEventListener('mouseenter', () => {
    footerVideo.play();
});

footer.addEventListener('mouseleave', () => {
    footerVideo.pause();
});
