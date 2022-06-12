import Pagination from "tui-pagination";
// import 'tui-pagination/dist/tui-pagination.css';

const containerTui = document.getElementById('tui-pagination-container');
// const instance = new Pagination(containerTui, { ... });

// instance.getCurrentPage();

let value = '';
let currentPage = 1;

const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

const pagination = new Pagination(containerTui, options);

pagination.on('afterMove', e => {
  currentPage = e.page;
  console.log(currentPage);
  // clear page
  containerTui.classList.add('visually-hidden');
  return currentPage;
});

function paginationSearch() {
  containerTui.classList.remove('visually-hidden');
};

// pagination.on('beforeMove', evt => {
//   const { page } = evt;
//   const result = ajax.call({page});

//   if(result) {
//     pagination.movePageTo(page);
//   } else {
//     return false;
//   }
// });

export { pagination };
