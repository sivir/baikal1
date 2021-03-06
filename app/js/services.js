'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource',
  function($resource){
    return $resource('photo/:season.json', {}, {});
  }])

.factory('Music', ['$resource',
  function($resource){
    var observerCallbacks = [];
    var Music = {mstate: 0 /* 0 - pause, 1 - play, 2 - loading */, current: 0};

    //register an observer
    Music.registerObserverCallback = function(callback){
      observerCallbacks.push(callback);
    };

    //call this when you know 'foo' has been changed
    var notifyObservers = function(){
      angular.forEach(observerCallbacks, function(callback){
        callback();
      });
    };
    
    Music.list = $resource('music/list.json', {}, {}).query(function() {
      for (var i = Music.list.length - 1; i >= 0; i--) {
        Music.list[i].id = i;
      };
      document.getElementById('audio_mp3').src = Music.list[0].mp3;
      document.getElementById('audio_ogg').src = Music.list[0].ogg;
      angular.element('#audio_audio').load();
    });

    angular.element('#audio_audio').bind('ended', function(){
        Music.playNext();
    })
    .bind('playing', function(){
        Music.updateState(1);
    })      
    .bind('pause', function(){
        Music.updateState(0);
    })
    .bind('waiting', function(){        
        Music.updateState(2);          
    });

    Music.updateState = function(state) {
      Music.mstate = state;
      notifyObservers();
    }

    Music.playPause = function(id) {
      if (typeof id == 'undefined' || id == Music.current) {
        if (Music.mstate == 1) {
          document.getElementById('audio_audio').pause();
        } else {
          document.getElementById('audio_audio').play();
        }
      } else {
        Music.play(id);
      }
    }

    Music.play = function(id) {
      Music.current = id;
      document.getElementById('audio_mp3').src = Music.list[Music.current].mp3;
      document.getElementById('audio_ogg').src = Music.list[Music.current].ogg;
      jQuery('#audio_audio').load();
      document.getElementById('audio_audio').play();
    }

    Music.playNext = function() {
      Music.play((Music.current + 1) % Music.list.length);    
    }

    return Music;
  }])

.factory('Post', ['$resource',
  function($resource){
    return $resource('post/:cid/:pid.json', {}, {});
  }])

.factory('Category', ['$resource',
  function($resource){
    return $resource('post/categories.json', {}, {});
  }])

.factory('Media', ['$resource',
  function($resource){
    return $resource('media/:pid.json', {}, {});
  }]);