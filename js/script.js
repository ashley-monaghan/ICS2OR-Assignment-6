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

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
    '<img src="' + 
      jsonData.url + 
      '" alt="API image" class="center" ' +
      '>'
    if (jsonData.artist_url != "none") {
      document.getElementById("image-artist").innerHTML =
      "<p>Artist: " +
      '<a href="' +
      jsonData.artist_url +
      '">' +
      jsonData.artist +
      "</a>"
  } else {
    document.getElementById("image-artist").innerHTML = "<p>Artist: unknown</p>"
  }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://pokeapi.co/api/v2/")