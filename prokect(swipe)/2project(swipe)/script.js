

// select the canvas tag
const canvas = document.querySelector("canvas");
// give all the 2d tool to the canvas
const context = canvas.getContext("2d");

// set the canvas dimensions width & height

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// resize the window will be done easily with this function

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
//   when we resize the image it draw the image again 
  render();
});

function files(index){
    var data = 
}

gsap.to("#page1",{
  scrollTrigger:{
    // form were to start
    trigger:`#page1`,
    // element top
    start:`top top`,
    // screen top
    end:`bottom top`,
    pin:true, // the page will stop 
    scroller:`#main`
  } 
})

gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})