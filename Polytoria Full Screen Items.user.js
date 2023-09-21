// ==UserScript==
// @name         Polytoria Full Screen Items
// @icon         *://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @license      Apache-2.0
// @namespace    lol
// @version      1.0.0
// @description  Adds A Button To Full Screen Polytoria Items!
// @author       levisurely
// @match        *://polytoria.com/store/*
// @grant        none
// ==/UserScript==

(function () {
  const gid = document.querySelector("#main-content > div:nth-child(3) > div.container.p-0.p-lg-5 > div:nth-child(3) > div.d-none.d-lg-block.col-12.col-lg-5.mb-5 > div > div > div > iframe").src

  let btn = document.createElement("button");
  btn.id = "lev-texture";
  btn.onclick = function () {
    window.open(gid);
  };
  btn.type = "button";
  btn.href = gid;
  btn.innerHTML = "Full Screen";
  btn.className = "btn btn-outline-primary 3dviewtoggler isactive";
  btn.style.backgroundColor = "#8c39d1";
  btn.style.color = "#421a63";
  btn.style["border-color"] = "#421a63";
    btn.style.setProperty('--bs-btn-border-color', "#421a63");

  //console.log(document.getElementsByClassName("col-sm-8"));
  document.querySelector("#main-content > div:nth-child(3) > div.container.p-0.p-lg-5 > div:nth-child(3) > div.d-none.d-lg-block.col-12.col-lg-5.mb-5 > div > div > div").prepend(btn);
})();
