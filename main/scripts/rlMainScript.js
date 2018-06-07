
let testObj = {type: 'div', append: '.rlApp', classes: ['testDiv', 'hvPoint'], inHL: 'Hello World', evt: {type: 'click', func: testFunc}, id: 'testDivId', lnk: {hrf: 'http://www.wikipedia.com'}};

function testFunc(){
    console.log('working');
}

(function initApp(){
    console.log('roglite')
    rlCreEl(testObj);
})()