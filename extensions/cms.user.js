// ==UserScript==
// @name           cms
// @namespace      cms
// @description    Runs cms on dubtrack
// @author         Mitch & Kris & Reforced
// @include        https://www.dubtrack.fm/join/*
// @include        https://beta.dubtrack.fm/join/*
// @require        https://code.jquery.com/jquery-3.3.1.min.js
// @require        https://www.dubtrack.fm/assets/js/plugins/fn.jquery.js
// @require        https://www.dubtrack.fm/assets/js/plugins/jquery.multisortable.js
// @downloadURL    https://reforced.github.io/cms/extensions/cms.user.js
// @updateURL      https://reforced.github.io/cms/extensions/cms.user.js
// @version        1
// @grant          none
// ==/UserScript==

$(document).ready(function() {
    setTimeout(function() {
        console.log('CMS Loaded');
        $.getScript('https://reforced.github.io/cms/cms.js');
    }, 500);
});
