var slide = document.querySelector(".slide");
    var images = document.querySelectorAll(".slide img");

    var pre = document.querySelector("#pre");
    var nex = document.querySelector("#nex");

    // counter
    var count = 1;

    var size = images[0].clientWidth;
    slide.style.transform = 'translateX(' + (-size * count) +'px)';
    
    //button listner
    nex.addEventListener("click",()=>{
        if(count >= images.length-1) return;
        slide.style.transition = "transform 0.4s ease-in-out";
        count++;
        slide.style.transform = 'translateX(' + (-size * count) +'px)';
    });

    pre.addEventListener("click",()=>{
        if(count <= 0) return;
        slide.style.transition = "transform 0.4s ease-in-out";
        count--;
        slide.style.transform = 'translateX(' + (-size * count) +'px)';
    });

    slide.addEventListener("transitionend",() => {
        if(images[count].id==="last"){
            slide.style.transition = "none";
            count = images.length - 2;
            slide.style.transform = 'translateX(' + (-size * count) +'px)';
        }
        if(images[count].id==="first"){
            slide.style.transition = "none";
            count = images.length - count;
            slide.style.transform = 'translateX(' + (-size * count) +'px)';
        }
    });