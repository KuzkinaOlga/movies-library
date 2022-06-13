export function getRefs() {
    return {
        // containerMovies: document.querySelector('.collection'),
        gallery: document.querySelector('.gallery'),
        // galleryContainer: document.querySelector('.gallery>.container'),

        // Header Refs
        headerContainer: document.querySelector('.js-header-container'),
        nav: document.querySelector('.nav'),
        logo: document.querySelector('.js-logo'),
        homeBtn: document.querySelector('a[data-link="home"]'),
        myLibraryBtn: document.querySelector('a[data-link="library"]'),
        form: document.querySelector('.js-submit'),
        myLibraryBtns: document.querySelector('.js-librari-list'),
        watchedBtn: document.querySelector('.js-watched-btn'),
        queueBtn: document.querySelector('.js-queue-btn'),
    };
}