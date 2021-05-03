'use strict';
let container = document.getElementById("container");
let hours = ['6am', '7am','8am','9am', '10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
let Seattle = {
    location: 'Seattle',
    mincust: 23,
    maxcust: 65,
    avgsale: 6.3,
    saleph: [],
    total: 0,
    gitrandomnuimberofCustomers:  function(){
        for (let i = 0; i < hours.length ; i++) {
            this.saleph.push (Math.floor (this.cookiesPh()));   
        }
        console.log(this.saleph)
    },
    cookiesPh: function() {
        return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
        },
        
render: function(){
let h2element =document.createElement('h2');
container.appendChild(h2element);
h2element.textContent= this.location
let unordirlest= document.createElement('ul')
container.appendChild(unordirlest)
for (let i = 0; i < this.saleph.length; i++) {
 let lielement=document.createElement('li');
 unordirlest.appendChild(lielement);   
lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
this.total= this.total+this.saleph[i];
}
let litotal=document.createElement('li');
unordirlest.appendChild(litotal);
litotal.textContent= `Total: ${this.total} cookies`
}
}

Seattle.gitrandomnuimberofCustomers();
Seattle.render();
function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// // only get one time
// let parent = document.getElementById('parent');
// // create a child
// let child = document.createElement('p');
// // console.log(child);
// // append the child
// parent.appendChild(child);
// console.log(parent);
// child.textContent = 'Hello baba I miss you div[parent]';
//console.log(randomCustomer(Seattle.mincust, Seattle.maxcust));
/*function cookiesPh() {
return (randomCustomer(Seattle.mincust, Seattle.maxcust) * Seattle.avgsale);
}
//console.log(Math.floor (cookiesPh()));
/*let arr1 = [];
let total = 0 ;
for (let i = 0; i < 14 ; i++) {
    arr1.push (Math.floor (cookiesPh()));   
    total = total+arr1[i];
}
/*let total = 0 ;
for (let i=0; i<14; i++){
    total = total+arr1[i];
}
*/



let tokyo = {
    location: 'Tokyo',
    mincust: 3,
    maxcust: 24,
    avgsale: 1.2,
    saleph: [],
    total: 0,
    gitrandomnuimberofCustomers:  function(){
        for (let i = 0; i < hours.length ; i++) {
            this.saleph.push (Math.floor (this.cookiesPh()));   
        }
        console.log(this.saleph)
    },
    cookiesPh: function() {
        return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
        },
render: function(){
let h2element =document.createElement('h2');
container.appendChild(h2element);
h2element.textContent= this.location
let unordirlest= document.createElement('ul')
container.appendChild(unordirlest)
for (let i = 0; i < this.saleph.length; i++) {
 let lielement=document.createElement('li');
 unordirlest.appendChild(lielement);   
lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
this.total= this.total+this.saleph[i];
}
let litotal=document.createElement('li');
unordirlest.appendChild(litotal);
litotal.textContent= `Total: ${this.total} cookies`
}
}

tokyo.gitrandomnuimberofCustomers();
tokyo.render();
function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let dubai = {
    location: 'Dubai',
    mincust: 11,
    maxcust: 38,
    avgsale: 3.7,
    saleph: [],
    total: 0,
    gitrandomnuimberofCustomers:  function(){
        for (let i = 0; i < hours.length ; i++) {
            this.saleph.push (Math.floor (this.cookiesPh()));   
        }
        console.log(this.saleph)
    },
    cookiesPh: function() {
        return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
        },
render: function(){
let h2element =document.createElement('h2');
container.appendChild(h2element);
h2element.textContent= this.location
let unordirlest= document.createElement('ul')
container.appendChild(unordirlest)
for (let i = 0; i < this.saleph.length; i++) {
 let lielement=document.createElement('li');
 unordirlest.appendChild(lielement);   
lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
this.total= this.total+this.saleph[i];
}
let litotal=document.createElement('li');
unordirlest.appendChild(litotal);
litotal.textContent= `Total: ${this.total} cookies`
}
}

dubai.gitrandomnuimberofCustomers();
dubai.render();
function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let paris = {
    location: 'Paris',
    mincust: 20,
    maxcust: 38,
    avgsale: 2.3,
    saleph: [],
    total: 0,
    gitrandomnuimberofCustomers:  function(){
        for (let i = 0; i < hours.length ; i++) {
            this.saleph.push (Math.floor (this.cookiesPh()));   
        }
        console.log(this.saleph)
    },
    cookiesPh: function() {
        return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
        },
render: function(){
let h2element =document.createElement('h2');
container.appendChild(h2element);
h2element.textContent= this.location
let unordirlest= document.createElement('ul')
container.appendChild(unordirlest)
for (let i = 0; i < this.saleph.length; i++) {
 let lielement=document.createElement('li');
 unordirlest.appendChild(lielement);   
lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
this.total= this.total+this.saleph[i];
}
let litotal=document.createElement('li');
unordirlest.appendChild(litotal);
litotal.textContent= `Total: ${this.total} cookies`
}
}

paris.gitrandomnuimberofCustomers();
paris.render();
function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let lima = {
    location: 'Lima',
    mincust: 2,
    maxcust: 16,
    avgsale: 4.6,
    saleph: [],
    total: 0,
    gitrandomnuimberofCustomers:  function(){
        for (let i = 0; i < hours.length ; i++) {
            this.saleph.push (Math.floor (this.cookiesPh()));   
        }
        console.log(this.saleph)
    },
    cookiesPh: function() {
        return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
        },
render: function(){
let h2element =document.createElement('h2');
container.appendChild(h2element);
h2element.textContent= this.location
let unordirlest= document.createElement('ul')
container.appendChild(unordirlest)
for (let i = 0; i < this.saleph.length; i++) {
 let lielement=document.createElement('li');
 unordirlest.appendChild(lielement);   
lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
this.total= this.total+this.saleph[i];
}
let litotal=document.createElement('li');
unordirlest.appendChild(litotal);
litotal.textContent= `Total: ${this.total} cookies`
}
}

lima.gitrandomnuimberofCustomers();
lima.render();
function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

