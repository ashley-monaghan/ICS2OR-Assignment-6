// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Assignment-6/sw.js", {
    scope: "/ICS2OR-Assignment-6/",
  })
}

/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM

$(".mobile-menu").click(function(){$(".vertical-nav").toggleClass("active")}),$(".vertical-nav ul a").click(function(){$(".vertical-nav").removeClass("active")});