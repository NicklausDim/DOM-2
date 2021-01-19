//Alert belongs to window amd you can skip window as a shortcut.
//window is a js object which is about browser.
//document is a js object which is about our html file also DOM.
//console is a js object which is about terminal of operating system.
//Heads-Up: Vs code Terminal is just a mirror of our terminal of operating system.
// Heads-Up: Browser Terminal is just a LIMITED mirror of our terminal of operating system.
//document.alert('Hey');  ==>> this does not work
//window.alert('Hey');    ==>> works
//alert('Hey');           ==>> works

//Stage 1 : Reach Element
//Stage 2 : Navigate Parent and children
//Stage 3 : Manipulating


//let test = 1232;

console.dir(document.getElementById('target'));

console.log(document.getElementById('target').parentElement);
console.log(document.getElementById('target').parentElement.parentElement);

console.log(document.getElementById('target').children);

document.getElementById('target').children[0].innerHTML += ' :)';

//Replace smiley of h1 with 🙂
//document.getElementById('target').children[0].innerHTML = document.getElementById('target').children[0].innerHTML.replace(':)','🥺' );
//Replace smiley of h2 with 🙂
//document.getElementById('target').children[1].innerHTML = document.getElementById('target').children[1].innerHTML.replace(':)','🥺' );


for (let i = 0; i < document.getElementById('target').children.length; i++) {
    document.getElementById('target').children[i].innerHTML = 
    document.getElementById('target').children[i].innerHTML.replaceAll(':)','🙂' );
}

console.log(document.getElementById('target').style.border);
document.getElementById('target').style.border = '1px solid black';
console.log(document.getElementById('target').style.border);

//works but don't do this:
test.style.backgroundColor = 'blue';

//you can use this:
let target = document.getElementById('target');

let styles = 'background-color: purple; border: 2px solid green;';

target.children[3].style.cssText = styles;

target.children[1].classList.add('active');

console.log(document.getElementsByClassName('active'));

//Heads-Up: Even if there's one element with the class name we have to call first index number [x]
//alert(document.getElementsByClassName('active')[0].innerHTML);

console.log(document.querySelector('div'));  // div:nth-of-type(1){}
console.log(document.querySelectorAll('div')); // div {}


console.log(document.querySelector('#target > h4:nth-of-type(2)'));


///Day-2 

//Short-hand
document.getElementById('test').innerHTML += '<h1>Nikolaos</h1>';

//2. Way: Longer and regular 
let myNewText = 'Eleni';

const newElement = document.createElement('h1');

const newContent = document.createTextNode(myNewText);

newElement.appendChild(newContent);

const testEl = document.getElementById('test');

document.getElementById('target').insertBefore(newElement, testEl);

//testEl.append(newElement);

let testMe = '<h2>Mihály</h2>';

//testEl.appendChild(testMe); //Error since test is a string not a node
testEl.append(testMe); // No error also no element this is just a string
testEl.insertAdjacentHTML( 'afterend', testMe ); // Works we have ctr to dom conversion
/* 

https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
'beforebegin': Before the element itself.
'afterbegin': Just inside the element, before its first child.
'beforeend': Just inside the element, after its last child.
'afterend': After the element itself.
 */


//Sum,ary
let newestEl = document.createElement('h1');
console.log(newestEl)
newestEl.append('Andreas');

newestEl.append('Burrhanovic');

testEl.append(newestEl);

testEl.append(newestEl);


//Advance navigation

//previous sibling

//goes to any type of node
document.getElementById('test').previousSibling.style.backgroundColor = 'yellow';
console.log(document.getElementById('test').previousSibling.previousSibling);
//goes to element type of node
document.getElementById('test').previousElementSibling.previousElementSibling.style.backgroundColor = 'purple';

//Heads-Up

//Whitespaces, comments are also nodes. 
//So These nodes would be selected by previousSibling.
//But those are not elements so previousElementSibling will skip these.
//document.getElementById('test').previousSibling.previousSibling = document.getElementById('test').previousElementSibling

//Tries to find any ancestor which matches the selector
document.getElementById('test').closest('main').style.backgroundColor = 'red';


