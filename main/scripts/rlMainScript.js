
let testObj = {type: 'div', append: '.rlApp', class: ['testDiv'], inHL: 'Hello World', evt: {type: 'click', func: testFunc}}

let testFunc = function(){
    console.log('working');
}

(function initApp(){
    console.log('roglite')
    rlCreEl(testObj);
})()