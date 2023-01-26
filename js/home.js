



let one;

//console.log(myJSON)

let qq = myJSON.forEach(element => {
    one = element.date_fin_conso
    console.log(one)
 });
 

let home = document.getElementsById("list")

let homie = document.getElementsByClassName("prem")


for (const iterator of home) {
    console.log(iterator)
}

// div 1
let pp = document.createElement('div')
pp.setAttribute('class', "col-md-3")

// div 2
let aa = document.createElement('div')
aa.setAttribute('class', "input-group mb-3")

// paragraphe
let ii = document.createElement('p')
ii.innerText = one;

aa.appendChild(ii);
pp.appendChild(aa);

home.appendChild(pp);
