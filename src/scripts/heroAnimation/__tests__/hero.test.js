jest.unmock("lodash-es/debounce");

import HeroAnimation from "../hero.js";

const canvas = document.createElement("canvas");
const container = document.createElement("div");

canvas.id = "js-canvas-hero";
container.className = ".grav-c-hero";

describe("HeroAnimation", () => {
  it("should output a warning if canvas isn't available", () => {
    const heroAnimation = new HeroAnimation(canvas, container);
  });
});
