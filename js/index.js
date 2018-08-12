window.addEventListener('DOMContentLoaded', () => {
    let panoramaAddress = document.querySelector('.panorama'),
        aisbergAddress = document.querySelector('.aisberg'),
        popupMapPanorama = document.querySelector('.popup-map__panorama'),
        popupMapAisberg = document.querySelector('.popup-map__aisberg'),
        contactsAnnouncments = document.querySelectorAll('.contacts-announcment'),
        vacancyClose = document.querySelector('.vacancy-close'),
        vacancy = document.querySelector('.vacancy');

    panoramaAddress.addEventListener('mouseover', () => {
        popupMapAisberg.style.display = 'none';
        popupMapPanorama.style.display = 'block';
        let height = window.scrollY;
        popupMapPanorama.style.top = height + 500 + 'px';
    });

    aisbergAddress.addEventListener('mouseover', () => {
        popupMapPanorama.style.display = 'none';
        popupMapAisberg.style.display = 'block';
        let height = window.scrollY;
        popupMapAisberg.style.top = height + 600 + 'px';
    });

    window.addEventListener('scroll', () => {
        popupMapPanorama.style.display = 'none'; 
        popupMapAisberg.style.display = 'none'; 
    
    });

    window.addEventListener('click', () => {
        popupMapPanorama.style.display = 'none'; 
        popupMapAisberg.style.display = 'none'; 
    
    });

    for (let i = 0; i < contactsAnnouncments.length; ++i) {
        contactsAnnouncments[i].addEventListener('click', () => {
            vacancy.style.display = 'flex';
        });
    }

    vacancyClose.addEventListener('click', () => {
        vacancy.style.display = 'none';
    });

});
