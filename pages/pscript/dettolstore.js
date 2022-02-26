var storedata = JSON.parse(localStorage.getItem("prodata"));

storedata.map(function(elem,index,array){


   var mainDiv=document.createElement("div");
   mainDiv.setAttribute("class","card");
   mainDiv.addEventListener("click",function(){
       openstore(elem);
   })

   var img=document.createElement("img");
   img.setAttribute("src",elem.img1);

   var name=document.createElement("p");
   name.innerText=elem.title;

   var mrp=document.createElement("p");
   mrp.innerText="MRP";
   mrp.setAttribute("class","mrp");

   var striked = document.createElement("s");
   striked.innerText=elem.striked;
   // striked.setAttribute("class","striked");
   // striked.style.textDecoration="line-through";

   
   

   var price=document.createElement("div");
   price.innerText="₹"+elem.price;
   price.setAttribute("class","newPrice")

// image percentafe off

   var dis=document.createElement("div");
  dis.innerText=elem.dis;
  dis.setAttribute("class","percentOff");

    mainDiv.append(img,name,mrp,striked,price,dis);
    document.querySelector(".container").append(mainDiv);

});

function openstore(elem){

localStorage.setItem("prodata",JSON.stringify(elem));
// console.log(data)
window.location.href="./product.html"
}
