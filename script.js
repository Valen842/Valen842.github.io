window.addEventListener("load", () => {

// function to get DOM elements
const $ = selector => document.querySelector(selector)

// constants
const HOVERED_TAGS = ['A', 'svg', 'path'];
const OFFSET_NAV = 70;
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// DOM elements
const CURSOR = $('#cursor');
let showCursor = false;

const SOCIALS = $('.redes-sociales');
const HEADER = $('header');
const THEME_BUTTON = $('#theme-button');

// helper functions
function isPartiallyInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height - OFFSET_NAV) >= 0);
  return vertInView
}

// SVGs
// SVGs
const sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>';
const moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>';

// theme switch
function getInitialTheme() {
  const darkIsPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return darkIsPreferred ? DARK_THEME : LIGHT_THEME;
}

let theme = getInitialTheme();

function applyTheme() {
  document.documentElement.style.setProperty('--transition-time', '0.3s');
  document.documentElement.style.setProperty('--primary-color', theme === DARK_THEME ? 'black' : 'beige');
  document.documentElement.style.setProperty('--secondary-color', theme === DARK_THEME ? 'beige' : 'black');
  document.documentElement.style.setProperty('--background-sidebar', theme === DARK_THEME ? 'none' : 'none');
  document.documentElement.style.setProperty('--titles', '#78664f');
  document.documentElement.style.setProperty('--heading', theme === DARK_THEME ? 'black' : 'beige');
  document.documentElement.style.setProperty('--cursor-color', theme === DARK_THEME ? 'rgb(105, 100, 100)' : '#d2b48c');
  document.documentElement.style.setProperty('--text', theme === DARK_THEME ? 'black' : '#FFF');
  document.documentElement.style.setProperty('--refs', theme === DARK_THEME ? 'beige' : '#000');
}

applyTheme();

function setTheme() {
  if (theme === LIGHT_THEME) {
    theme = DARK_THEME;
  } else {
    theme = LIGHT_THEME;
  }
  
  applyTheme();
}

THEME_BUTTON.addEventListener('click', setTheme);

// handler functions
function mouseout () {
  CURSOR.style.display = 'none';
  showCursor = false
}

function mousemove (e) {
  if (!showCursor) {
    showCursor = true
    CURSOR.style.display = 'block';
  }
  
  let x = e.clientX;
  let y = e.clientY;
  
  CURSOR.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  const elementBelow = document.elementFromPoint(x, y);

  if (elementBelow && HOVERED_TAGS.includes(elementBelow.tagName)) {
    CURSOR.classList.add('hovered');
  } else {
    CURSOR.classList.remove('hovered');
  }
}

function mousedown (e) {
  CURSOR.classList.add('clicked');
}

function mouseup (e) {
  CURSOR.classList.remove('clicked');
}

function scroll () {
  if (!isPartiallyInViewport(HEADER) && !SOCIALS.classList.contains('left')) {
    SOCIALS.classList.add('left');
  } else if (isPartiallyInViewport(HEADER) && SOCIALS.classList.contains('left')) {
    SOCIALS.classList.remove('left');
  }
}


// event listeners

// if the device not have mouse
if (!navigator.maxTouchPoints) {
  window.addEventListener('mouseout', mouseout)
  window.addEventListener('mousemove', mousemove)
  window.addEventListener('mousedown', mousedown)
  window.addEventListener('mouseup', mouseup)
}

window.addEventListener('scroll', scroll)
follow()

function follow() {
  const cursor = document.querySelector('.cursor');
  const offset = 10;

  document.addEventListener('mousemove', (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + offset + 'px';
      cursor.style.left = x + offset + 'px';

      // Agrega el siguiente código para verificar si el cursor está sobre un elemento con hover
      const hoveredElement = document.elementFromPoint(x, y);
      if (hoveredElement && hoveredElement.classList.contains('hover-effect')) {
          cursor.classList.add('hovered');
      } else {
          cursor.classList.remove('hovered');
      }
  });

  document.addEventListener('click', () => {
      cursor.classList.add('clicked');
      setTimeout(() => {
          cursor.classList.remove('clicked');
      }, 100);
  });
}

});