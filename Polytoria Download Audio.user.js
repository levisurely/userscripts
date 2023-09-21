// ==UserScript==
// @name         Polytoria Download Audio
// @icon         *://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @license      Apache-2.0
// @namespace    lol
// @version      1.0.0
// @description  Adds A Button To  Download Polytoria Audios!
// @author       levisurely
// @match        *://polytoria.com/store/*
// @grant        none
// ==/UserScript==

(function () {
  const gid = document.querySelector('audio').src

  let btn = document.createElement("button");
  btn.id = "lev-download";
  btn.onclick = function () {
    window.open(gid);
  };
  btn.type = "button";
  btn.href = gid;
  btn.innerHTML = "Download";
  btn.className = "btn btn-outline-primary 3dviewtoggler isactive";
  btn.style.backgroundColor = "#8c39d1";
  btn.style.color = "#421a63";
  btn.style["border-color"] = "#421a63";
    btn.style.setProperty('--bs-btn-border-color', "#421a63");

 document.querySelector("#main-content > div:nth-child(3) > div.container.p-0.p-lg-5 > div:nth-child(3) > div.d-none.d-lg-block.col-12.col-lg-5.mb-5 > div > div").prepend(btn);

  let betn = document.createElement("button");
  betn.id = "lev-download";
  betn.onclick = function () {
    window.open(gid);
  };
  betn.type = "button";
  betn.href = gid;
  betn.innerHTML = "Download";
  betn.className = "btn btn-outline-primary 3dviewtoggler isactive";
  betn.style.backgroundColor = "#8c39d1";
  betn.style.color = "#421a63";
  betn.style["border-color"] = "#421a63";
    betn.style.setProperty('--bs-btn-border-color', "#421a63");

  document.querySelector("#main-content > div:nth-child(3) > div.container.p-0.p-lg-5 > div:nth-child(3) > div.col-12.col-lg-7.text-lg-end > div.row.justify-content-end > div > div.d-block.d-lg-none.col-12.col-lg-5.mb-5 > div > div").prepend(betn);
})();
