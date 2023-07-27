const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');


navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll');
}

/* Yandex Map */

 // The ymaps.ready() function will be called when
    // all the API components are loaded and the DOM tree is generated.
    ymaps.ready(init);
    function init(){ 
        // Creating the map.    
        var map = new ymaps.Map("map", {
            // The map center coordinates.
            // Default order: “latitude, longitude”.
            // To not manually determine the map center coordinates,
            // use the Coordinate detection tool.
            center: [43.6066580104005,5.753417977415749],
            // Zoom level. Acceptable values:
            // from 0 (the entire world) to 19.
            zoom: 10
        });

				var myPlacemark = new ymaps.Placemark(
					[43.6066580104005,5.753417977415749], 
					{ balloonContent: `
					<div class="balloon">
						<div class="balloon__address">83560 Rians</div> 
						<div class="balloon__contacts">
						<a href="tel:+33667414725">+33667414725</a> 
						</div>
					</div>`
				},
					 {
					iconLayout: 'default#image',
					iconImageHref: './../img/cta/location.webp',
					iconImageSize: [40, 40],
					iconImageOffset: [-3, -42]
			});

			map.controls.remove('geolocationControl'); // удаляем геолакацию
			// map.controls.remove('searchControl'); // удаляем поиск
			map.controls.remove('trafficControl'); // удаляем контроль трафика
			map.controls.remove('typeSelector'); // удаляем тип

			// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
			// map.controls.remove('zoomControl'); // удаляем контрол зумирования
			map.controls.remove('rulerControl'); // удаляем контрол правил
			map.behaviors.disable(['scrollZoom']); // отключаем скролл карты


			map.geoObjects.add(myPlacemark);
			myPlacemark.balloon.open();
    }

