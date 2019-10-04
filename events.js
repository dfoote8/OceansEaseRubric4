var numOne=document.getElementById("num-one");
var numTwo=document.getElementById("num-two");
var addSum=document.getElementById("add-sum");

numOne.addEventListener("click", function(){
  alert("hi");
  console.log ("hi");
});

var hotel= document.getElementById("hotel");
var hotelPic = document.getElementById("hotel-pic");

 hotel.addEventListener("click", function(){
if (hotelPic.className === "hide") {
  hotelPic.className= "";
}
 });
