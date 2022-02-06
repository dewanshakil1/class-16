const btn=document.querySelector(".apply");
const modal=document.querySelector(".s-modal");
const mclose=document.querySelector(".s-modal .close");
const aclose=document.querySelector(".s-alert .close");
const alert=document.querySelector(".s-alert");
const keep=document.querySelector(".keep");
const diss=document.querySelector(".dis");

btn.addEventListener("click", function (e) {
  e.preventDefault(); 
  modal.classList.add("active");
});

mclose.addEventListener("click", function () {
  alert.style.display="flex";
});
aclose.addEventListener("click", function () {
  alert.style.display="none";
});
keep.addEventListener("click",function(){
  alert.style.display="none";

})
diss.addEventListener("click",function(){
  alert.style.display="none";
  modal.classList.remove("active");
})

modal.addEventListener("click", function (e) {
  if (e.target == this) {
    modal.classList.remove("active");
  }
});

/**
 * accordion-header
 */

// accordion start
const accHeader = document.querySelectorAll(".accordion-header");

accHeader.forEach(items=>{
  items.addEventListener("click",function(){
    accHeader.forEach(items =>{
      if(items != this){
        items.classList.remove("acc_active");
        items.nextElementSibling.style.height="0px";
    }
    });
    
    items.classList.toggle("acc_active");


    if(items.classList.contains("acc_active")){
      items.nextElementSibling.style.height= items.nextElementSibling.scrollHeight +"px";
    }
    else{
      items.nextElementSibling.style.height="0px";
    }
  });

});
