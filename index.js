gsap.registerPlugin(ScrollTrigger);

let sections = Array.from(document.querySelectorAll('.paral'))
console.log(sections)


gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".combine",
    pin: true,
    scrub: 1,
    end: () => `+=${document.querySelector(".combine").offsetWidth}`
  }
});

gsap.fromTo('.square', {
    opacity: 0
  }, {
    opacity: 1,
    ease: 'ease',
    scrollTrigger: {
      trigger: '.parallax4',
      start: 'top bottom',
      end: 'top center',
      scrub: 1
    }
  });

gsap.fromTo('.square2', {
    translateY: 0,
    opacity:0
  }, {
    translateY: -1000,
    opacity:1,
    ease: 'ease',
    scrollTrigger: {
      trigger: '.parallax4',
      start: 'top bottom',
      end: 'top center',
      scrub: 1,
    }
  });