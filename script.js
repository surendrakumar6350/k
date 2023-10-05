var pop = document.querySelector(".pop");
document.addEventListener("mousemove", function(dets) {
    pop.style.transform = `translate(${dets.x-10}px,${dets.y-10}px)`
});
var heading = document.querySelectorAll("nav h5, nav button, .haa h1, .iconr i");
heading.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        pop.style.height = 70+"px";
        pop.style.width = 70+"px";
        pop.style.backgroundColor = "transparent";
        pop.style.border = "0.1px solid green";
        gsap.to(".pop",{
            left: -20+"px",
            top: -20+"px"
        })
});
});
heading.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        pop.style.height = 20+"px";
        pop.style.width = 20+"px";
        pop.style.backgroundColor = "green";
       pop.style.border = "0";
       gsap.to(".pop",{
        left: 0+"px",
        top: 0+"px"
    })
    
    });
});

gsap.to(".merebaaremai h1", {
   
    scrollTigger: {
        trigger: ".merebaaremai h1",
        scroll: ".main",
        markers:true,
        start:"top 10%",
        color:"Blue"
    }
})