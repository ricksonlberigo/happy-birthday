const gM = document.querySelector('.gallery-modal')
const iM = document.querySelector('.gallery-modal img')

function closeGallery() {
  gM.style.visibility = 'hidden'
  iM.style.transform = 'scale(0)'
}

function openGallery(src) {
  gM.style.visibility = 'visible'
  iM.style.transform = 'scale(1)'
  iM.src = src
}
