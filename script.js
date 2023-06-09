const quarts = Array.from(document.body.querySelectorAll('.quart'));
const center = document.body.querySelector('.center');
const wrap = document.body.querySelector('.wrap');
quarts.forEach(quart => quart.addEventListener('mouseover', function() {
  center.style.height = '65%';
  center.style.width = '65%'
  center.style.top = '17.5%';
  center.style.left = '17.5%';
  if (quart.id == "Works") {
    center.style.backgroundImage = "url('resources/works.png')";
    center.innerHTML = "Works";
  } else if (quart.id == "Keyboards") {
    center.style.backgroundImage = "url('resources/keyboards.jpg')";
    center.innerHTML = "Keyboards";
  } else if (quart.id == "Resume") {
    center.style.backgroundImage = "url('resources/resume.png')";
    center.innerHTML = "Resume";
  } else if (quart.id == "About") {
    center.style.backgroundImage = "url('resources/about.jpg')";
    center.innerHTML = "About";
  }
}));
quarts.forEach(quart => quart.addEventListener('mouseout', function(event) {
  center.style.height = '70%';
  center.style.width = '70%'
  center.style.top = '15%';
  center.style.left = '15%';
}));
