let pendingInstall;
const installBtn=document.getElementById('btn-instalar');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();pendingInstall=event;installBtn.hidden=false;});
installBtn.addEventListener('click',async()=>{if(!pendingInstall)return;try{await pendingInstall.prompt();await pendingInstall.userChoice;}finally{pendingInstall=null;installBtn.hidden=true;}});
window.addEventListener('appinstalled',()=>{pendingInstall=null;installBtn.hidden=true;});
