/* Copyright Praxus (Praxus Group) 2017 */
/**
 * Body JS
 * @desc Praxus body JS definitions.
 *
 * @package PraxusHome
 * @author <a href="http://yaypaul.com">YayPaul (Paul West)</a>
 * @copyright 2017 Praxus (Praxus Group).
 * @license MIT
 */
 (function(){'use strict';var MUTE_SRC='images/icon__mute.svg';var UNMUTE_SRC='images/icon__unmute.svg';var PLAY_SRC='images/icon__play.svg';var PAUSE_SRC='images/icon__pause.svg';var video=document.getElementById('hero__video');var muteButton=document.getElementById('hero__video--mute');var playButton=document.getElementById('hero__video--play');if(window.matchMedia('(prefers-reduced-motion)').matches){video.removeAttribute('autoplay');video.pause();requestAnimationFrame(function(){playButton.setAttribute('src',PLAY_SRC);});} var handleMuteClicks=function(){if(video.muted){video.muted=false;requestAnimationFrame(function(){muteButton.setAttribute('src',UNMUTE_SRC);});} else{video.muted=true;requestAnimationFrame(function(){muteButton.setAttribute('src',MUTE_SRC);});}};var handlePlayClicks=function(){if(video.paused){video.play();requestAnimationFrame(function(){playButton.setAttribute('src',PAUSE_SRC);});} else{video.pause();requestAnimationFrame(function(){playButton.setAttribute('src',PLAY_SRC);});}};muteButton.addEventListener('click',function(){handleMuteClicks();});playButton.addEventListener('click',function(){handlePlayClicks();});})();