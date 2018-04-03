// Return an array of even numbers between 1 and n
function generateEven (n) {
    let o = [];
    for (i = 1; i <= n; i++) {
        if (i%2==0)
        o.push(i);
    }
    return o;
}

// Display the number of elements in an array or object
function getSize (o) {
    return Object.keys(o).length;
}

// Append item to front or end of list
function addTo(o,v,str) {
    let j = 0;
    if (str == "back") 
        j = getSize(o);

    o.splice(j, 0, v);
}

// Enqueue an item to the list
function enqueue (o,v) {
    addTo (o, v, "back");
}

// Dequeue an item from the list
function dequeue (o) {
    if (getSize(o)>=0)
        o.splice(-1,1);
}

// Add an item to an object at an index and return the object
function addToObj(o,i,v) {
   o.splice(i,0,v);
   return o;
}

// Sort list in ascending order (must have option for both ways)
function sort(o,str="ascending") {
    if (typeof(o[0])==="number")
        o.sort(function(a,b){return a-b})
    else
        o.sort();
    if (str=="ascending")
        return o;
    else
        o.reverse();
    return o;
}

// Flatten object literal into a string
function flatten(o, option=false) {
    let s = "";
    let value;
    
    if (typeof(o) === "object") {
        for (key in o) {
            value = o[key];
            if (typeof(value) === "object")
                s += key + ":{" + flatten(value) + "}";
            else if (value instanceof Array)
                s += key + ":[" + flatten(value) + "]";
            else
                s += key + ":" + value + ", ";
            if (option)
                s += "<br>";
            }
    }
    
    else if (o instanceof Array) {
        for (key in o) {
            value = o[key]
            if (typeof(value) === "object")
                s += key + ":{" + flatten(value) + "}";
            else if (value instanceof Array)
                s += key + ":[" + flatten(value) + "]";
            else
                s += key + ":" + value + ", ";
            if (option)
                s += "<br>";
        }
    }

    return s;
}


/*
// Debug & Prints
let o = generateEven(10)
let alpha = ['A', 'AB', 'Z', 'BA', 'C']
let d = {
    'x':1,
    'y':2
}

let e = {
    "n":'1',
    "m":'2',
    "d2": {
        "x":'3.1',
        "y":'3.2',
        "z": {
            "+":"4.1",
            "_":"4.2"
        }
    }
}
console.log(o)
console.log("Size of array:")
console.log(getSize(o))
console.log("Size of dict:")
console.log(getSize(d))
addTo(o, 200, "back")
console.log("Add 200 to back of array:")
console.log(o)
console.log("Enqueue 201 to list:")
enqueue(o, 201)
console.log(o)
console.log("Dequeue from list:")
dequeue(o)
console.log(o)
console.log("Add 99 to index 5 of list:")
o = addToObj(o,5,99)
console.log(o)
console.log("Sort asc:")
console.log(sort(alpha))
console.log("Sort desc:")
console.log(sort(o, "descending"))
console.log("Flatten object literal e:")
console.log(flatten(e))
*/