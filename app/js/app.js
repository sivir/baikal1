'use strict';

// Declare app level module which depends on views, and components
angular.module('baikalApp', [
  'ngRoute',
  'baikalApp.home',
  'baikalApp.photo',
  'baikalApp.media',
  'baikalApp.version',
  'baikalApp.services',
  'baikalApp.controllers',
  'baikalApp.filters',
  'baikalApp.routes',
  'pascalprecht.translate',
  'ngCookies',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|skype|tel):/);
    }
])
.config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    TITLE: 'Лига Байкальских Ледовых Капитанов',
    COPYRIGHT_TEXT: 'Все права защищены',
    COPYRIGHT_AUTHOR: 'Александр Бурмейстер',
    MAIN_PAGE: 'Главная',
    PHOTO: 'Фото',
    SPRING: 'Весна',
    SUMMER: 'Лето',
    AUTUMN: 'Осень',
    WINTER: 'Зима',
    ABOUT_US: 'О нас',
    ABOUT_LEAGUE: 'О лиге',
    FAMILY: 'Семья',
    NEWS: 'Новости',
    MEDIA: 'СМИ',
    EXPEDITIONS: 'Экспедиции',
    WINTER_BAIKAL: 'Зимний Байкал',
    BAIKAL_ICE_CODE: 'Правила Ледового Движения',
    RECORDS: 'Рекорды',
    VOLUNTEERS: 'Волонтёры',
    CREATIVE: 'Творчество',
    YOGA: 'Йога',
    YOGA_TEXT: 'Раздел заполняется',
    SKYPE_LESSONS: 'Skype уроки',
    SKYPE_LESSONS_TEXT: 'Лучшая училка в мире научит вас говорить, писать и думать по-английски!',
    OUR_GUESTS: 'Наши гости',
    JOURNEY: 'Путешествия',    
    CONTACTS: 'Контакты',
    FILMS: 'Фильмы',
    BAIKAL_SPRING: 'Байкал весной',
    BAIKAL_SUMMER: 'Байкал летом',
    AUTUMN_BAIKAL: 'Осенний байкал',
    BAIKAL_WINTER: 'Байкал зимой',
    WRITE_TO_YOU_FROM_BAIKAL: 'Пишу тебе с Байкала',
    SACRED_PLACES_OF_LAKE_BAIKAL: 'Сакральные места Байкала',
    BAIKAL_JOURNEY_TITLE: 'ЛИГА БАЙКАЛЬСКИХ ЛЕДОВЫХ КАПИТАНОВ им. А. Ю. БУРМЕЙСТЕРА',
    BAIKAL_JOURNEY_DESCRIPTION: 'У нас, в Сибири, говорят: «Тот, кто испил воды из священного озера Байкал, тот будет жить долго и счастливо». Здесь, на Байкале, существует и по сегодняшний день древнейшая культура общения Человека и Природы. Байкал завораживает, дает мудрость, истинное понимание красоты и раскрывает внутренние способности. Посвященным Байкал дает возможность пережить разные стихии: ураганный ветер, жесткие шторма, зеркальный штиль и чистейший лед!  Байкал формирует духовную культуру и истинные отношения между людьми. Дни, проведенные на Байкале, Господь не засчитывает в счет прожитых лет.',
    BAIKAL_JOURNEY_AUTHOR: 'Александр Бурмейстер',
    BAIKAL_JOURNEY_BUTTON: 'Отправиться в путешествие »',
    OUR_CONTACTS: 'Наши контакты',
    ADDRESS: 'Адрес',
    PHONE: 'Телефон',
    PHONE_TEXT: '+7 (902) 511-45-67',
    SKYPE:'Skype' ,
    SKYPE_TEXT: 'baikalicekapitan',
    E_MAIL: 'e-mail',
    E_MAIL_TEXT: 'aburmeister@mail.ru',
    MUSIC_PLAY: 'Включить музыку',
    NEWS_MEDIA: 'Новости: СМИ',
    EXPEDITIONS_SUBTITLE: 'Круглый год м можем предложить вам потрясающие экспедиции.'
  });
  $translateProvider.translations('en', {
    TITLE: 'Baikal Ice Captain League',
    COPYRIGHT_TEXT: 'All rights reserved',
    COPYRIGHT_AUTHOR: 'Alexander Burmeister',
    MAIN_PAGE: 'Home',
    PHOTO: 'Photo',
    SPRING: 'Spring',
    SUMMER: 'Summer',
    AUTUMN: 'Autumn',
    WINTER: 'Winter',
    ABOUT_US: 'About us',
    ABOUT_LEAGUE: 'About League',
    FAMILY: 'Family',
    NEWS: 'News',
    MEDIA: 'Media',
    EXPEDITIONS: 'Expeditions',
    WINTER_BAIKAL: 'Winter Baikal',
    BAIKAL_ICE_CODE: 'Ice Driving Code',
    RECORDS: 'Records',
    VOLUNTEERS: 'Volunteers',
    CREATIVE: 'Creative',
    YOGA: 'Yoga',
    YOGA_TEXT: 'It empty for a while',
    SKYPE_LESSONS: 'Skype lessons',
    SKYPE_LESSONS_TEXT: 'The best teacher in the world will teach you how to speek, write and think english!',
    OUR_GUESTS: 'Our guests',
    JOURNEY: 'Journey',    
    CONTACTS: 'Contacts',
    FILMS: 'Films',
    BAIKAL_SPRING: 'Spring Baikal',
    BAIKAL_SUMMER: 'Summer Baikal',
    AUTUMN_BAIKAL: 'Autumn Baikal',
    BAIKAL_WINTER: 'Winter Baikal',
    WRITE_TO_YOU_FROM_BAIKAL: 'Write to you from Baikal',
    SACRED_PLACES_OF_LAKE_BAIKAL: 'Sacred places of Lake Baikal',
    BAIKAL_JOURNEY_TITLE: 'BAIKAL LEAGUE of ICE CAPTAINS named after A.BURMEISTER',
    BAIKAL_JOURNEY_DESCRIPTION: '"One that has tried water from the sacred lake Baikal will live a long and happy life". There is still an ancient culture of communication here between man and nature. Baikal charms: it provides wisdom, affords an understanding of beauty, and reveals inner powers. Baikal gives the initiate an opportunity to experience many different elements: fierce storms, savage gales, peaceful calms, and of course its famous crystal-clear ice. Baikal fosters a spiritual culture and genuine relationships between people. "Days spent on the Lake Baikal, the Lord doesn\'t count against past years."',
    BAIKAL_JOURNEY_AUTHOR: 'Aleksander Burmeister',
    BAIKAL_JOURNEY_BUTTON: 'Make a step to my adventure »',
    OUR_CONTACTS: 'Our contacts',
    PHONE: 'Tel.',
    PHONE_TEXT: '+7 (902) 511-45-67',
	SKYPE:'Skype' ,
	SKYPE_TEXT: 'baikalicekapitan',
	E_MAIL: 'e-mail',
	E_MAIL_TEXT: 'aburmeister@mail.ru',
    MUSIC_PLAY: 'Play music',
    NEWS_MEDIA: 'Media news',
    EXPEDITIONS_SUBTITLE: 'English expeditions subtitle.'
  });
  $translateProvider.preferredLanguage('ru');
  $translateProvider.useLocalStorage();
});
