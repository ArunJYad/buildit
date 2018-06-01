import HeroAnimation from "../hero.js";

describe("HeroAnimation", () => {
  it("should output a console warning if getContext isn't a function on canvas", () => {
    const canvas = document.createElement("div");
    const container = document.createElement("canvas");

    jest.spyOn(global.console, "warn");

    const hero = new HeroAnimation(canvas, container);

    expect(global.console.warn).toHaveBeenCalledWith(
      "the thingy bob doesn't support canvas. Bailing out."
    );
  });
});
