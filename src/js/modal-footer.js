import * as basicLightbox from 'basiclightbox';

export function onFooterClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onFooterClose);
  const renderFooter = basicLightbox.create(`
    <div class="footer-modal">
     <ul class="footer-team__list">
     <li class="footer-team__item">
     <img class="footer-team__pic" width=200  src="images/KravchukOleksandr.jpg" alt="KravchukOleksandr" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Kravchuk Oleksandr</h3>
     <p class="footer-team__prof">Team Leader</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/AleksandroKravchuk">
     <svg class="footer-team__media-icon">
     <use href="../images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="/images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="#" alt="" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Kolischuk Oleg</h3>
     <p class="footer-team__prof">Scrum Master</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/Ohleh">
     <svg class="footer-team__media-icon">
     <use href="../images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="./images/AndriietsHryhorii.jpg" alt="AndriietsHryhorii" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Andriiets Hryhorii</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/HryhoriiAndriiets1974">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="#" alt="" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Smychenko Oleksiy</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/alfrntlower">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="./images/DedovViacheslav.jpg" alt="DedovViacheslav" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Dedov Viacheslav</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/ViacheslavDedov">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="./images/YankoDmitriy.jpg" alt="YankoDmitriy" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Yanko Dmitriy</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/yanko-dima">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="/images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="./images/TetianaMyslynska.jpg" alt="TetianaMyslynska" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Tetiana Myslynska</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/TetianaMyslynska">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="/images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="./images/SkrytskaIrina.jpg" alt="SkrytskaIrina" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Skrytska Irina</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="#">
     <svg class="footer-team__media-icon">
     <use href="../images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="/images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src="./images/KuzkinaOlga.jpg" alt="KuzkinaOlga" >
     <div class="footer-team__crew">
     <h3 class="footer-team__name">Kuzkina Olga</h3>
     <p class="footer-team__prof">Developer</p>
     <ul class="footer-team__media-social">
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link" target="_blank" href="https://github.com/KuzkinaOlga">
     <svg class="footer-team__media-icon">
     <use href="../images/footer-symbol-defs.svg#icon-github"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="./images/footer-symbol-defs.svg#icon-linkedin"></use>
     </svg>
     </a>
     </li>
     <li class="footer-team__media-zone">
     <a class="footer-team__media-link">
     <svg class="footer-team__media-icon">
     <use href="/images/footer-symbol-defs.svg#icon-facebook"></use>
     </svg>
     </a>
     </li>
     </ul>
    </div>
     </li>

    </div>`);
  renderFooter.show();

  function onFooterClose(event) {
    if (event.code === 'Escape') {
      renderFooter.close();
      window.removeEventListener('keydown', onFooterClose);
    }
  }
}
