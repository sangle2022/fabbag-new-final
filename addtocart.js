import {header,fotter} from './components/navbar.js'
document.getElementById('navbar').innerHTML=header();
document.getElementById('fotter').innerHTML=fotter();

var obj={
    img :"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3.gif?v=1655088937",
    name :"The Make It Reign June Fab Bag",
    price:599,
};
let data= [];
data.push(obj)
localStorage.setItem("cart_arr",JSON.stringify(data))
// var cartdata=JSON.parse(localStorage.getItem("cart_arr"))||[];
append()
function append(){

    data.forEach(function(ele){
        let div1=document.getElementById("imgdom")
        let img=document.createElement("img")
        img.src=ele.img

        

        // let div2=document.createElement("div")
        // div2.setAttribute("id","minimg")
        let img1=document.createElement("img")
        img1.src=ele.img
        //div2.append(img1)
        div1.append(img,img1)

        let nameP=document.getElementById("name_price")
            let nameh1=document.createElement("h1")
            nameh1.innerText=ele.name
            let priceh1=document.createElement("h1")
            priceh1.innerText="Rs. "+ele.price+".00"
            nameP.append(nameh1,priceh1)

        let buttons=document.getElementById("btns")
        let month1=document.createElement("button")
        month1.innerText="1 MONTH"
        month1.addEventListener("click",fun1month)

        function fun1month(){
            priceh1.innerText="Rs. "+ele.price+".00"

        }

        let month3=document.createElement("button")
        month3.innerText="3 MONTH"
        month3.addEventListener("click",fun3month)

       function fun3month(){
        priceh1.innerText=`Rs. ${ele.price*3}.00`

    }

        let input_qty=document.createElement("input")
        input_qty.value=1;

        let add_btn=document.createElement("button")
        add_btn.setAttribute("id","add2cart")
        add_btn.innerText="ADD TO CART";
        add_btn.addEventListener("click",myfun)
            
        

        buttons.append(month1,month3,input_qty,add_btn)
        


    })
}
function myfun(){
    window.location.href="cart.html"
}

function vew(){
    document.getElementById("retbtn").style.backgroundColor="white"
    document.getElementById("cusbtn").style.backgroundColor="white"
    document.getElementById("desbtn").style.backgroundColor="white"

    document.getElementById("btncon").innerHTML=null
    

    let btn=document.getElementById("viebtn")
    btn.style.backgroundColor="#e5b95f";

    var box = document.createElement("div") ;
    let img=document.createElement("img")
    img.src="./imgsrc/table.bmp"
    
   box.append(img)
   document.querySelector("#btncon").append(box)

}

function ret(){
    document.getElementById("viebtn").style.backgroundColor="white"
    document.getElementById("cusbtn").style.backgroundColor="white"
    document.getElementById("desbtn").style.backgroundColor="white"

    let btn=document.getElementById("retbtn")
    btn.style.backgroundColor="#e5b95f";
    document.getElementById("btncon").innerHTML=null
    var box = document.createElement("div") ;
  
   var text =  document.createElement("ul")
   text.innerHTML= `<ul>
   <li>Returns Policy for FAB BAG Monthly Subscriptions: 100% Happiness or Money-Back Guarantee</li>
   <li>For more details, please see our Policy here.</li>
   <li>Should you have any questions regarding this product, please feel free to get in touch with our friendly Customer Experience Team at crew@fabbag.com within 48 hours of receiving the shipment or call us at 022-4896-7878 Mon - Fri, 9am - 7pm.</li>
   </ul>`
  box.append(text)
  document.querySelector("#btncon").append(box)
}

function cus(){
    document.getElementById("viebtn").style.backgroundColor="white"
    document.getElementById("retbtn").style.backgroundColor="white"
    document.getElementById("desbtn").style.backgroundColor="white"

    let btn=document.getElementById("cusbtn")
    btn.style.backgroundColor="#e5b95f";
        document.getElementById("btncon").innerHTML=null
    var box = document.createElement("div") ;
  
   var text =  document.createElement("ul")
   text.innerHTML= `
   <h3>Customer Reviews</h3> 
    <p>No reviews yet</p>` 
  box.append(text)
  document.querySelector("#btncon").append(box)
}

function des(){
    document.getElementById("viebtn").style.backgroundColor="white"
    document.getElementById("retbtn").style.backgroundColor="white"
    document.getElementById("cusbtn").style.backgroundColor="white"

    let btn=document.getElementById("desbtn")
    btn.style.backgroundColor="#e5b95f";
    document.getElementById("btncon").innerHTML=null
    var box = document.createElement("div") ;
  
   var text =  document.createElement("ul")
   text.innerHTML= `
   <p>It's raining beauty! Make a splash with 5 cult-favourite makeup & skincare essentials in the Make It Reign June Fab Bag.
   Here's what you can expect inside your June Fab Bag: </p>
   <ul>
       <li>Plume Plush Matte Lipstick of your choice!*</li> 
       <li>C2P Pro Epic Matte Lip Ink Set OR e’clat Fadeout Pigment Correcting Serum OR Teen Teen Ceremonial Makeup 8 Color Eyeshadow Kit*</li> 
        <li>The Soap Company India Foot Therapy</li> 
        <li> Baiser India Eye Brow Growth Oil</li>
       <li>Bonus Skincare*</li> 
   </ul>
  
   <p>*Two offers cannot be clubbed. Makeup choice will be available on the order confirmation page, on a first-come, first-served basis. 2nd product is subject to stock availability. Bonus skincare will be customized by the Fab Bag Crew.</p> 
  <p>FAB BAG delivers the best of beauty and makeup products once a month, customized just for you.</p> ` 
  box.append(text)
  document.querySelector("#btncon").append(box)

}
