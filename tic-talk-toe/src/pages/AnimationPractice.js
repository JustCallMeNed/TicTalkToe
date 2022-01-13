// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
//duration values in seconds
// gsap.from(".link", { duration: 0.5, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from("#right", { duration: 1, x: "-100vw", delay: 1, ease: "power2.in" });
// gsap.from("#left", { duration: 1, x: "-100%", delay: 1, ease: "power2.in" });
//.from() ends in position set in function

// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });
//.to() ends in base position set by CSS: values entered into function dictate where element's animation tween begins

// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { opacity: 1, scale: 1, rotation: 0, delay: 3.5 }
// );
// fromTo function accepts two sets of parameters {}, separated by a comma: first {} sets "from", second sets "to"

// const obj = { x: 0 };
// gsap.to(obj, { duration: 2, x: 100, onUpdate: () => console.log(obj.x) });

const timeline = gsap.timeline({ defaults: { duration: 1 } });
// set default values for properties in timeline constant: ^ JS will now assume the default duration property for anything in the timeline will be 1 second
// timeline obviates the need for "delay: 1" properties in each tween; items on timeline play one after the other
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from("#right", { x: "-100vw", ease: "power2.in" }, 1)
  // delay value can be added, however; delay can be absolute^ (from timeline start) or relativeV (to previous tween's start)
  .from("#left", { x: "-100%", ease: "power2.in" }, "<.2")
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  timeline.timeScale(3);
  timeline.reverse();
});
