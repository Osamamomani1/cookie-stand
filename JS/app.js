'use strict';
let container = document.getElementById("container");
let hours = ['6am', '7am','8am','9am', '10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

let finalTotal =0;
let arrayTotal=[];

    let table = document.createElement('table');
    container.appendChild(table);

    function hofTabel(){
    
    let headrow = document.createElement('tr');
    table.appendChild(headrow);
    
    let thehead0 = document.createElement('th')
    headrow.appendChild(thehead0);
    
    for (let i = 0; i < hours.length; i++) {
        let thehead = document.createElement('th')
        headrow.appendChild(thehead);
        thehead.textContent=`${hours[i]}`;
        arrayTotal.push(0);
    }
    
    let thehead1 = document.createElement('th')
    headrow.appendChild(thehead1);
    thehead1.textContent='Daily Location Total';
    
}
    
    hofTabel();
   

//========================================


function Location(name,mincust,maxcust,avgsale){
    this.name= name;
    this.mincust= mincust;
    this.maxcust= maxcust;
    this.avgsale= avgsale;
    this.saleph=[];
    this.total=0;

}

// random genrator :

function randomCustomer(min, max) {
    let randoms= Math.floor(Math.random() * (max - min + 1) + min);
    return randoms ;
}

//prototype:



Location.prototype.cookiesPh = function(){
    let value = (randomCustomer(this.mincust, this.maxcust) * this.avgsale);

    return value ;
}

Location.prototype.gitrandomnuimberofCustomers =function(){
    for (let i = 0; i < hours.length ; i++) {
        this.saleph.push (Math.floor (this.cookiesPh())); 
        this.total= this.total+this.saleph[i];
        arrayTotal[i]+=this.saleph[i];
    }

    finalTotal+=this.total;
}



// prototype render

Location.prototype.render= function(){

this.cookiesPh();
this.gitrandomnuimberofCustomers();

let row1=document.createElement('tr');
table.appendChild(row1);

// td

let td1=document.createElement('td');
row1.appendChild(td1);
td1.textContent= this.name;

for (let i = 0; i < hours.length; i++) {
    let thetd = document.createElement('td');
    row1.appendChild(thetd);
    thetd.textContent=`${this.saleph[i]}`;
    
}

let td2=document.createElement('td');
row1.appendChild(td2);
td2.textContent= this.total;



//     let h2element =document.createElement('h2');
// container.appendChild(h2element);
// h2element.textContent= this.name
// let unordirlest= document.createElement('ul')
// container.appendChild(unordirlest)
// for (let i = 0; i < this.saleph.length; i++) {
//  let lielement=document.createElement('li');
//  unordirlest.appendChild(lielement);   
// lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
// this.total= this.total+this.saleph[i];
// }
// let litotal=document.createElement('li');
// unordirlest.appendChild(litotal);
// litotal.textContent= `Total: ${this.total} cookies`
}

let Seattle = new Location('Seattle', 23, 65, 6.3)
Seattle.render();

let Tokyo = new Location('Tokyo', 3, 24, 1.2)
Tokyo.render();

let Dubai = new Location('Dubai', 11, 38, 3.7)
Dubai.render();

let Paris = new Location('Paris', 20, 38, 2.3)
Paris.render();

let Lima = new Location('Lima', 2, 16, 4.6)
Lima.render();

////===========


let storeform =document.getElementById('Storeform');
storeform.addEventListener('submit', submitter);


function submitter(event){
    event.preventDefault();

    table.deleteRow(table.rows.length -1);

    let name = event.target.locationField.value;
    let mincust = event.target.mincustomer.value;
    let maxcust = event.target.maxcustomer.value;
    let avgsale = event.target.avgcustomer.value; 
    
    let addedLocation = new Location(name,mincust,maxcust,avgsale)
    addedLocation.render();

    //Location.event.render

    

    // let container=getElementById('container')
    // container.textContent='slkdjaslk';

    footerTabel();
    document.getElementById("Storeform").reset()
}

///////////////////////

function footerTabel(){

let headrow = document.createElement('tr');
table.appendChild(headrow);

let thehead0 = document.createElement('td')
headrow.appendChild(thehead0);
thehead0.textContent='total'

for (let i = 0; i < hours.length; i++) {
    let thehead = document.createElement('td')
    headrow.appendChild(thehead);
    thehead.textContent=arrayTotal[i];

}

let thehead1 = document.createElement('td')
headrow.appendChild(thehead1);
thehead1.textContent=finalTotal;

};

footerTabel();

// ===================================   Form   ======================================

// let storeform =document.getElementById('Storeform');
// storeform.addEventListener('submit', submitter);


// function submitter(event){
//     event.preventDefault();

//     let name = event.target.locationField.value;
//     let mincust = event.target.mincustomer.value;
//     let maxcust = event.target.maxcustomer.value;
//     let avgsale = event.target.avgcustomer.value; 
    
//     let addedLocation = new Location(name,mincust,maxcust,avgsale)
//     addedLocation.render();

//     Location.event.render


// }











// Tabels =====================================================================================
// golbal
// function tabletest() {
// let table = document.createElement('table');
// container.appendChild(table);

// let headrow = document.createElement('tr');
// table.appendChild(headrow);

// let thehead0 = document.createElement('th')
// headrow.appendChild(thehead0);

// for (let i = 0; i < hours.length; i++) {
//     let thehead = document.createElement('th')
//     headrow.appendChild(thehead);
//     thehead.textContent=`${hours[i]}`;

// }

// let thehead1 = document.createElement('th')
// headrow.appendChild(thehead1);
// thehead1.textContent='Daily Location Total';


// };

// tabletest();


// Tabels in render ==================================================
// row

// let row1=document.createElement('tr');
// table.appendChild(row1);

// // td

// let td1=document.createElement('td');
// row1.appendChild(td1);
// td1.textContent= this.name;

// for (let i = 0; i < hours.length; i++) {
//     let thetd = document.createElement('td');
//     row1.appendChild(thetd);
//     thetd.textContent=`${this.saleph[i]}`;
    
// }

// let td2=document.createElement('td');
// row1.appendChild(td2);
// td2.textContent= this.total;


/*
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



// let tokyo = {
//     location: 'Tokyo',
//     mincust: 3,
//     maxcust: 24,
//     avgsale: 1.2,
//     saleph: [],
//     total: 0,
//     gitrandomnuimberofCustomers:  function(){
//         for (let i = 0; i < hours.length ; i++) {
//             this.saleph.push (Math.floor (this.cookiesPh()));   
//         }
//         console.log(this.saleph)
//     },
//     cookiesPh: function() {
//         return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
//         },
// render: function(){
// let h2element =document.createElement('h2');
// container.appendChild(h2element);
// h2element.textContent= this.location
// let unordirlest= document.createElement('ul')
// container.appendChild(unordirlest)
// for (let i = 0; i < this.saleph.length; i++) {
//  let lielement=document.createElement('li');
//  unordirlest.appendChild(lielement);   
// lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
// this.total= this.total+this.saleph[i];
// }
// let litotal=document.createElement('li');
// unordirlest.appendChild(litotal);
// litotal.textContent= `Total: ${this.total} cookies`
// }
// }

// tokyo.gitrandomnuimberofCustomers();
// tokyo.render();
// function randomCustomer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let dubai = {
//     location: 'Dubai',
//     mincust: 11,
//     maxcust: 38,
//     avgsale: 3.7,
//     saleph: [],
//     total: 0,
//     gitrandomnuimberofCustomers:  function(){
//         for (let i = 0; i < hours.length ; i++) {
//             this.saleph.push (Math.floor (this.cookiesPh()));   
//         }
//         console.log(this.saleph)
//     },
//     cookiesPh: function() {
//         return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
//         },
// render: function(){
// let h2element =document.createElement('h2');
// container.appendChild(h2element);
// h2element.textContent= this.location
// let unordirlest= document.createElement('ul')
// container.appendChild(unordirlest)
// for (let i = 0; i < this.saleph.length; i++) {
//  let lielement=document.createElement('li');
//  unordirlest.appendChild(lielement);   
// lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
// this.total= this.total+this.saleph[i];
// }
// let litotal=document.createElement('li');
// unordirlest.appendChild(litotal);
// litotal.textContent= `Total: ${this.total} cookies`
// }
// }

// dubai.gitrandomnuimberofCustomers();
// dubai.render();
// function randomCustomer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let paris = {
//     location: 'Paris',
//     mincust: 20,
//     maxcust: 38,
//     avgsale: 2.3,
//     saleph: [],
//     total: 0,
//     gitrandomnuimberofCustomers:  function(){
//         for (let i = 0; i < hours.length ; i++) {
//             this.saleph.push (Math.floor (this.cookiesPh()));   
//         }
//         console.log(this.saleph)
//     },
//     cookiesPh: function() {
//         return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
//         },
// render: function(){
// let h2element =document.createElement('h2');
// container.appendChild(h2element);
// h2element.textContent= this.location
// let unordirlest= document.createElement('ul')
// container.appendChild(unordirlest)
// for (let i = 0; i < this.saleph.length; i++) {
//  let lielement=document.createElement('li');
//  unordirlest.appendChild(lielement);   
// lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
// this.total= this.total+this.saleph[i];
// }
// let litotal=document.createElement('li');
// unordirlest.appendChild(litotal);
// litotal.textContent= `Total: ${this.total} cookies`
// }
// }

// paris.gitrandomnuimberofCustomers();
// paris.render();
// function randomCustomer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let lima = {
//     location: 'Lima',
//     mincust: 2,
//     maxcust: 16,
//     avgsale: 4.6,
//     saleph: [],
//     total: 0,
//     gitrandomnuimberofCustomers:  function(){
//         for (let i = 0; i < hours.length ; i++) {
//             this.saleph.push (Math.floor (this.cookiesPh()));   
//         }
//         console.log(this.saleph)
//     },
//     cookiesPh: function() {
//         return (randomCustomer(this.mincust, this.maxcust) * this.avgsale);
//         },
// render: function(){
// let h2element =document.createElement('h2');
// container.appendChild(h2element);
// h2element.textContent= this.location
// let unordirlest= document.createElement('ul')
// container.appendChild(unordirlest)
// for (let i = 0; i < this.saleph.length; i++) {
//  let lielement=document.createElement('li');
//  unordirlest.appendChild(lielement);   
// lielement.textContent= `${hours[i]}: ${this.saleph[i]} cookies`;
// this.total= this.total+this.saleph[i];
// }
// let litotal=document.createElement('li');
// unordirlest.appendChild(litotal);
// litotal.textContent= `Total: ${this.total} cookies`
// }
// }

// lima.gitrandomnuimberofCustomers();
// lima.render();
// function randomCustomer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }







