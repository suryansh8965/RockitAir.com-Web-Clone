 
function circlemove() {
    document.querySelector("#video")
        .addEventListener("mousemove", e => {


            document.querySelector(".circle").style.display = "initial"
            document.querySelector(".circle").style.scale = "1"
            document.querySelector(".circle").style.left = `${e.clientX}px`
            document.querySelector(".circle").style.top = `${e.clientY}px`
        })
    document.querySelector("#video")
        .addEventListener("mouseleave", e => {
            document.querySelector(".circle").style.left = "50%"
            document.querySelector(".circle").style.top = "50%"
            document.querySelector(".circle").style.scale = ".1"
            document.querySelector(".circle").style.display = "none"
        })
}

function drag() {
    document.querySelector(".partnerscomp")
        .addEventListener("mousemove", e => {



            document.querySelector(".drag").style.display = "initial"
            document.querySelector(".drag").style.scale = "1"
            document.querySelector(".drag").style.left = `${e.offsetX}px`
            document.querySelector(".drag").style.top = `${e.offsetY}px`
        })
    document.querySelector(".partnerscomp")
        .addEventListener("mouseleave", e => {
            document.querySelector(".drag").style.left = "50%"
            document.querySelector(".drag").style.top = "0%"
            document.querySelector(".drag").style.scale = ".1"
            document.querySelector(".drag").style.display = "none"
        })
}
function slides() {
    let allSlides = document.querySelectorAll(".sld");
    allSlides = [...allSlides];

    var hover = null;

    allSlides.forEach(function (elem) {
        elem.addEventListener("mouseover", function (dets) {
            hover = "#opener" + dets.target.dataset.index;

            document.querySelector(hover).style.zIndex = "99999";
            document.querySelector(hover).style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) 1s"
            document.querySelector(hover).style.width = "100%";

        })

        elem.addEventListener("mouseleave", function (dets) {
            hover = "#opener" + dets.target.dataset.index;
            document.querySelector(hover).style.zIndex = "initial";
            document.querySelector(hover).style.width = "0%";
        })
    });

    document.querySelector(".circular")
        .addEventListener("mousemove", function (dets) {
            var boundvalues = document.querySelector(".circular").getBoundingClientRect()
            var xValue = dets.clientX - boundvalues.x;
            var yValue = dets.clientY - boundvalues.y;

            document.querySelector("#minicircle").style.top = yValue + "px";
            document.querySelector("#minicircle").style.left = xValue + "px";
            document.querySelector("#minicircle").style.boxShadow = "0 0 8px 2px red";
        })

    document.querySelector(".circular")
        .addEventListener("mouseleave", function (dets) {
            document.querySelector("#minicircle").style.top = 50 + "%";
            document.querySelector("#minicircle").style.left = 50 + "%";

            document.querySelector("#minicircle").style.boxShadow = "none";
        })
}
gsap.to("#work .card", {
    scrollTrigger: {

        trigger: "#work",
        pin: "#work",
        start: "top 0%",
        scrub: 1,
    },
    top: "-100%",
    ease: Power4,
    stagger: .08
})
gsap.to("#allwork .indrag", {
    scrollTrigger: {

        trigger: "#allwork",
        pin: "#allwork",
        start: "top -5%",
        scrub: 1,
    },
    top: "49%",
    ease: Power4,
    stagger: .08
})
gsap.to("#allwork", {
    scrollTrigger: {

        trigger: ".indrag",
      
        start: "top 49%",
        end: "top 49%",
        scrub: true,
    },
   
    backgroundColor: "black",
    
})
gsap.to("#allwork .rowstxts", {
    scrollTrigger: {

        trigger: ".indrag",
        
        start: "top 20%",
        end: "top 20%",
        scrub: true,
    },
    
    color: "white",
     
})
gsap.to("#line", {
    scrollTrigger: {

        trigger: ".indrag",
        
        start: "top 20%",
        end: "top 20%",
        scrub: true,
    },
    
    height: "1px",
    backgroundColor: "white",
    
})
gsap.to(".indrag", {
    scrollTrigger: {

        trigger: ".indrag",
         
        start: "top 20%",
        end: "top 20%",
        scrub: true,
    },
 
    backgroundColor: "yellow",
    color: "black",
     
})
gsap.to(".row h1", {
    scrollTrigger: {

        trigger: "#content",
        
        start: "top 70%",
        end: "top 15%",
        scrub: 1,
       
    },
    
    color: "black",

   
})
gsap.to("#line", {
    scrollTrigger: {

        trigger: "#content",
       
        start: "top 70%",
        end: "top 15%",
        scrub: 1,
      
    },
 
    backgroundColor: "black",
    
})
 

slides()
circlemove();
drag()