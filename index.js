gsap.registerPlugin(ScrollTrigger);

let sections = Array.from(document.querySelectorAll('.paral'))
console.log(sections)


gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".combine",
    pin: true,
    scrub: true,
    end: () => `+=${document.querySelector(".combine").offsetWidth}`
  }
});

gsap.fromTo('.square', {
  opacity: 0,
  y:0,
}, {
  opacity: 1,
  ease: 'ease',
  y:200,
  scrollTrigger: {
    trigger: '.parallax4',
    start: 'top bottom',
    end: 'top center',
    scrub: true,
  }
});

gsap.to('.square2', {
  scrollTrigger: {
    trigger: '.square2',
    // start:'top bottom',
    // toggleActions: 'restart none reverse none',
    scrub:true,
  },
  x: -400,
  y: -400,
  rotate: 360,
  duration: 3,

});