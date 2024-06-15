let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  setTimeout(() => {
    successMessage.style.display = 'block';
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
  const texts = document.querySelectorAll('.loader-text');
  let index = 0;

  function showText() {
      texts.forEach((text, i) => {
          text.classList.remove('active');
          if (i === index) {
              text.classList.add('active');
          }
      });

      index = (index + 1) % texts.length;
  }

  showText();
  setInterval(showText, 5000);
});
