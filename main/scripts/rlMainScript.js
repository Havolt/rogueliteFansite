
let siteElArr = [
    {type: 'div', classes: ['rlHead'], append: '.rlApp'},
    {type: 'div', classes: ['rlMain'], append: '.rlApp'},
    {type: 'div', classes: ['rlFoot'], append: '.rlApp'}
];






(function initApp(){    
    siteElArr.map(function(item){
        console.log(item)
        rlCreEl(item);
    })
})()