console.log(document.getElementById('target').getElementsByClassName('active'));

//'.active:nth-of-typeof(2)'

let children = document.getElementById('target').children;

console.log(getElementByMyCondition(children, '.active'));

getElementByMyCondition(children, '.active')[0].innerHTML = 'Hey !!!';

function getElementByMyCondition(group, query) {
    let results = [];
    for (let i = 0; i < group.length; i++) {
    let child = group[i];
        if (child.matches(query)){
            results.push(child);
        }
    }

    return results;
}

let myObj = {num: 5, name: 'high'}

function giveMe5(goal) {
    if (goal.num == 5) {
        return goal;
    }
}

console.log(giveMe5(myObj));
console.log(giveMe5(myObj).newest = 'Hey');

//console.log('high ' + giveMe5());
/* 
function getEl(selector) {
    
}

getEl('#target'); = document.getElementById('target')

getEl('.active'); = document.getElementsByClassName('active')

getEl('.active:nth-of-type(3)') =document...

 */



console.log(getEl('#target > h4'));

//getEl('#target').innerHTML = 'TEST 123';

console.log(getEl('#target > h4').innerHTML = "HOP!");
/* 
v1:
function getEl(query) {
    let res = document.querySelectorAll(query);
    console.log(res);

    if(res.length > 1) {
        output = [];
        for (let i = 0; i < res.length; i++) {
            output.push(res[i]);
        }
    } else if (res.length == 1) {
        output = null;
        output = res[0];
    } else {
        output = null;
    } 

    return output;
}
 */

/* 
//V2:
function getEl(query) {
    let res = document.querySelectorAll(query);
    console.log(res);

    let output = null;

    switch (res.length) {
        case 0:
            break;

        case 1:
            output = res[0];
            break;
    
        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i]);
            }
            break;
    }

    return output;
}
 */

getEl('#test').style.backgroundColor = 'pink';

/* 
//V3:
function getEl (query, arr) {
    let res = document.querySelectorAll(query);
    console.log(res);

    if (arr) {
        let output = [];
        switch (res.length) {
            case 0:
                break;
            case 1:
                output.push(res[0]);
                break;
            default:
                output = [];
                for (let i = 0; i < res.length; i++) {
                    output.push(res[i]);
                }
                break;
        }
        return output;
    } else {
        let output = null;

        switch (res.length) {
            case 0:
                break;
            case 1:
                output = res[0];
                break;
            default:
                output = [];
                for (let i = 0; i < res.length; i++) {
                    output.push(res[i]);
                }
                break;
        }
        return output;
    }
}
 */
console.log(getEl('#target'.true));



//V4.1:
function getEl (query, arr) {
    let res = document.querySelectorAll(query);
    console.log(res);

    if (arr) {
        let output = [];
        switch (res.length) {
            case 0:
                break;
            case 1:
                output.push(res[0]);
                break;
            default:
                output = [];
                for (let i = 0; i < res.length; i++) {
                    output.push(res[i]);
                }
                break;
        }
        return output;
    } else {
        let output = null;

        switch (res.length) {
            case 0:
                break;
            case 1:
                output = res[0];
                break;
            default:
                output = [];
                for (let i = 0; i < res.length; i++) {
                    output.push(res[i]);
                }
                break;
        }
        return output;
    }
}


//V4.2:
function getEl (query, arr) {
    let res = document.querySelectorAll(query);
    console.log(res);

    let output;

    switch (res.length) {
        case 0:
            if (arr) {
                output = [];
            } else {
                output = null;
            }
            break;
        case 1:
            if (arr) {
                output.push(res[0]);
            } else {
                output = res[0];
            }
            
            break;
        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i]);
            }
            break;
    }
    
    return output;
    
}

console.log(getEl('#target'));






//V4.3:
function getEl (query, arr) {
    let res = document.querySelectorAll(query);
    console.log(res);

    let output = null;

    switch (res.length) {
        case 0:
            break;
        case 1:
            if (arr) {
                output.push(res[0]);
            } else {
                output = res[0];
            }
            break;
        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i]);
            }
            break;
    }

    return output;

}