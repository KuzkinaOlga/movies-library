import * as basicLightbox from 'basiclightbox';
import KravchukOleksandr from '../images/KravchukOleksandr_1.25.jpg';
import KolischukOleg from '../images/KolischukOleg_1.25.jpg';
import AndriietsHryhorii from '../images/AndriietsHryhorii_1.25.jpg';
import SmychenkoOleksiy from '../images/SmychenkoOleksiy_1.25.jpg';
import DedovViacheslav from '../images/DedovViacheslav_1.25.jpg';
import YankoDmitriy from '../images/YankoDmitriy_1.25.jpg';
import TetianaMyslynska from '../images/TetianaMyslynska_1.25.jpg';
import SkrytskaIrina from '../images/SkrytskaIrina_1.25.jpg';
import KuzkinaOlga from '../images/KuzkinaOlga_1.25.jpg';
import iconGithub from '../images/github.svg';
import oskar from '../images/oskar.jpg';

export function onFooterClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onFooterClose);
  const renderFooter = basicLightbox.create(`
    <div class="footer-modal">
     <ul class="footer-team__list">
     <li class="footer-team__item">

     <img class="footer-team__pic" src=${KravchukOleksandr} alt="KravchukOleksandr" >

     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/AleksandroKravchuk" class="footer-team__name">Kravchuk Oleksandr</a>
     <p class="footer-team__prof">Team Leader</p>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${KolischukOleg} alt="Kolischuk Oleg" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/Ohleh" class="footer-team__name">Kolischuk Oleg</a>
     <p class="footer-team__prof">Scrum Master</p>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${AndriietsHryhorii} alt="AndriietsHryhorii" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/HryhoriiAndriiets1974" class="footer-team__name">Andriiets Hryhorii</a>
     <p class="footer-team__prof">Developer</p>
    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${SmychenkoOleksiy} alt="Smychenko Oleksiy" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/alfrntlower" class="footer-team__name">Smychenko Oleksiy</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${DedovViacheslav} alt="DedovViacheslav" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/ViacheslavDedov" class="footer-team__name">Dedov Viacheslav</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${YankoDmitriy} alt="YankoDmitriy" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/yanko-dima" class="footer-team__name">Yanko Dmitriy</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${TetianaMyslynska} alt="TetianaMyslynska" >
     <div class="footer-team__crew">
     <a target="_blank" href="https://github.com/TetianaMyslynska" class="footer-team__name">Tetiana Myslynska</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${SkrytskaIrina} alt="SkrytskaIrina" >
     <div class="footer-team__crew">
     <a target="_blank" href="#" class="footer-team__name">Skrytska Irina</a>
     <p class="footer-team__prof">Developer</p>

    </div>
     </li>
     <li class="footer-team__item">
     <img class="footer-team__pic"  src=${KuzkinaOlga} alt="KuzkinaOlga" >
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
