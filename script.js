const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const track = document.querySelector('.carousel-track');
const photoSources = [
  'images/8d06bc1c-cab3-45f7-bea4-923d544e353e.jpg',
  'images/35cdcd9a-8581-4b06-bcd0-07b3438aa641.jpg',
  'images/8f1ac53c-43d1-4b67-a257-9cd55dbc46c1.jpg',
  'images/3e7035c6-bb88-4f4e-92ff-b936f1b761c7.jpg',
  'images/cafb162e-32b0-4fa1-8bc0-299366b724be.jpg'
];
const photoAlts = ['John by the water', 'John outdoors in school uniform', 'John wearing pixel sunglasses', 'John standing outside a building', 'John at the coast in the evening'];
let startIndex = 0;
function renderPhotos() {
  track.replaceChildren();
  const count = window.matchMedia('(max-width: 700px)').matches ? 3 : 3;
  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % photoSources.length;
    const img = document.createElement('img');
    img.src = photoSources[index]; img.alt = photoAlts[index];
    track.appendChild(img);
  }
}
document.querySelector('.carousel-arrow.prev').addEventListener('click', () => { startIndex = (startIndex - 1 + photoSources.length) % photoSources.length; renderPhotos(); });
document.querySelector('.carousel-arrow.next').addEventListener('click', () => { startIndex = (startIndex + 1) % photoSources.length; renderPhotos(); });
renderPhotos();
