// ==UserScript==
// @name           Jlab Auto Answer
// @description    Answers it incorrectly on purpose (supposed to be used with fake results script)
// @include        *://education.jlab.org/solquiz/question.html*
// @version 0.0.1
// ==/UserScript==

(function() {
    'use strict';
setInterval(function () {
    document.querySelector("#answerbox > table > tbody > tr:nth-child(4) > td.text > a").click();
}, 1000);
setInterval(function () {
document.querySelector("#answerbox > table > tbody > tr > td:nth-child(10) > a").click();
}, 1000);
setInterval(function () {
    if (document.querySelector("#bottombutton").style.visibility!="hidden"){
    document.querySelector("#bottombutton > div > a").click();
    }
}, 1000);
})();