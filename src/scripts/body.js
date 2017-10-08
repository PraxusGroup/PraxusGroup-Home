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

 ( function(){

 	'use strict';

 	var video = document.getElementById( 'hero__video' );
 	var muteButton = document.getElementById( 'hero__video--mute' );
 	var playButton = document.getElementById( 'hero__video--play' );

 	/**
 	 * Handle Mute Clicks
 	 * @desc Handle clicks to the mute button.
 	 */
 	var handleMuteClicks = function(){

 		if( video.muted ){
 			video.muted = false;
 			requestAnimationFrame( function(){
 				muteButton.setAttribute( 'src', 'images/icon__unmute.svg' );
 			} );
 		}
 		else{
 			video.muted = true;
 			requestAnimationFrame( function(){
 				muteButton.setAttribute( 'src', 'images/icon__mute.svg' );
 			} );
 		}

 	};

 	/**
 	 * Handle Play Clicks
 	 * @desc Handle clicks to the play button.
 	 */
 	var handlePlayClicks = function(){

 		if( video.paused ){
 			video.play();
 			requestAnimationFrame( function(){
 				playButton.setAttribute( 'src', 'images/icon__pause.svg' );
 			} );
 		}
 		else{
 			video.pause();
 			requestAnimationFrame( function(){
 				playButton.setAttribute( 'src', 'images/icon__play.svg' );
 			} );
 		}

 	};

 	muteButton.addEventListener( 'click', function(){

 		handleMuteClicks();

 	} );

 	playButton.addEventListener( 'click', function(){

 		handlePlayClicks();

 	} );

 } )();