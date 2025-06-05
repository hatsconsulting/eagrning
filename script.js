 function animateCountUp(el, target, duration) {
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;

      function update() {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(target * easeOutQuad(progress));
        el.innerText = "₹" + current.toLocaleString("en-IN");

        if (frame === 1) {
          el.style.visibility = 'visible'; // show at first frame
        }

        if (frame < totalFrames) {
          requestAnimationFrame(update);
        }
      }

      function easeOutQuad(t) {
        return t * (2 - t);
      }

      requestAnimationFrame(update);
    }

    window.onload = () => {
      const counters = document.querySelectorAll(".counter");
      counters.forEach(counter => {
        const raw = counter.innerText.replace(/[₹,]/g, '');
        const target = parseInt(raw, 10);
        if (isNaN(target)) return;
        counter.innerText = "₹0"; // set initial visible value
        animateCountUp(counter, target, 5000); // 5 seconds animation
      });
    };
