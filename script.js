
// add event to all nav link
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active-color");
     
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active-color");
      }
    }

  });
}
// about h-increase btn
const h_btn = document.querySelector('.h-increase');
const aboutbtn = document.querySelector('.full-btn');
h_btn.addEventListener('click', function () {
  if (h_btn.classList.contains('h-full')) {
    h_btn.classList.remove('h-full');
    h_btn.classList.add('h-[70.8vh]');
  } else {
    h_btn.classList.add('h-full');
    h_btn.classList.remove('h-[70.8vh]');
  }
  h_btn.classList.toggle('overflow-about');
  aboutbtn.classList.toggle('aboutbtn');
});


const feature = document.querySelectorAll("[feature-toggle]");
const ActiveColor = document.querySelectorAll("[ActiveColor]");
const cross = document.querySelectorAll("[cross-hidden]");
for (let i = 0; i < feature.length; i++) {
  feature[i].addEventListener("click", function () {
    if (feature[i].classList.contains('h-full')) {
      feature[i].classList.add('h-10');
      feature[i].classList.remove("h-full");
      ActiveColor[i].classList.remove("active-color");
      cross[i].classList.remove('hidden');
    } else {
      feature[i].classList.remove('h-10');
      feature[i].classList.add("h-full");
      ActiveColor[i].classList.add("active-color");
      cross[i].classList.add('hidden');
    }
  });
}


// image animation  at hero page 
let images = ['assets/image-3.webp','assets/image-5.webp','assets/image-4.webp','assets/image-bg.webp'];
let currentImage = 0;
let myDiv = document.getElementById('bg-2');

function changeBackground() {
  setTimeout(function() {
    myDiv.style.backgroundImage = 'url(' + images[currentImage] + ')';
    currentImage = (currentImage + 1) % images.length;
  }, 1000);
}
setInterval(changeBackground, 4000);

// Text animtaion 
const texts = ['Courses', 'Programs', 'Featuers'];
const container = document.getElementById('fade-text');
let currentText = 0;

function changeText() {
  const text = texts[currentText];
  const letters = text.split('');
  container.innerHTML = '';
  
  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.1}s`;
    container.appendChild(span);
  });
  
  currentText = (currentText + 1) % texts.length;
}

window.addEventListener('load', () => {
  changeText();
  setInterval(changeText, 5000);
});

// card % changer 
function updateCardPercentage(cardId, percentage) {
  const card = document.getElementById(cardId);
  const progressBar = card.querySelector('.progress-bar');
  const percentageText = card.querySelector('.percentage');
  const circumference = progressBar.r.baseVal.value * 2 * Math.PI;
  const offset = circumference - (percentage / 100 * circumference);
  progressBar.setAttribute('stroke-dasharray', `${circumference} ${circumference}`);
  progressBar.setAttribute('stroke-dashoffset', offset);
  percentageText.textContent = percentage;
}

//  update the percentage displayed on Card 1 to %
updateCardPercentage('card-1', 30);
updateCardPercentage('card-2', 20);
updateCardPercentage('card-3', 80);
updateCardPercentage('card-4', 90);
updateCardPercentage('card-5', 100);
updateCardPercentage('card-6', 70);
updateCardPercentage('card-7', 75);
updateCardPercentage('card-8', 95);


// Silder 
$('.autoplay').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }

  ]
});	