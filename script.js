// REGISTER
function register(){
let name=document.getElementById("rname").value;
let pass=document.getElementById("rpass").value;

localStorage.setItem("user",name);
localStorage.setItem("pass",pass);

alert("Registered Successfully");
showLogin();
}

// LOGIN
function login(){
let name=document.getElementById("lname").value;
let pass=document.getElementById("lpass").value;

if(name==localStorage.getItem("user") && pass==localStorage.getItem("pass")){
document.getElementById("login").classList.add("hide");
document.getElementById("main").classList.remove("hide");
}else{
alert("Wrong Login");
}
}

// TOGGLE
function showLogin(){
document.getElementById("register").classList.add("hide");
document.getElementById("login").classList.remove("hide");
}

function showRegister(){
document.getElementById("login").classList.add("hide");
document.getElementById("register").classList.remove("hide");
}

// SELECT SERVICE
let selectedService="";
let selectedAmount=100;

function selectService(service,amount){
selectedService=service;
selectedAmount=amount;

document.getElementById("service").innerHTML="<option>"+service+"</option>";
alert(service+" selected");
}

// FORM + PAYMENT + WHATSAPP
function submitForm(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let msg=document.getElementById("msg").value;

if(name==""||mobile==""||selectedService==""){
alert("Please fill all details");
return;
}

// UPI PAYMENT
let upi="upi://pay?pa=kushwaha.5@superyespop&pn=AV Information Centre&am="+selectedAmount+"&cu=INR";
window.location.href=upi;

// WHATSAPP
setTimeout(()=>{
let text="Name:"+name+" Mobile:"+mobile+" Service:"+selectedService+" Message:"+msg+" Payment ₹"+selectedAmount;
window.open("https://wa.me/919262579654?text="+encodeURIComponent(text));
},4000);

}
