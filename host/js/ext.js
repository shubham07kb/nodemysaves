appurl='mysaves.cyclic.app';
async function a(){
  await fetch(appurl+'/mo').then(response=>response.json());
}
a();