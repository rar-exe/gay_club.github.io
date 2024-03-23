let adresses = document.querySelectorAll(".adress")
let copyboard = document.querySelector(".copyboard")

adresses.forEach(function(adr){
  adr.addEventListener("click", function(){
    navigator.clipboard.writeText(adr.innerHTML);
    copyboard.style.position = "fixed"
    copyboard.style.display = "flex";
    setTimeout(function(){
      copyboard.style.position = "none"
      copyboard.style.display = "none";
    }, 1000)
  })
});