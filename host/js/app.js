function cl(a){console.log(a)}function ct(a){console.table(a)}function gebi(a){return document.getElementById(a);}function gesbcn(a){return document.getElementsByClassName(a);}function setls(a,b){localStorage.setItem(a,b);}function getls(a){return localStorage.getItem(a);}function removels(a){localStorage.removeItem(a);}function clearls(){localStorage.clear();;}function jwthandler(a){try{p=jwt_decode(a)}catch(e){p=undefined};return p;}function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
function httpscheck(){if(window.location.protocol=='http:'){window.location.href=window.location.href.replace('http:','https:');}}
async function ipnbrowserdataform(){let a=await fetch("/api/get/ip").then((a=>a.json())).then((a=>a.ip));if(null==getls("ip")||!checkCookie("_ip")||""==getls("ip").trim()||getls("ip")!=a||getls("ip")!=getCookie("_ip")||!checkCookie("_ipaua_data")||getls("ipauadatac")!=getCookie("_ipaua_data")){let t=await fetch("https://ipwho.is/"+a+"?fields=ip,message,success,type,continent,continent_code,country,country_code,region,region_code,city,latitude,longitude,postal,calling_code,calling_code,capital,borders,flag,connection.isp,connection.domain,timezone").then((a=>a.json())).then((a=>a));t.flag.img="/img/country/flag/svg/"+t.country_code.toLowerCase()+".svg",uafetch=await fetch("/api/get/ua").then((a=>a.json())).then((a=>a)),uadata={},uadata.client=uafetch.client,uadata.os=uafetch.os,uadata.device=uafetch.device,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?uadata.is_mobile=!0:uadata.is_mobile=!1,uadata.current_is_mobile=navigator.userAgentData.mobile,uadata.is_touch="ontouchstart"in window||navigator.maxTouchPoints;let e=await navigator.userAgentData.getHighEntropyValues(["architecture","bitness"]);uadata.system_build={architecture:e.architecture,bitness:e.bitness},ipauadata={ipdata:t,uadata:uadata},console.log(ipauadata),forcookieip=encodeURI(JSON.stringify(ipauadata)),setls("ip",a),setCookie("_ip",a,1),setCookie("_ipaua_data",forcookieip,1),setls("ipauadatac",forcookieip),setls("ipauadata",ipauadata)}}
function requestsAreComplete(requests){return requests.every(function(request){return request.readyState==4;});}function unsuccessfulRequests(requests){var unsuccessful=requests.filter(function(request){return request.status!=200;});return unsuccessful.length?unsuccessful:null;}function onRequestsComplete(requests,callback){function sharedCallback(){if(requestsAreComplete(requests)){callback(requests,unsuccessfulRequests(requests));}}requests.forEach(function(request){request.onreadystatechange=sharedCallback;});}
function setCookie(cname,cvalue,exdays){const d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}function getCookie(cname){let name=cname+"=";let ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return "";}function checkCookie(cname){let va=getCookie(cname);if(va!="" && va!=undefined){return true;}else{return false;}}function removeAllCookie(){var pairs=document.cookie.split(";");var cookies = {};for (var i=0; i<pairs.length; i++){var pair = pairs[i].split("=");setCookie(pair[0],'',-1);}} function deleteCookie(a){setCookie(a,'',-1)}
function switchtheme(a){if(a=='a'){setCookie('theme_mode','a',365);}else if(a=='d'){setCookie('theme_mode','d',365);}else if(a=='l'){setCookie('theme_mode','l',365);}else if(a=='s'){if(getCookie("theme_mode")=="a"){setCookie("theme_mode", "d", 365);}else if(getCookie("theme_mode")=="d"){setCookie("theme_mode", "l", 365);}else if(getCookie("theme_mode")=="l"){setCookie("theme_mode", "a", 365);}}else{cl('Error: Invalid theme mode');}changetheme();}function theme(){if(checkCookie('theme_mode')==true){if(getCookie('theme_mode')=='a'){setCookie('theme','a',365);}else if(getCookie('theme_mode')=='d'){setCookie('theme','d',365);}else if(getCookie('theme_mode')=='l'){setCookie('theme','l',365);}}else{if(typeof prefered_theme_mode!='undefined'){if(prefered_theme_mode=='a' && prefered_theme_mode=='d' && prefered_theme_mode=='l'){switchtheme(prefered_theme_mode);}else{switchtheme('a');}}else{switchtheme('a');}theme();}}function changetheme(){"a"==getCookie("theme")?"web"==gebi("themec").content?gebi("stylesheet").innerHTML="@media(prefers-color-scheme:dark){"+webdarkcss+"}@media(prefers-color-scheme:light){"+weblightcss+"}"+webcss:"app"==gebi("themec").content?gebi("stylesheet").innerHTML="@media(prefers-color-scheme:dark){"+appdarkcss+"}@media(prefers-color-scheme:light){"+applightcss+"}"+appcss:"acc"==gebi("themec").content&&(gebi("stylesheet").innerHTML="@media(prefers-color-scheme:dark){"+accdarkcss+"}@media(prefers-color-scheme:light){"+acclightcss+"}"+acccss):"d"==getCookie("theme")?"web"==gebi("themec").content?gebi("stylesheet").innerHTML=webcss+webdarkcss:"app"==gebi("themec").content?gebi("stylesheet").innerHTML=appcss+appdarkcss:"acc"==gebi("themec").content&&(gebi("stylesheet").innerHTML=acccss+accdarkcss):"l"==getCookie("theme")&&("web"==gebi("themec").content?gebi("stylesheet").innerHTML=webcss+weblightcss:"app"==gebi("themec").content?gebi("stylesheet").innerHTML=appcss+applightcss:"acc"==gebi("themec").content&&(gebi("stylesheet").innerHTML=acccss+acclightcss)),"web"==gebi("themec").content?(gebi("main").innerHTML=webhtml,webjsrun()):"app"==gebi("themec").content?(gebi("main").innerHTML=apphtml,appjsrun()):"acc"==gebi("themec").content&&(gebi("main").innerHTML=acchtml,accjsrun())}function destroypretheme(){"web"==gebi("themec").content?webjsdes():"app"==gebi("themec").content?appjsdes():"acc"==gebi("themec").content&&accjsdes()}
function loadurldata(){var urldata=[];urldata['url']=window.location.href;urldata['urlp']=window.location.protocol;urldata['urlh']=window.location.host;urldata['urlpn']=window.location.pathname;urldata['urlpna']=window.location.pathname.split('/');urldata['urlpna'].shift();urldata['urlse']=window.location.search;var urlsef=new URLSearchParams(urldata['urlse']);var urlsea=[];for(const [key,value] of urlsef){urlsea[key]=value;}urldata['urlsea']=urlsea;return urldata;}
function presetup(){window.onpopstate=function(){route();};const metape=document.createElement("meta");metape.id="themec";metape.name="themec";metape.content="unset";const cssel=document.createElement("style");cssel.id='stylesheet';document.head.appendChild(metape);document.head.appendChild(cssel);}
function accounthandler(){checkCookie("_acc_header")||checkCookie("_acc_data")||checkCookie("_acc_key")||checkCookie("_s_acc_header")||checkCookie("_s_acc_data")||checkCookie("_s_acc_key")||checkCookie("_c_acc_header")||checkCookie("_c_acc_data")||checkCookie("_c_acc_key")?checkCookie("_acc_header")&&checkCookie("_acc_data")&&checkCookie("_acc_key")&&checkCookie("_s_acc_header")&&checkCookie("_s_acc_data")&&checkCookie("_s_acc_key")&&checkCookie("_c_acc_header")&&checkCookie("_c_acc_data")&&checkCookie("_c_acc_key")?(a=jwthandler(getCookie("_acc_header")+"."+getCookie("_acc_data")+"."+getCookie("_acc_key")),b=jwthandler(getCookie("_s_acc_header")+"."+getCookie("_s_acc_data")+"."+getCookie("_s_acc_key")),c=jwthandler(getCookie("_c_acc_header")+"."+getCookie("_c_acc_data")+"."+getCookie("_c_acc_key")),null==a||null==b||null==c?removeAccountAtError():a.id==b.id&&b.id==c.id&&a.id==c.id&&b.email==c.email&&b.username==c.username&&b.role==c.role&&b.fname==c.fname&&b.lname==c.lname?(globalacc=c,userrmkeystay()):removeAccountAtError()):removeAccountAtError():checkCookie("rmkey")?userrmkey():globalacc={role:"g"}}function removeAccountAtError(){deleteCookie("_acc_header"),deleteCookie("_acc_data"),deleteCookie("_acc_key"),deleteCookie("_s_acc_header"),deleteCookie("_s_acc_data"),deleteCookie("_s_acc_key"),deleteCookie("_c_acc_header"),deleteCookie("_c_acc_data"),deleteCookie("_c_acc_key"),userrmkey()}async function userrmkey(){a=getCookie("rmkey"),checkCookie("rmkey")?((xhr=new XMLHttpRequest).open("POST","/acc/rmkey/"),xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhr.send("rmkey="+a),xhr.onreadystatechange=function(){4==this.readyState&&200==this.status&&(1==(res=JSON.parse(this.responseText)).statcode?accountset(res.accdata):(deleteCookie("rmkey"),globalacc={role:"g"}))}):globalacc={role:"g"}}function accountset(e){"y"==e.rm&&setCookie("rmkey",e.rmk,30),setCookie("_acc_header",e.token.header,1),setCookie("_acc_data",e.token.data,1),setCookie("_acc_key",e.token.key,1),setCookie("_s_acc_header",e.token_s.header,1),setCookie("_s_acc_data",e.token_s.data,1),setCookie("_s_acc_key",e.token_s.key,1),setCookie("_c_acc_header",e.token_c.header,1),setCookie("_c_acc_data",e.token_c.data,1),setCookie("_c_acc_key",e.token_c.key,1),accounthandler()}function userrmkeystay(){setCookie("rmkey",getCookie("rmkey"),30)}
function tools(){toolsp='';gebi('tools').innerHTML=toolsp;}
async function getshortlink(a,b=0){p=await fetch('/api/shortlink/'+a).then(response=>response.json());if(p.status=='success'){if(b==0){window.location.href=p.url;}else if(b==1){window.open(p.url,'_blank');}}else{nf();}}
function socketconnect(){socket=io.connect('https://'+window.location.hostname);socket.on('connect',function(){cl('Socket connected');});socket.on('message', function(data){document.write(data)});}
function endloader(){gebi('loader').innerHTML='';gebi('loaderstyle').innerHTML='';}
function ps(a,b=sitename){let stateObj={id:"100"};window.history.pushState(stateObj, b, a);route();}
async function submitproxy(udata,b=0){a=udata.urlpn.slice(3);asplit=a.split('/');if(a.length==0){aa='http://'+window.location.hostname+udata.urlse;}else if(a.startsWith('http://')||a.startsWith('https://')){aa=a+udata.urlse;}else{aisd=0;asd=asplit[0].split('.');if(asd.length>=2){asde=asd[asd.length-1];asdm=asd[asd.length-2];if(asdm.length!=0 && asde.length>1 && asdm.match('^[a-zA-Z0-9]+$') && asde.match('^[a-zA-Z]+$')){aa='http://'+a+udata.urlse;aisd=1;}}if(aisd==0){aa='http://'+window.location.hostname+'/'+a+udata.urlse;}}await fetch('/api/analitycs/proxy/'+encodeURIComponent(aa));if(b==0){window.location.href=aa;}else if(b==1){window.open(aa,'_blank');}}
function getsetpage(a,b) {
  const xhr1 = new XMLHttpRequest();
  const xhr2 = new XMLHttpRequest();
  xhr1.open("GET","/api/"+b+"/meta/"+a);
  xhr2.open("GET","/api/"+b+"/html/"+a);
  xhr1.send();
  xhr2.send();
  onRequestsComplete([xhr1, xhr2], function (requests, unsuccessful) {
      if (unsuccessful) {
          cl("Error: " + unsuccessful[0].status + " " + unsuccessful[0].statusText);
      } else {
          metapp = JSON.parse(requests[0].responseText);
          gebi("headkeywords").content = metapp.keywords;
          gebi("headdescription").content = metapp.desc;
          gebi("headauthor").content = metapp.author;
          gebi("headtitle").innerHTML = metapp.title + " - " + sitename;
          gebi("inmain").innerHTML = requests[1].responseText;
      }
  });
}
function route(){
  const udata=loadurldata();
  if(udata.urlpna[0]=='signup' || udata.urlpna[0]=='signin' || udata.urlpna[0]=='register' || udata.urlpna[0]=='login' || udata.urlpna[0]=='forgot'){
    if(gebi('themec').innerHTML!='acc'){destroypretheme();gebi('themec').content='acc';changetheme();}
    getprehtml(udata.urlpna[0]);
  } else if(udata.urlpna[0]=='app'){
    if(gebi('themec').innerHTML!='app'){destroypretheme();gebi('themec').content='app';changetheme();}
    if(udata.urlpna[1]=='dashboard'){
      getdashhtml(udata.urlpn.replace('/app/dashboard/',''));
    } else{
      getapphtml(udata.urlpn.replace('/app/',''));
    }
  } else{
    if(gebi('themec').innerHTML!='web'){destroypretheme();gebi('themec').content='web';changetheme();}
    if(udata.urlpna[0]=='' || udata.urlpna[0]=='home'){
      if(udata.urlpna[0]=='home'){ps('/');} else{getsetpage('home','prepage');}
    } else if(udata.urlpna[0]=='blog'){
      if(udata.urlpna[1]==undefined){
        a='';
      } else{
        a=udata.urlpna[1];
      }
      cl(a+' - '+typeof a);
      (udata.urlpna[1]);
    } else if(udata.urlpna[0]=='collection'){
      getcolhtml(udata.urlpna[1]);
    } else if(udata.urlpna[0]=='project'){
      getprohtml(udata.urlpna[1]);
    } else if(udata.urlpna[0]=='s'){
      if(udata.urlpna.length==2 && udata.urlpna[1].match('^[a-zA-Z0-9]+$')){
        getshortlink(udata.urlpna[1]);
      } else{
        cl('short link is not valid');
      }
    } else if(udata.urlpna[0]=='p'){
      if(udata.urlpn.startsWith('/p/') || udata.urlse.length!=0){
        submitproxy(udata);
      }  else{
        cl('proxy link is not valid');
      }
    } else{
      getprehtml(udata.urlpna[0]);
    }
  }
}
socket="";
async function app(){httpscheck();await ipnbrowserdataform();accounthandler();socketconnect();presetup();theme();tools();route();endloader();}
try{app();}catch(e){cl(e);gebi("starterror").innerHTML="Error: "+e;endloader();}
