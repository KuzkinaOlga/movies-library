import * as basicLightbox from 'basiclightbox'


export function onFooterClick(event) {
    event.preventDefault();
    window.addEventListener('keydown', onFooterClose);
    const renderFooter = basicLightbox.create(`
    <div class="footer-modal">
     


    </div>`
    );
    renderFooter.show();

function onFooterClose(event) {
    if (event.code === 'Escape') {
      renderFooter.close();
      window.removeEventListener('keydown', onFooterClose); 
    }
  }
}   