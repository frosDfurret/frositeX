content = document.getElementById('main-content')
shade = document.getElementById('shade')
socials = document.getElementById('socials-content')
projects = document.getElementById('projects-content')
about = document.getElementById('about-content')

function slidout(num) {
  //i could also be using a class here but i'm too lazy lamfo
  if (num == 0) {
    content.style.left = '0px';
    content.style.top = '0px';
    setTimeout(function(){shade.style.visibility = 'hidden';},500)
    shade.style.opacity = 0;
  }
  if (num == 1) {
    content.style.left = '333px';
    content.style.top = '0px';
    shade.style.visibility = 'visible';
    shade.style.opacity = 1;
    socials.style.visibility = 'visible';
    about.style.visibility = 'hidden';
    projects.style.visibility = 'hidden';
  }
  if (num == 2) {
    content.style.left = '0px';
    content.style.top = 'calc(-100% + 55px)';
    shade.style.visibility = 'visible';
    shade.style.opacity = 1;
    socials.style.visibility = 'hidden';
    about.style.visibility = 'hidden';
    projects.style.visibility = 'visible';
  }
  if (num == 3) {
    content.style.left = '-333px';
    content.style.top = '0px';
    shade.style.visibility = 'visible';
    shade.style.opacity = 1;
    socials.style.visibility = 'hidden';
    about.style.visibility = 'visible';
    projects.style.visibility = 'hidden';
  }
}