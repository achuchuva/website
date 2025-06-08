var showcase = document.getElementById("showcase");
var fader = document.getElementById("fader");
var counter = 1;
setTimeout('fadeOut()', 5000);

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})

// Smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

function fadeOut()
{
  for (var i = 0; i <= 1; i += 0.01)
  {
    setTimeout(`setOpacity(${i})`, i * 1000);
  }

  setTimeout(`fadeIn()`, 1000);
}

function fadeIn()
{
  counter++;
  if (counter > 5)
  {
    counter = 1;
  }
  showcase.style.background = `#333 url('images/screenshots/${counter}.png') no-repeat center center/cover`;

  for (var i = 0; i <= 1; i += 0.01)
  {
    setTimeout(`setOpacity(${1 - i})`, i * 1000);
  }

  setTimeout(`fadeOut()`, 6000);
}

function setOpacity(opa) {
  fader.style.opacity = opa;
  fader.style.MozOpacity = opa;
  fader.style.KhtmlOpacity = opa;
  fader.style.filter = 'alpha(opacity=' + (opa * 100) + ');';
}