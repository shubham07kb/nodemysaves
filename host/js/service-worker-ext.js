if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/app.js?jsfile=serviceworker').then(registration => {
        console.log('SW Ready at ');
        console.log(registration);
    }).catch(error => {
        console.log('SW Failed: '+error);
    })
} else{
    console.log('Not support PWA');
}