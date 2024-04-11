const modal = function() {  
  const html = document.documentElement;
  const body = document.body;
  const modalButton = document.querySelector('.promo__main-button');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__button');
  const backLayer = document.querySelector('.modal__backlayer');

  function toggleModal() {
    modal.classList.toggle('modal_active');
    backLayer.classList.toggle('modal__backlayer_active');
    body.classList.toggle('no-scroll');
    html.classList.toggle('no-scroll');
  }

  modalButton.onclick = function() {
    toggleModal()
  }

  closeButton.onclick = function() {
    toggleModal()
  }

  backLayer.onclick = function() {
    toggleModal()
  }
}

export default modal