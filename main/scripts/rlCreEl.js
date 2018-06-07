
function rlCreEl(obj){
    let newEl = document.createElement('div');
    obj.classes.map(function(item){
        newEl.classList.add(item);
    })
    if(obj.id){newEl.id = obj.id};
    if(obj.inHL){newEl.innerHTML = obj.inHL};
    if(obj.evt){
        newEl.addEventListener(obj.evt.type, obj.evt.func)
    }
    if(obj.src){newEl.src = obj.src}
    if(obj.lnk){newEl.addEventListener('click', function(){ 
        (!obj.lnk.self) ? window.open(obj.lnk.hrf, '_blank') : window.open(obj.lnk.hrf, '_self');
    })}

    document.querySelector(obj.append).appendChild(newEl);
}