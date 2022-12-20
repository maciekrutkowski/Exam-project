//Events flip cards
var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
//Language popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
//Image slideshow
var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
} 
//About page Surprise me button
function Randomize() {
var arrayofsites = ["riis.html", "permanente.html", "cereshaven.html"];
var randomsite = arrayofsites[Math.floor(Math.random() * arrayofsites.length)];
  document.getElementsByClassName("random");
window.location.replace(randomsite);
}