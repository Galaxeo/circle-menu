const quarts = Array.from(document.body.querySelectorAll('.quart'));
const center = document.body.querySelector('.center');
quarts.forEach(quart => quart.addEventListener('mouseover', function() {
  center.style.height = '65%';
  center.style.width = '65%'
  center.style.top = '17.5%';
  center.style.left = '17.5%';
  // center.style.backgroundImage = quart.style.backgroundImage;
}));
quarts.forEach(quart => quart.addEventListener('mouseout', function() {
  center.style.height = '70%';
  center.style.width = '70%'
  center.style.top = '15%';
  center.style.left = '15%';
  center.style.backgroundImage = "url('resources/rins_black_hair.png')"
}));
console.log(center);
center.addEventListener("click", function() {

})
// center.addEventListener('mouseover', function() {
//   center.innerHTML = "HI!"
//   center.style.background = "yellow";
// })
// center.addEventListener('mouseout', function() {
//   center.innerHTML = "";
//   center.style.background = "lightgray";
// })
