//task 1
const cat = {complain: "meow!"}
console.log(cat.complain);

//---------------------------------------------------------
//task 2
const heading = document.querySelector("h3")
heading.innerHTML = "Updated Title"

//-----------------------------------------------------------
//task 3
heading.style.fontSize = "2em"
//------------------------------------------------------------
//task 4
heading.className += 'subheading';
console.log(heading);

//---------------------------------------------------------------
//task 5
const paragraphs = document.querySelectorAll("p")
    for (var par of paragraphs) {
    console.log(par);
    par.style.color = "red"
    }

//--------------------------------------------------------------
//task 6
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML += `<p>New Pargraph</p>`;
resultsContainer.style.backgroundColor = "yellow" 

//---------------------------------------------------------------
//task 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function kittens(list) {
    let string = "";
    for (var cat of list) {
        string += console.log(`${cat.name} ${cat.age}`);
    }
    return string;
};
kittens(cats);

//-----------------------------------------------------------
//task 8
const catBox = document.querySelector("div.cat-container")

function createCats (cats){
    let pus = "";
    for(let kitty of cats) {
        pus += `<div><h5> ${kitty.name} </h5></div>`;
        if(kitty.age) pus += `<div><p>${kitty.age}</p></div>`;
        else pus += "age not known"
    }
    return pus;
    
}
catBox.innerHTML = createCats(cats)
