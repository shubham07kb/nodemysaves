function accjsrun() {

}
function accjsdes() {

}
function showorhidepswd() {
    let pt = gebi('pswd').getAttribute("type") === "password" ? "text" : "password";
    gebi('pswd').setAttribute("type", pt);
    gebi('pswdeye').classList.toggle('eye');
    gebi('pswdeye').classList.toggle('eye-close');
}
function respondeacc(a,b){
    console.log(a);
    let xhr1 = new XMLHttpRequest();
    xhr1.open('POST', '/acc/respondacc');
    xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr1.send(a);
    xhr1.onload = function () {
        if (xhr1.status === 200) {
            let res = JSON.parse(xhr1.responseText);
            if (res.statcode==1) {
                if(b=='ca'){
                    let c=gebi('accform').innerHTML;
                    gebi('accform').innerHTML=gebi('accext').innerHTML;
                    gebi('accext').innerHTML=c;
                    gebi('regemail').innerHTML=res.email;
                } else if(b=='va'){
                    ps('/login');
                } else if(b=='ga'){
                    removeAllCookie();
                    if(res.rm=='y'){setCookie('rmkey',res.rmk,30);}
                    setCookie('_acc_header',res.token.header,30);
                    setCookie('_acc_data',res.token.data,30);
                    setCookie('_acc_key',res.token.key,30);
                    ps('/app');
                    location.reload();
                }
            } else {
                cl(res);
            }
        }
    }
}
function createacc(){
    respondeacc('email='+gebi('email').value+'&username='+ gebi('username').value+'&pswd='+gebi('pswd').value+'&forthe=ca','ca');
}
function getacc(){
    if(gebi('remme').checked){
        rmv='y';
    } else {
        rmv='n';
    }
    respondeacc('acceou='+gebi('eouf').value+'&pswd='+gebi('pswd').value+'&rm='+rmv+'&forthe=ga','ga');
}
function recacc(){
    respondeacc('email='+gebi('email').value+'&forthe=fa','fa');
}
function verifuacc(){
    respondeacc('email='+gebi('regemail').innerHTML+'&otp='+gebi('otp').value+'&forthe=va','va');
}