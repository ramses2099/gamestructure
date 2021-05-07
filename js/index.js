//game animation loop
//https://developer.mozilla.org/es/docs/Games/Anatomy

var nextTick;
var lastTick;
var tickLength;
var numTicks = 0;
var stopMain = undefined;
var timeSinceTick;
var lastRender;

//set init State
function setInitialState() {}
//
function udpate(tick) {
  console.log("tick : ", tick);
}
//
function render(tFrame) {
    
}
//
;(function () {
  function main(tFrame) {
    stopMain = window.requestAnimationFrame(main);
    nextTick = lastTick + tickLength;

    if (tFrame > nextTick) {
      timeSinceTick = tFrame - lastTick;
      numTicks = Math.floor(timeSinceTick / tickLength);
    }

    queueUpdate(numTicks);
    render(tFrame);
    lastRender = tFrame;
  }
  //
  function queueUpdate(numTicks) {
    for (let i = 0; i < numTicks; i++) {
      lastTick = lastTick + tickLength;
      update(lastTick);
    }
  }

  lastTick = performance.now();
  lastRender = lastTick;
  tickLength = 50;

  setInitialState();
  main(performance.now());
})();
