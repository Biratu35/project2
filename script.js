//Enabling Toggle Search

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => { search.classList.toggle('active'); navbar.classList.remove('active'); }

//Enabling Responsive Menu

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => { navbar.classList.toggle('active'); search.classList.remove('active'); }

//Removing Menu or Search when scrolling

window.onscroll = () => { navbar.classList.remove('active'); search.classList.remove('active'); }

// Shadow Header when scrolling

let header = document.querySelector('header');

window.addEventListener('scroll', () => { header.classList.toggle('shadow', window.scrollY > 0 ); })


// Dark mode toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if(document.body.classList.contains('dark-mode')){
        toggleButton.textContent = '☀️';
      } else {
        toggleButton.textContent = '🌙';
      }
    });
