import gsap from "gsap";

export default class BlobAnim {
  constructor(root, leftEye, rightEye) {
    this.root = root;
    this.leftEye = leftEye;
    this.rightEye = rightEye;
    this.breathingTl = null;
    this.blinkTl = null;
  }

  intro() {
    gsap.set(this.root.position, { y: 2 });
    gsap.to(this.root.position, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });

    gsap.fromTo(
      this.root.scale,
      { x: 1.2, y: 0.8, z: 1.2 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
        delay: 0.2,
      }
    );
  }

  startBreathing() {
    this.breathingTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "sine.inOut" },
      delay: 1.2,
    });

    this.breathingTl.to(this.root.position, { y: "+=0.1", duration: 1 }, 0);
    this.breathingTl.to(
      this.root.scale,
      {
        x: "+=0.02",
        y: "-=0.015",
        z: "+=0.02",
        duration: 1,
      },
      0
    );
  }

  startBlinking() {
    this.blinkTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    this.blinkTl
      .to([this.leftEye.scale, this.rightEye.scale], {
        y: 0.05,
        duration: 0.08,
        ease: "power2.in",
      })
      .to(
        [this.leftEye.scale, this.rightEye.scale],
        {
          y: 1.5,
          duration: 0.14,
          ease: "power2.out",
        },
        "+=0.02"
      );
  }

  animateSection(section, isMobile) {
    this.kill();

    if (section === "hero") {
      const blobTargetPos = isMobile ? { x: 0, y: -1 } : { x: 1.5, y: 0 };
      const targetScale = isMobile ? 2 : 3;
      const eyesTarget = !isMobile
        ? { x: "-=0.1", y: "-=0" }
        : { x: "-=0", y: "+=0.08" };
      gsap.to(this.root.position, {
        x: blobTargetPos.x,
        y: blobTargetPos.y,
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => {
          this.startBlinking();
          this.startBreathing();
        },
      });
      gsap.to(this.root.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 1.2,
        ease: "power3.inOut",
      });

      gsap.to([this.leftEye.position, this.rightEye.position], {
        x: eyesTarget.x,
        y: eyesTarget.y,
        duration: 1.2,
        ease: "power3.inOut",
      });
    }

    if (section === "skills") {
      const squishScale = !isMobile ? 2.2 : 1.6;
      gsap.to(this.root.scale, {
        x: squishScale,
        y: squishScale * 0.8,
        z: squishScale,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to([this.leftEye.position, this.rightEye.position], {
        y: 0,
        z: 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(this.leftEye.position, {
        x: -0.05,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(this.rightEye.position, {
        x: 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(this.root.position, {
        y: 1,
        x: 0,

        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          this.blobSmash(isMobile);
        },
      });
    }
  }

  blobSmash(isMobile) {
    const targetScale = isMobile ? 2 : 3;

    // Step 1: Charge up (red glow + squash before smash)


    gsap.to(this.root.scale, {
      x: targetScale * 1.4,
      y: targetScale * 0.6,
      z: targetScale * 1.4,
      duration: 0.25,
      ease: "power3.in",
    });

    // Step 2: Slam down FAST
    gsap.to(this.root.position, {
      y: -0.3, // overshoot below floor
      duration: 0.25,
      delay: 0.25,
      ease: "power4.in",
    });

    // Step 3: Shockwave bounce up
    gsap.to(this.root.position, {
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "elastic.out(1.2, 0.4)",
      onComplete: () => {
        this.startBlinking();
        this.startBreathing();
        document.dispatchEvent(new CustomEvent("skills-blob-landed")); // tell skills to fly
      },
    });

    // Step 4: Scale overshoot (squash -> stretch -> settle)
    gsap.to(this.root.scale, {
      x: targetScale * 0.9,
      y: targetScale * 1.2,
      z: targetScale * 0.9,
      delay: 0.25,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(this.root.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      delay: 0.65,
      duration: 0.6,
      ease: "elastic.out(1.2, 0.4)",
    });

    // Eyes bounce with the smash
    gsap.to([this.leftEye.position, this.rightEye.position], {
      y: 0.25,
      delay: 0.5,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  }

  kill() {
    this.breathingTl?.kill();
    this.blinkTl?.kill();
  }
}
