'use strict';

// Declare app level module which depends on views, and components
angular.module('baikalApp', [
  'ngRoute',
  'baikalApp.home',
  'baikalApp.about',
  'baikalApp.photo',
  'baikalApp.version',
  'baikalApp.services',
  'baikalApp.controllers',
  'baikalApp.filters',
  'pascalprecht.translate',
  'ngCookies',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}])
.config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    TITLE: 'Лига Байкальских Капитанов',
    COPYRIGHT_TEXT: 'Все права защищены',
    COPYRIGHT_AUTHOR: 'Александр Бурмейстер',
    PHOTO: 'Фото',
    SPRING: 'Весна',
    SUMMER: 'Лето',
    AUTUMN: 'Осень',
    WINTER: 'Зима',
    ABOUT_US: 'О нас',
    FAMILY: 'Семья',
    MEDIA: 'СМИ',
    CREATIVE: 'Творчество',
    YOGA: 'Йога',
    OUR_GUESTS: 'Наши гости',
    JOURNEY: 'Путешествия',
    VOLUNTEERS: 'Волонтёры',
    CONTACTS: 'Контакты',
    BAIKAL_JOURNEY_TITLE: 'ЛИГА БАЙКАЛЬСКИХ ЛЕДОВЫХ КАПИТАНОВ им. А. Ю. БУРМЕЙСТЕРА',
    BAIKAL_JOURNEY_DESCRIPTION: 'У нас, в Сибири, говорят: «Тот, кто испил воды из священного озера Байкал, тот будет жить долго и счастливо». Здесь, на Байкале, существует и по сегодняшний день древнейшая культура общения Человека и Природы. Байкал завораживает, дает мудрость, истинное понимание красоты и раскрывает внутренние способности. Посвященным Байкал дает возможность пережить разные стихии: ураганный ветер, жесткие шторма, зеркальный штиль и чистейший лед!  Байкал формирует духовную культуру и истинные отношения между людьми. Дни, проведенные на Байкале, Господь не засчитывает в счет прожитых лет.',
    BAIKAL_JOURNEY_AUTHOR: 'Александр Бурмейстер',
    BAIKAL_JOURNEY_BUTTON: 'Отправиться в путешествие',
    OUR_CONTACTS: 'Наши контакты',
    ADDRESS: 'Адрес',
    ADDRESS_TEXT: 'г. Иркутск, ул. Лермонтова, д. 777, кв. 7',
    PHONE: 'Телефон',
    PHONE_TEXT: '+7 (3952) 33-44-55'
  });
  $translateProvider.translations('en', {
    TITLE: 'Baikal Captain Ligue',
    COPYRIGHT_TEXT: 'All rights reserved',
    COPYRIGHT_AUTHOR: 'Alexander Burmeister',
    PHOTO: 'Photo',
    SPRING: 'Spring',
    SUMMER: 'Summer',
    AUTUMN: 'Autumn',
    WINTER: 'Winter',
    ABOUT_US: 'About us',
    FAMILY: 'Family',
    MEDIA: 'Media',
    CREATIVE: 'Creative',
    YOGA: 'Yoga',
    OUR_GUESTS: 'Our guests',
    JOURNEY: 'Journey',
    VOLUNTEERS: 'Volunteers',
    CONTACTS: 'Contacts',
    BAIKAL_JOURNEY_TITLE: 'BAIKAL LEAGUE of ICE CAPTAINS named after A.BURMEISTER',
    BAIKAL_JOURNEY_DESCRIPTION: 'In Siberia we say: «One that has tried water from the sacred lake Baikal, will live a long and happy life». There is still an ancient culture of communication between a Man and Nature. Baikal charms, gives wisdom, the real understanding of beauty, and reveals inner powers. Baikal gives an opportunity to experiense different elements, to initiated: storms, savage gales, smooth calm, and the cristal-clear ice!  Baikal forms spiritual culture and true relationship between people. Days spent on the lake Baikal, the Lord doesn\'t count against past years.',
    BAIKAL_JOURNEY_AUTHOR: 'Aleksander Burmeister',
    BAIKAL_JOURNEY_BUTTON: 'The first step to my adventure',
    OUR_CONTACTS: 'Our contacts',
    ADDRESS: 'Address',
    ADDRESS_TEXT: 'Irkutsk, ul. Lermontova, 777, 7',
    PHONE: 'Phone',
    PHONE_TEXT: '+7 (3952) 33-44-55'
  });
  $translateProvider.preferredLanguage('ru');
  $translateProvider.useLocalStorage();
});
