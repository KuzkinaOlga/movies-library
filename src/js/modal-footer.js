import * as basicLightbox from 'basiclightbox';
import KravchukOleksandr from '../images/KravchukOleksandr.jpg';
// import KolischukOleg from '../images/KolischukOleg.jpg';
import AndriietsHryhorii from '../images/AndriietsHryhorii.jpg';
import SmychenkoOleksiy from '../images/SmychenkoOleksiy.jpg';
import DedovViacheslav from '../images/DedovViacheslav.jpg';
import YankoDmitriy from '../images/YankoDmitriy.jpg';
import TetianaMyslynska from '../images/TetianaMyslynska.jpg';
import SkrytskaIrina from '../images/SkrytskaIrina.jpg';
import KuzkinaOlga from '../images/KuzkinaOlga.jpg';
import iconGithub from '../images/github.svg';
import oskar from '../images/oskar.jpg';

export function onFooterClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onFooterClose);
  const renderFooter = basicLightbox.create(`
    <div class="footer-modal">
     <ul class="footer-team__list">
     <li class="footer-team__item">

     <img class="footer-team__pic" src=${oskar} alt="KravchukOleksandr" >

     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/AleksandroKravchuk" class="footer-team__name">Kravchuk Oleksandr</a>
     <p class="footer-team__prof">Team Leader</p>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="Kolischuk Oleg" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/Ohleh" class="footer-team__name">Kolischuk Oleg</a>
     <p class="footer-team__prof">Scrum Master</p>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="AndriietsHryhorii" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/HryhoriiAndriiets1974" class="footer-team__name">Andriiets Hryhorii</a>
     <p class="footer-team__prof">Developer</p>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="Smychenko Oleksiy" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/alfrntlower" class="footer-team__name">Smychenko Oleksiy</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="DedovViacheslav" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/ViacheslavDedov" class="footer-team__name">Dedov Viacheslav</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="YankoDmitriy" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/yanko-dima" class="footer-team__name">Yanko Dmitriy</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="TetianaMyslynska" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/TetianaMyslynska" class="footer-team__name">Tetiana Myslynska</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="SkrytskaIrina" >
     <div class="footer-team__crew">
     <a target="_blank" href="#" class="footer-team__name">Skrytska Irina</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${oskar} alt="KuzkinaOlga" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/KuzkinaOlga" class="footer-team__name">Kuzkina Olga</a>
     <p class="footer-team__prof">Developer</p>
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
