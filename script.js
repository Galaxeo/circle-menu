const quarts = Array.from(document.body.querySelectorAll('.quart'));
const center = document.body.querySelector('.center');
const wrap = document.body.querySelector('.wrap');
let flag = 0;
quarts.forEach(quart => quart.addEventListener('mouseover', function() {
  flag = 1;
  center.style.height = '65%';
  center.style.width = '65%'
  center.style.top = '17.5%';
  center.style.left = '17.5%';
  if (quart.id == "Works") {
    center.style.backgroundImage = "url('resources/works.png')";
  } else if (quart.id == "Keyboards") {
    center.style.backgroundImage = "url('resources/keyboards.jpg')";
  } else if (quart.id == "Resume") {
    center.style.backgroundImage = "url('resources/resume.png')";
  } else if (quart.id == "About") {
    center.style.backgroundImage = "url('resources/about.jpg')";
  }
}));
quarts.forEach(quart => quart.addEventListener('mouseout', function(event) {
  center.style.height = '70%';
  center.style.width = '70%'
  center.style.top = '15%';
  center.style.left = '15%';
  event.stopPropagation();
}));
center.addEventListener('mouseover', function(event) {
  flag = 1;
})
wrap.addEventListener('mouseout', function() {
  console.log('out');
  if (flag == 0) {
    center.style.backgroundImage = "url('resources/rins_black_hair.png')";
  }
})
center.addEventListener('mouseout', function(event) {
  event.stopPropagation();
})
