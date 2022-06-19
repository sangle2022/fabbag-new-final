// var form=document.querySelector("form");
// var userData=JSON.parse(localStorage.getItem("userData"))||[]


// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     var data={
//         Email:form.Email.value,
//         Address:form.Address.value,


//     }
//     console.log(data)
//     localStorage.setItem("userData",JSON.stringify(data))
//         // window.location.href=""
//         //alert("Signup Sucessfull")
// })



//////////////////////////////////////////

function checkOut(Email,Address){
    this.Email=Email;
    this.Address=Address;
}


function myfunction(event){
    event.preventDefault();

     let form=document.getElementById("form");

     let Email=form.Email.value;
     let Address=form.Address.value;



     let s1= new checkOut(Email,Address)
     console.log(s1)

     let data=JSON.parse(localStorage.getItem("pro")) ||[]

     data.push(s1)

     localStorage.setItem("Pro",JSON.stringify(data))
     //window.location.reload()
      window.location.href="information.html"


}