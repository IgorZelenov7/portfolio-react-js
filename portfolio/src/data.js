import previewImg from './assets/cards/preview.svg';
import codeImg from './assets/cards/code.svg';

import cardResto from './assets/cards/restoapp.jpg';
import cardLoft from './assets/cards/loft.jpg';
import cardGame from './assets/cards/game.jpg';
import cardDetocs from './assets/cards/Detocs.jpg';
import cardAir from './assets/cards/air.jpg';
import cardHimo from './assets/cards/himo.jpg';

export const cardData = [
  {
    imgSrc: cardResto,
    title: 'Сайт для ресторана',
    description: 'Web-страница для ресторана с разнообразной кухней и возможностью заказа доставки еды на дом',
    stack: 'HTML, CSS, JavaScript',
    demoLink: 'https://igorzelenov7.github.io/restoapp-website/',
    codeLink: 'https://github.com/IgorZelenov7/restoapp-website',
    previewImg: previewImg,
    codeImg: codeImg,
  },
  {
    imgSrc: cardLoft,
    title: 'Сайт агентства',
    description: 'Сайт для продажи недвижимости в стиле Loft с интегрированной Яндекс Картой и формой заявки',
    stack: 'HTML, SCSS, JavaScript',
    demoLink: 'https://igorzelenov7.github.io/loft-house-website/',
    codeLink: 'https://github.com/IgorZelenov7/loft-house-website',
    previewImg: previewImg,
    codeImg: codeImg,
  },
  {
    imgSrc: cardAir,
    title: 'Копия сайта Airbnb',
    description: 'Копия главной страницы сайта Airbnb.ru, написанная на React со сборщиком Vite и препроцессором SCSS',
    demoLink: 'https://igorzelenov7.github.io/airbnb-main-page/',
    codeLink: 'https://github.com/IgorZelenov7/airbnb-main-page',
    stack: 'HTML, SCSS, React, Vite',
    previewImg: previewImg,
    codeImg: codeImg,
  },

  {
    imgSrc: cardDetocs,
    title: 'Детокс ресторан',
    description: 'Сайт ресторана с детокс-меню, реализацией слайдера, добавлением Яндекс Карт, формой обратной связи',
    demoLink: 'https://igorzelenov7.github.io/testovoe-website/',
    codeLink: 'https://github.com/IgorZelenov7/testovoe-website',
    stack: 'HTML, CSS, JavaScript, jQuery',
    previewImg: previewImg,
    codeImg: codeImg,
  },
  {
    imgSrc: cardGame,
    title: 'Игра "Кости"',
    description:
      'Браузерная игра для двух игроков, где нужно набирать очки, бросая кубик, но рискуя потерять все текущие очки',
    stack: 'HTML, CSS, JavaScript, DOM',
    demoLink: 'https://igorzelenov7.github.io/dice-game-js/',
    codeLink: 'https://github.com/IgorZelenov7/dice-game-js',
    previewImg: previewImg,
    codeImg: codeImg,
  },
  {
    imgSrc: cardHimo,
    title: 'Сайт Xiaomi Himo',
    description: 'Лендинг для продажи электровелосипедов Xiaomi Himo с автоматическим слайдером и формой заказа',
    stack: 'HTML, CSS, jQuery, Slick Slider',
    demoLink: 'https://igorzelenov7.github.io/himo-website/',
    codeLink: 'https://github.com/IgorZelenov7/himo-website',
    previewImg: previewImg,
    codeImg: codeImg,
  },
];
