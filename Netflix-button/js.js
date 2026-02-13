const DURATION = 6000; // ms countdown duration

const netflixBtn = document.getElementById("netflix");
const progressEl = netflixBtn?.querySelector(".progress");
const overlay = document.getElementById("overlay");

let timeoutId = null;
let canceledByMouse = false;
let finished = false;

function startAnimation() {
  canceledByMouse = false;
  finished = false;
  progressEl.style.transition = `width ${DURATION}ms linear`;
  // ensure start from 0
  progressEl.style.width = "0%";
  // trigger layout then start
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      progressEl.style.width = "100%";
    });
  });

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    onFinish();
  }, DURATION + 20);
}

function jumpToEndByMouse() {
  if (finished) return;
  canceledByMouse = true;
  clearTimeout(timeoutId);
  // make the progress jump to end quickly
  progressEl.style.transition = "width 50ms linear";
  progressEl.style.width = "100%";
}

function onFinish() {
  finished = true;
  // If the user moved the mouse during countdown, we don't run the action
  if (canceledByMouse) return;
  doAction();
}

function doAction() {
  document.body.classList.add("next");
  overlay.classList.add("visible");
}

document.addEventListener("DOMContentLoaded", () => {
  if (!netflixBtn || !progressEl) return;
  // start when the button appears
  startAnimation();

  // If mouse moves anywhere on the page, jump the animation to end, but don't trigger action
  function onMouseMove() {
    jumpToEndByMouse();
    // remove listener after first movement to avoid repeated toggles
    document.removeEventListener("mousemove", onMouseMove);
  }

  document.addEventListener("mousemove", onMouseMove, { passive: true });

  // Also allow clicking the button to skip to end but trigger action immediately
  netflixBtn.addEventListener("click", () => {
    // cancel mouse-cancel behavior
    canceledByMouse = false;
    clearTimeout(timeoutId);
    progressEl.style.transition = "width 250ms linear";
    progressEl.style.width = "100%";
    // ensure action runs after tiny delay
    setTimeout(onFinish, 260);
  });
});
