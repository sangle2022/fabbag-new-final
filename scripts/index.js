import {header,fotter} from '../components/navbar.js'
document.getElementById('navbar').innerHTML=header();
document.getElementById('fotter').innerHTML=fotter();

  let nan = document.getElementById('hdoffer')

  let bbb= document.getElementById('bb');bbb.addEventListener('click',fyfun);

  function fyfun(){
   
  document.querySelector("#hdoffer").style.display = "none"

  }



  let productobj=[
    {
    img_url:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-Reveal-1_1_f966e732-fa52-4f58-b117-b4ff2b57b163_2048x.png?v=1654234899",
    name:"PLUME PLUSH MATTE LIPSTICK OF YOUR CHOICE",
    price:599,
},
{
    img_url:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-Reveal-02_2048x.gif?v=1654408628",
    name:"C2 PRO EPIC LINK MATTE LIP INK SET OR E'CLAT PIGMENT CORRECTING SERUM OR TEEN TEEN CEREMONIAL MAKEUP 8 COLOUR EYESHADOW KIT",
    price:599,
}, 
{
    img_url:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag--Skincare-Reveal-1_e0d6e35d-42cf-410b-9a92-eb0525b4e65c_2048x.png?v=1654580730",
    name:"THE SOAP COMPANY INDIA FOOT THERAPY",
    price:599,

},
{
    img_url:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag--Skincare-Reveal-2_e505577a-ac80-4632-aaf1-f125466e35aa_2048x.png?v=1654754547",
    name:"BAISER INDIA EYE BROW GROWTH OIL",
    price:599,
}


]

displaydata(productobj)

function displaydata(productobj){
    let div=document.getElementById("product_div")
    productobj.forEach(function(elem){
        var box=document.createElement("div")
        box.addEventListener("click",function(){
            carddatafunction()
            }); 
        
        var img=document.createElement("img")
        img.setAttribute("src",elem.img_url)
        var p=document.createElement('h3')
        p.innerText=elem.name

            box.append(img,p)
     
            div.append(box)

    })

 }
// var cartdata=JSON.parse(localStorage.getItem("cart_arr"))||[];

function carddatafunction(){
//   var obj={
//     img :"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_compact.gif?v=1655088937",
//     name :"The Make It Reign June Fab Bag 3 Month",
//     price:599,
// };
//      cartdata.push(obj);
//      localStorage.setItem("cart_arr",JSON.stringify(cartdata))
window.location.href="addtocart.html"
}