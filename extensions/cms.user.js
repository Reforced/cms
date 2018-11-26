// ==UserScript==
// @name           cms
// @namespace      cms
// @description    Runs cms on dubtrack
// @author         Mitch & Kris
// @include        https://www.dubtrack.fm/join/*
// @include        https://beta.dubtrack.fm/join/*
// @version        0.5.1
// @grant          none
// ==/UserScript==

$(document).ready(function() {
    setTimeout(function() {
        console.log('CMS Loaded');
        $.getScript('https://reforced.github.io/cms/cms.js');
    }, 500);
});
