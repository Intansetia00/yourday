// Simple confetti using Canvas Confetti
function loadConfettiScript() {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  script.onload = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  document.body.appendChild(script);
}

window.onload = loadConfettiScript;