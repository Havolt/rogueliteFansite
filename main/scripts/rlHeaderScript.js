
function createHead(){
    let headElArr = [
        //Header container div
        {type: 'div', classes: ['rlHeadCn'], append: '.rlHead'},
        //Title section
        {type: 'div', classes: ['rlHeadTitleCn'], append: '.rlHeadCn'},
        {type: 'div', classes: ['rlHeadTitleTxt'], append: '.rlHeadTitleCn', inHL: 'Roglite'}
    ];

    headElArr.map(function(item){
        rlCreEl(item);
    })
}


(function initAppHead(){
    createHead();
})()