var button = document.getElementById("more");
var modal = document.getElementById("modal");
var closeBtn = document.getElementById("closer");
var entersite = document.getElementById("enter")
var entersiteWindow = document.getElementById("window");
entersite.onclick = function(){
  $('#window').fadeOut("slow");
};

$('.txt').css('opacity','0');
modal.style.display = "none"
$('.total').addClass("animated");
$('.total').addClass("rubberBand")

button.onclick = function(){
  modal.style.display = "flex";
  $('.box').addClass("animated");
  $('.box').addClass("bounceIn");

};
closeBtn.onclick = function(){
  modal.style.display = "none";


  $('.box').removeClass("animated");
  $('.box').removeClass("bounceIn");

}
$(window).scroll(function(){
  var scrl = $(this).scrollTop();


  if($(".txt").offset().top < scrl + 700){
      $(".txt").addClass("animated");
      $('.txt').css('opacity','1');
    $(".txt").addClass("bounceInRight");
  }
});
