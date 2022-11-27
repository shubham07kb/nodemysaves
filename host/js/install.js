function loadinstall(p){
    gebi('errorinstalling').innerHTML='';
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                res=JSON.parse(xhr.responseText);
                console.log(res);
                if(res.statcode=="1"){
                    if(res.code=='a'){
                        gebi('installhead').innerHTML='Database Setup';
                        dbm();
                    } else if(res.code=='b'){
                        gebi('installhead').innerHTML='Setup Mail Service';
                        mbh();
                    }
                } else{
                    gebi('errorinstalling').innerHTML=res.error;
                }
            }
        }
    }
    xhr.open('POST','/installsetup',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(p);
}
function dbm(){
    gebi('installcontent').innerHTML='<div class="field button-field"><button onclick="dbs()">Switch to SQL</button></div><br><header>Database: MongoDB</header><div class="field input-field"><label>MongoDB String</label><br><input id="mongostring" type="text" placeholder="MongoDB String" class="input"></div><br><div class="field button-field"><button onclick="mongoenter()">Check</button></div>';
}
function dbs(){
    gebi('installcontent').innerHTML='<div class="field button-field"><button onclick="dbm()">Switch to MongoDB</button></div><br><header>Database: SQL</header>  <div class="field input-field"><label>Database Host</label><br><input id="dbhost" type="text" placeholder="Database Host" class="input"></div><br></br>   <div class="field input-field"><label>Database Port</label><br><input id="dbport" type="text" placeholder="Database Port" class="input"></div><br></br>   <div class="field input-field"><label>Database Host</label><br><input id="dbhost" type="text" placeholder="Database Host" class="input"></div><br></br>  <div class="field button-field"><button onclick="sqlenter()">Check</button></div>';
}
function mbs(){
    gebi('installcontent').innerHTML='<div class="field button-field"><button onclick="mbh()">Switch to Mail by Host</button></div><br><header>Mail By Service</header><div class="field input-field"><label>Mail Service</label><br><input id="mailservice" type="text" placeholder="Mail Service" class="input"></div><br></br><div class="field input-field"><label>Email</label><br><input id="email" type="email" placeholder="Email" class="input"></div><br></br><div class="field input-field"><label>Email User Name</label><br><input id="euname" type="text" placeholder="Email User Name" class="input"></div><br></br><div class="field input-field"><label>Email Password</label><br><input id="epassword" type="text" placeholder="Email Password" class="input"></div><br></br><div class="field button-field"><button onclick="mbse()">Check</button></div>';
}
function mbh(){
    gebi('installcontent').innerHTML='<div class="field button-field"><button onclick="mbs()">Switch to Mail by Service</button></div><br><header>Mail By Host</header><div class="field input-field"><label>Mail Host</label><br><input id="mailhost" type="text" placeholder="Mail Host" class="input"></div><br></br><div class="field input-field"><label>Mail Port</label><br><input id="mailport" type="number" placeholder="Mail Port" class="input"></div><br></br><div class="field input-field"><label>Email</label><br><input id="email" type="email" placeholder="Email" class="input"></div><br></br><div class="field input-field"><label>Email User Name</label><br><input id="euname" type="text" placeholder="Email User Name" class="input"></div><br></br><div class="field input-field"><label>Email Password</label><br><input id="epassword" type="text" placeholder="Email Password" class="input"></div><br></br><div class="field button-field"><button onclick="mbhe()">Check</button></div>';
}
function mbse(){
    var mailservice=gebi('mailservice').value;
    var email=gebi('email').value;
    var euname=gebi('euname').value;
    var epassword=gebi('epassword').value;
    loadinstall('a=mbse&mailservice='+mailservice+'&email='+email+'&euname='+euname+'&epassword='+epassword);
}
function mbhe(){
    var mailhost=gebi('mailhost').value;
    var mailport=gebi('mailport').value;
    var email=gebi('email').value;
    var euname=gebi('euname').value;
    var epassword=gebi('epassword').value;
    loadinstall('a=mbhe&mailhost='+mailhost+'&mailport='+mailport+'&email='+email+'&euname='+euname+'&epassword='+epassword);
}
function mongoenter(){
    var mongostring=gebi('mongostring').value;
    loadinstall('a=mongoenter&mongostring='+mongostring);
}
function startinstall(){
    gebi('installhead').innerHTML='Ready to install?';
    gebi('installcontent').innerHTML='<div class="field button-field"><button onclick="loadinstall('+"'a=startbtn'"+')">Install</button></div>';
}
function gebi(id){
    return document.getElementById(id);
}
function loadcss(){
    var installstyle=document.createElement('style');
    installstyle.setAttribute('type','text/css');
    installstyle.setAttribute('id','installstyle');
    installstyle.innerHTML = "*{margin: 0;padding: 0;box-sizing: border-box;font-family: 'Poppins', sans-serif;}header{font-size: 28px;font-weight: 600;color: #232836;text-align: center;}form{margin-top: 30px;}.container{height: 100vh;width: 100%;display: flex;align-items: center;justify-content: center;background-color: #4070f4;column-gap: 30px;}.forms.form.install{opacity: 0;pointer-events: none;}.form{position: absolute;max-width: 430px;width: 100%;padding: 30px;border-radius: 6px;background: #FFF;}.form-content a:hover{text-decoration: underline;}.form .field{position: relative;height: 50px;width: 100%;margin-top: 20px;border-radius: 6px;}.field input, .field button{height: 100%;width: 100%;border: none;font-size: 16px;font-weight: 400;border-radius: 6px;}.field input{outline: none;padding: 0 15px;border: 1px solid#CACACA;}.field input:focus{border-bottom-width: 2px;}.eye-icon{position: absolute;top: 50%;right: 10px;transform: translateY(-50%);font-size: 18px;color: #8b8b8b;cursor: pointer;padding: 5px;}.field button{color: #fff;background-color: #0171d3;transition: all 0.3s ease;cursor: pointer;}.field button:hover{background-color: #016dcb;}";
    document.getElementsByTagName('head')[0].appendChild(installstyle);
}
function loadbasehtml(){
    var main=gebi('main');
    main.innerHTML = '<section class="container forms"><div class="form install"><div class="form-content"><div style="color:red; text-align:center;" id="errorinstalling"></div><header id="installhead"></header><div id="installcontent"></div></div></div></section>';
}
//<form action="#"><div class="field input-field"><input type="email" placeholder="Email" class="input"></div><div class="field input-field"><input type="password" placeholder="Password" class="password"><i class="mi mi-eyeclose eye-icon"></i></div><div class="field button-field"><button>Login</button></div></form>
function loadtools(){
    var tools=gebi('tools');
    tools.innerHTML='';
}
function removeloader(){
    var loader=gebi('loader');
    loader.style.display='none';
}
function app(){
    loadcss();
    loadbasehtml();
    loadtools();
    startinstall();
    // removeloader();
}
try{
    app();
} catch(err){
    gebi('starterror').innerHTML = err;
}





