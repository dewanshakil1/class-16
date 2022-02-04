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

accHeader.forEach(items=>{
  items.addEventListener("click",function(){
    items.classList.toggle("active")
    if(items.classList.contains("active")){
      items.nextElementSibling.style.height= items.nextElementSibling.scrollHeight +"px";
    }
    else{
      items.nextElementSibling.style.height="0px";

    }
  })

})
