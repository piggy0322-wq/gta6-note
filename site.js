(function(){"use strict";
var $=function(s){return document.querySelector(s)};
var cd=$("#countdown");
if(cd){var t=new Date(cd.getAttribute("data-target")).getTime();
 var tick=function(){var d=Math.max(0,t-Date.now()),dd=Math.floor(d/864e5),hh=Math.floor(d/36e5)%24,mm=Math.floor(d/6e4)%60;
  $("#cdD").textContent=dd;$("#cdH").textContent=("0"+hh).slice(-2);$("#cdM").textContent=("0"+mm).slice(-2);
  if(d===0){cd.querySelector(".cdnote").textContent="発売日になりました。";}};
 tick();setInterval(tick,30000);}
var list=$("#checkList");
if(list){var KEY="gta6-prep",st={};try{st=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){st={}}
 var ins=Array.prototype.slice.call(list.querySelectorAll("input"));
 var upd=function(){var n=ins.filter(function(x){return x.checked}).length;$("#progTxt").textContent=n+" / "+ins.length;$("#barFill").style.width=(n/ins.length*100)+"%"};
 ins.forEach(function(x){x.checked=!!st[x.getAttribute("data-k")];x.addEventListener("change",function(){st[x.getAttribute("data-k")]=x.checked;try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}upd()})});upd();}
var fg=$("#freeGb"),mg=$("#margin"),rs=$("#sizeResult");
if(fg&&rs){var calc=function(){var f=parseFloat(fg.value),m=parseFloat(mg.value)||0;
 if(isNaN(f)||f<0){rs.className="result";rs.textContent="空き容量を数字で入力してください。";return}
 var need=212+m,diff=f-need;
 if(diff>=0){rs.className="result ok";rs.textContent="足ります。GTA6を入れても約"+Math.round(diff)+"GB残ります。"}
 else{rs.className="result ng";rs.textContent="あと約"+Math.round(-diff)+"GB足りません。ゲームを削除するか、SSDの増設を検討しましょう。"}};
 fg.addEventListener("input",calc);mg.addEventListener("input",calc);calc();}
})();
