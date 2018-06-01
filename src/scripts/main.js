import Scroll from "./smoothScroll/scrollModule.js";
import ScrollReveal from "./scrollReveal/scrollRevealModule.js";
import toogleSwitch from "./toogleSwitch/toogleSwitch.js";
import HeroAnimation from "./heroAnimation/hero.js";

const scroll = new Scroll({ class: ".grav-c-cta" });
const scrollReveal = new ScrollReveal();
const canvas = document.getElementById("js-canvas-hero");
const container = document.querySelector(".grav-c-hero");

if (canvas && container) {
  let params = {
    width: 0,
    height: 0,
    ctx: null,
    points: [],
    target: null,
    animateHeader: true,
    canvas: null,
    container: null,
    fadeBubble: 80
  };

  const heroAnimation = new HeroAnimation(canvas, container, params);
}

scroll.init();
scrollReveal.init();
toogleSwitch();
