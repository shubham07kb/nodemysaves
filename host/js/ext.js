appurl='https://mysaves.cyclic.app/';
function cl(a){console.log(a)}function gebi(a){return document.getElementById(a);}function gesbcn(a){return document.getElementsByClassName(a);}
function httpscheck(){if(window.location.protocol=='http:'){window.location.href=window.location.href.replace('http:','https:');}}
function unsuccessfulRequests(requests){var unsuccessful=requests.filter(function(request){return request.status!=200;});return unsuccessful.length?unsuccessful:null;}function onRequestsComplete(requests,callback){function sharedCallback(){if(requestsAreComplete(requests)){callback(requests,unsuccessfulRequests(requests));}}requests.forEach(function(request){request.onreadystatechange=sharedCallback;});}
function app(){
  httpscheck();
}
try{
    app();
} catch(e){
    console.log(e);
}