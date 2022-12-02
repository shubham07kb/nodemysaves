function cl(a){console.log(a)}function gebi(a){return document.getElementById(a);}function gesbcn(a){return document.getElementsByClassName(a);}
function httpscheck(){if(window.location.protocol=='http:'){window.location.href=window.location.href.replace('http:','https:');}}
function requestsAreComplete(requests){return requests.every(function(request){return request.readyState==4;});}function unsuccessfulRequests(requests){var unsuccessful=requests.filter(function(request){return request.status!=200;});return unsuccessful.length?unsuccessful:null;}function onRequestsComplete(requests,callback){function sharedCallback(){if(requestsAreComplete(requests)){callback(requests,unsuccessfulRequests(requests));}}requests.forEach(function(request){request.onreadystatechange=sharedCallback;});}
function setCookie(cname,cvalue,exdays){const d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}function getCookie(cname){let name=cname+"=";let ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return "";}function checkCookie(cname){let va=getCookie(cname);if(va!="" && va!=undefined){return true;}else{return false;}}
function switchtheme(a){if(a=='a'){setCookie('theme_mode','a',365);}else if(a=='d'){setCookie('theme_mode','d',365);}else if(a=='l'){setCookie('theme_mode','l',365);}else if(a=='s'){setCookie('theme_mode','s',365);}else{cl('Error: Invalid theme mode');}}function theme(){if(checkCookie('theme_mode')==true){if(getCookie('theme_mode')=='a'){setCookie('theme','a',365);}else if(getCookie('theme_mode')=='d'){setCookie('theme','d',365);}else if(getCookie('theme_mode')=='l'){setCookie('theme','l',365);}}else{if(typeof prefered_theme_mode!='undefined'){if(prefered_theme_mode=='a' && prefered_theme_mode=='d' && prefered_theme_mode=='l'){switchtheme(prefered_theme_mode);}else{switchtheme('a');}}else{switchtheme('a');}theme();}}
function loadurldata(){var urldata=[];urldata['url']=window.location.href;urldata['urlp']=window.location.protocol;urldata['urlh']=window.location.host;urldata['urlpn']=window.location.pathname;urldata['urlpna']=window.location.pathname.split('/');urldata['urlpna'].shift();urldata['urlse']=window.location.search;var urlsef=new URLSearchParams(urldata['urlse']);var urlsea=[];for(const [key,value] of urlsef){urlsea[key]=value;}urldata['urlsea']=urlsea;return urldata;}
function presetup(){}
function tools(){
  
}
function route(){
  const udata=loadurldata();
  console.table(udata);
}
function app(){httpscheck();presetup();theme();tools();route();}
try{app();}catch(e){gebi("starterror").innerHTML="Error: "+e;}