const db=require('../../modules/db');
async function direct(appparams,req,res,prc){
    q=''
    qe=Object.keys(req.query);
    if(qe.length>0){
        q='?';
        for(i=0;i<qe.length;i++){
            q+=qe[i]+'='+req.query[qe[i]]+'&';
        }
        q=q.slice(0,-1);
    }
    a=appparams.slice(3);
    asplit = a.split("/");
    if(a.length==0){
        aa=q;
    } else  if (a.startsWith("http://") || a.startsWith("https://")){
        aa=a+q;
    } else{
        aisd=0;
        asd=asplit[0].split(".");
        if(asd.length>=2){
            asde=asd[asd.length-1];
            asdm=asd[asd.length-2];
            if (asdm.length != 0 && asde.length > 1 && asdm.match("^[a-zA-Z0-9]+$") && asde.match("^[a-zA-Z]+$")){
                aisd=1;
                aa='http://'+a+q;
            }
        }
        if(aisd==0){
            aa='/'+a+q;
        }
    }
    res.redirect(aa);
    return aa;
}
module.exports = {
    direct: direct,
}