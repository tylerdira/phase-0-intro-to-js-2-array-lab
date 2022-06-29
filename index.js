// Write your solution here!
let cats = ['Milo', 'Otis', "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(){
    let newCat = ["Broom"]
    let newCats = cats.concat(newCat)
    return newCats
}

function prependCat(cat){
    let newCats = [...cats]
    newCats.unshift(cat)
    return newCats
}

function removeLastCat(){
    let newCats = [...cats]
    newCats.pop()
    return newCats
}

function removeFirstCat(){
    let newCats = [...cats]
    newCats.shift()
    return newCats
}