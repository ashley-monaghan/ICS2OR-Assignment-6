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
// code from: https://dog.ceo/dog-api

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.message)
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData.message + '" alt="API image" class="center" >'
  } catch (err) {
    console.log(err)
  }
}

getImage("https://dog.ceo/api/breeds/image/random")
