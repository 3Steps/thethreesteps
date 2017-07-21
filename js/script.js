var button = document.getElementById("more");
var modal = document.getElementById("modal");
var closeBtn = document.getElementById("closer");
modal.style.display = "none";

button.onclick = function(){
  modal.style.display = "flex";
};
closeBtn.onclick = function(){
  modal.style.display = "none";
}
