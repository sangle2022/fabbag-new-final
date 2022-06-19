import {header,fotter} from './components/navbar.js'
document.getElementById('navbar').innerHTML=header();
document.getElementById('fotter').innerHTML=fotter();

var obj={
    img :"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_compact.gif?v=1655088937",
    name :"The Make It Reign June Fab Bag 3 Month",
    price:599,
};
let data=JSON.parse(localStorage.getItem("cart_arr")) || [];
//data.push(obj)
localStorage.setItem("cart_arr",JSON.stringify(data))
append(data)
function append(data){
    data.forEach(function(ele,i){
        let tr=document.createElement("tr");

        let td1= document.createElement("td");
        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("id","td1")
        td1.append(img)


        let td2= document.createElement("td");
            td2.innerText=ele.name;
            td2.setAttribute("id","td2")
        let td3= document.createElement("td");
            
            let inp=document.createElement("input")
            inp.setAttribute("id","qty")
            inp.value=1;
            td3.append(inp)

            let td4= document.createElement("td");
            td4.innerText="Rs. "+ele.price+".00";
            //td4.style.backgroundColor="red"
            td4.style.width="100px";

            let td5= document.createElement("td");
            td5.innerText="close";
            td5.setAttribute("class","material-symbols-outlined")
            
            td5.style.cursor="pointer"
            td5.style.marginRight="25px";
            td5.setAttribute("id","td5")
            td5.addEventListener("click",function(){
                deletep(ele,i)
            })



        let body=document.querySelector("tbody")
        tr.append(td1,td2,td3,td4,td5)
        body.append(tr)

       let div_p= document.querySelector("#tprice")
       div_p.innerHTML="Rs. "+ele.price+".00";

           
    })
}
function deletep(ele,index){
    data.splice(index,1)
    localStorage.setItem("cart_arr",JSON.stringify(data))
    window.location.reload();
}
// function updatecart(){
    
//     // let data=JSON.parse(localStorage.getItem("cart_arr")) || [];
//     // data.forEach(function(el,i){
//     //         if(el.name==)
//     //  let nqty=document.querySelector("#qty").value;
//     // console.log(nqty)
//     // document.querySelector("#tprice").value=document.querySelector("#tprice").value*nqty


//    // })
    
    
// }

// function checkoutpage(){
//     window.location.href="checkout.html"
// }