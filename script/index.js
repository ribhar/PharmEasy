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



    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.height = "80px";
        document.querySelector(".overflowbar").style.visibility = "hidden"
        // console.log(document.querySelector(".overflowbar").innerHTML)
    } else {
        document.querySelector(".navbar").style.height = "123px";
        document.querySelector(".overflowbar").style.visibility = "visible"
    }
    }


    var data = [
        {
          title: "Dettol Siti Shield Protect+ N95 Anti-Pollution Smart Mask, Unisex (Medium)",
          price: 391.5,
          striked: 799,
          dis: 51,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/I40136/dettol-siti-shield-protect-n95-anti-pollution-smart-mask-unisex-medium-2-1632776028.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI40136%2Fdettol-siti-shield-protect-n95-anti-pollution-smart-mask-unisex-medium-6.2-1632776030.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I40136/dettol-siti-shield-protect-n95-anti-pollution-smart-mask-unisex-medium-2-1632776028.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I40136/dettol-siti-shield-protect-n95-anti-pollution-smart-mask-unisex-medium-6.3-1632776030.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Horlicks Protein Plus Vanilla Flavour Powder 400gm",
          price: 484,
          striked: 550,
          dis: 12,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/B44899/horlicks-protein-plus-vanilla-flavour-powder-400gm-2-1643882683.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FB44899%2Fhorlicks-protein-plus-vanilla-flavour-powder-400gm-6.1-1641788341.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/B44899/horlicks-protein-plus-vanilla-flavour-powder-400gm-2-1643882683.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/B44899/horlicks-protein-plus-vanilla-flavour-powder-400gm-6.1-1641788341.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Vicks Vaporub 50ml, Relief From Cold, Cough, Headache And Body Pain",
          price: 108.75,
          striked: 145,
          dis: 25,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1643883635.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2F181140%2Fvicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-3-1643883301.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1643883635.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-3-1643883301.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Liveasy Wellness Apple Cider Vinegar With Mother -Improves Metabolism- 500ml Bottle",
          price: 227.15,
          striked: 649,
          dis: 65,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1643880237.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FJ51815%2Fliveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-3-1643880236.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1643880237.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-3-1643880236.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Nivea Aloe Protect Spf 15 Body Lotion - 400 Ml",
          price: 234,
          striked: 360,
          dis: 35,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/R32692/nivea-aloe-protect-spf-15-body-lotion-400-ml-2-1641792437.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FR32692%2Fnivea-aloe-protect-spf-15-body-lotion-400-ml-7-1641792440.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/R32692/nivea-aloe-protect-spf-15-body-lotion-400-ml-2-1641792437.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/R32692/nivea-aloe-protect-spf-15-body-lotion-400-ml-7-1641792440.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Sensodyne Toothbrush: Sensitive Toothbrush With Soft Rounded Bristles, 3 Pieces (Buy 2, Get 1 Free)",
          price: 82.5,
          striked: 110,
          dis: 25,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/I04900/sensodyne-toothbrush-sensitive-toothbrush-with-soft-rounded-bristles-3-pieces-buy-2-get-1-free-2-1643881842.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://cdn01.pharmeasy.in/dam/products_otc/I04900/sensodyne-toothbrush-sensitive-toothbrush-with-soft-rounded-bristles-3-pieces-buy-2-get-1-free-2-1643881842.jpg?dim=320x320&dpr=1&q=100",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I04900/sensodyne-toothbrush-sensitive-toothbrush-with-soft-rounded-bristles-3-pieces-buy-2-get-1-free-2-1643881842.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I04900/sensodyne-toothbrush-sensitive-toothbrush-with-soft-rounded-bristles-3-pieces-buy-2-get-1-free-2-1643881842.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Baidyanath Ayush Kwath - 25 Tea Bags",
          price: 50,
          striked: 250,
          dis: 80,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/L93305/baidyanath-ayush-kwath-25-tea-bags-2-1641790947.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FL93305%2Fbaidyanath-ayush-kwath-25-tea-bags-3-1641790958.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/L93305/baidyanath-ayush-kwath-25-tea-bags-2-1641790947.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/L93305/baidyanath-ayush-kwath-25-tea-bags-3-1641790958.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Volini Pain Relief Gel - 30 Gm",
          price: 91,
          striked: 130,
          dis: 30,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/183150/volini-pain-relief-gel-30-gm-1-1643883494.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2F183150%2Fvolini-pain-relief-gel-30-gm-2-1643883643.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/183150/volini-pain-relief-gel-30-gm-1-1643883494.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/183150/volini-pain-relief-gel-30-gm-2-1643883643.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Kofol Immunity Tablets - 60'S",
          price: 108,
          striked: 180,
          dis: 40,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/P14315/kofol-immunity-tablets-60s-2-1641790027.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FP14315%2Fkofol-immunity-tablets-60s-6.1-1641790031.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/P14315/kofol-immunity-tablets-60s-2-1641790027.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/P14315/kofol-immunity-tablets-60s-6.1-1641790031.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Sandpuppy Shoulderstrap - Electric Heating Pad For Shoulder",
          price: 1099.45,
          striked: 1999,
          dis: 45,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/M81091/sandpuppy-shoulderstrap-electric-heating-pad-for-shoulder-2-1641795074.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FM81091%2Fsandpuppy-shoulderstrap-electric-heating-pad-for-shoulder-6.1-1641795071.jpg&w=256&q=75",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/M81091/sandpuppy-shoulderstrap-electric-heating-pad-for-shoulder-2-1641795074.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/M81091/sandpuppy-shoulderstrap-electric-heating-pad-for-shoulder-6.1-1641795071.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Johnson'S Baby No More Tears Shampoo - 500ml",
          price: 320,
          striked: 400,
          dis: 20,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/I20342/johnsons-baby-no-more-tears-shampoo-500ml-2-1641787966.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://cdn01.pharmeasy.in/dam/products_otc/I20342/johnsons-baby-no-more-tears-shampoo-500ml-2-1641787966.jpg?dim=320x320&dpr=1&q=100",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I20342/johnsons-baby-no-more-tears-shampoo-500ml-2-1641787966.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I20342/johnsons-baby-no-more-tears-shampoo-500ml-2-1641787966.jpg?dim=100x0&dpr=1&q=100",
    
        },
        {
          title: "Cadbury Bournvita Five Star Magic Nutrition Drink Refill Of 750 G",
          price: 276.25,
          striked: 325,
          dis: 15,
          img1:"https://cdn01.pharmeasy.in/dam/products_otc/T54714/cadbury-bournvita-five-star-magic-nutrition-drink-refill-of-750-g-2-1643876842.jpg?dim=320x320&dpr=1&q=100",
          img2:"https://cdn01.pharmeasy.in/dam/products_otc/T54714/cadbury-bournvita-five-star-magic-nutrition-drink-refill-of-750-g-2-1643876842.jpg?dim=100x0&dpr=1&q=100",
          imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/T54714/cadbury-bournvita-five-star-magic-nutrition-drink-refill-of-750-g-2-1643876842.jpg?dim=100x0&dpr=1&q=100",
          imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/T54714/cadbury-bournvita-five-star-magic-nutrition-drink-refill-of-750-g-3-1643876611.jpg?dim=100x0&dpr=1&q=100",
    
        },
      ];

      localStorage.setItem("data",JSON.stringify(data));
      var product = JSON.parse(localStorage.getItem("data"));
     
      function searchfun(){
          var value = document.getElementById("search").value;

          var searchData =product.filter(function(el){
              return el.title.includes(value.toUpperCase());
          });
          console.log(searchData)
      }