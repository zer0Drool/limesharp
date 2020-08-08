console.log(`
    tobias seymour limesharp developer test

    zeroDrool is the magic function

    task 1 ~ zeroDrool.repeat(array)
    task 2 ~ zeroDrool.reformat(string)
    task 3 ~ zeroDrool.next_binary_number(array)
`);


let output = null;

function zeroDrool() {
    console.log('tell me what to do dawg');
};

zeroDrool.repeat = function(arr) {

    if (Array.isArray(arr)) {

        let output = [];

        arr.forEach(item => {
            for (let i = 0; i < arr.length; i++) {
                output.push(arr[i]);
            };
        });

        console.log(output);

    } else {
        console.log(`value entered is a ${typeof(arr)}, pls enter an array`);
    };

};

zeroDrool.reformat = function(str) {
    
    if (typeof(str) === 'string') {

        console.log(
            str.replace(/[aeiou]/ig, '')
               .replace(/([^\s]+)/g, match => (match.toLowerCase()))
               .replace(/^[^ ]/, match => (match.toUpperCase()))
        );

    } else {
        console.log(`i see you trying to enter a ${typeof(str)}, just enter a string ye`);
    };

};

zeroDrool.next_binary_number = function(arr) {

    if (Array.isArray(arr)) {

        let x = '';

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] === 0 || arr[i] === 1) {
                
                let y = arr[i].toString();
                x = x + y;

            } else {
                console.log(`${arr[i]}? >>> 1's and 0's only my dude`);
                return;
            };

        };

        let num = parseInt(x, 2);
        let newNum = num + 1;
        let bin = newNum.toString(2);

        let output = [];
        for (let i = 0; i < bin.length; i++) {
            output.push(bin[i]);
        };

        console.log(output);
        
    } else {
        console.log(`i'm all about arrays, none of these ${typeof(arr)}s`);
    };

};