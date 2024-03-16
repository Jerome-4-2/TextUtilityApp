// function mainFunction(callback){
//     console.log("Operation started...")
//     setTimeout(function () {
//         callback("Operation completed");
        
//     }, 3000);
// }
    
// function callbackFunction(result){
//     console.log("Result: " + result);
// }
// mainFunction(callbackFunction);
    

// var greet = function (word) {
//     console.log("What are the main things to look for in a potential " + word)
// }

// greet('Nigger');


setTimeout( function() {
    console.log("This is not Nigga town you bitch...");
}, 1355);

var greet = (color) =>{
    console.log("the color is " + color);
}
greet('red');

const handleBtnClick = (color) => {
    let backgroundColor;
    switch(color){
        case '1':
            backgroundColor = props.mode === 'light' ? 'red':'blue'
    }
    document.body.style.backgroundColor = backgroundColor;
}


