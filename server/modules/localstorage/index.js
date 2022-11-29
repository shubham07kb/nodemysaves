const fs=require('fs');
const path=require('path');
class localStorage{
    constructor(){}
    showAll(){
        for (const [key, value] of Object.entries(process.env)){
            if(key.startsWith('localStorage_')){
                console.log(key,value);
            }
        };
    }
    removeItem(key){
        if(key.match('^[a-zA-Z][a-zA-Z0-9]*$')!=null){
            if(process.env['localStorage_'+key]){
                delete process.env['localStorage_'+key];
            } else{
                return undefined;
            }
        }
    }
    getItem(key){
        if(key.match('^[a-zA-Z][a-zA-Z0-9]*$')!=null){
            if(process.env['localStorage_'+key]){
            return process.env['localStorage_'+key];
            } else{
                return undefined;
            }
        } else{
            return undefined;
        }
    }
    setItem(key,value){
        if(key.match('^[a-zA-Z][a-zA-Z0-9]*$')!=null){
            process.env['localStorage_'+key]=value;
        }
    }
    length(){
        let count=0;
        for (const [key, value] of Object.entries(process.env)){
            if(key.startsWith('localStorage_')){
                count++;
            }
        };
        return count;
    }
    clear(){
        for (const [key, value] of Object.entries(process.env)){
            if(key.startsWith('localStorage_')){
                delete process.env['localStorage_'+key];
            }
        };
    }
}
module.exports = {
    localStorage : localStorage
}