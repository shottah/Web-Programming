first_names = ['johnny','peter','peter','abraham','harry']
last_names = ['bravo','griffin','millark','lincoln','potter']

function merge2Single (a, b) {
    return String(a)+" "+String(b);
}

function merge2Object (a, b) {
    o = {
        'firstname':a,
        'lastname':b
    }
    return o;
}

function mergeHandler (a, b, func) {
    l = []
    a.forEach((e,i) => l.push(func(a[i],b[i])));
    populateOutput(l)
}

function populateOutput (a) {
    var output = document.getElementById('output')
    let str = flatten(a, true)
    output.innerHTML = str
}

function populateList (target, set) {
    var ol = document.getElementById(target)
    var li = document.createElement(li)
    for (i in set) {
        li = document.createElement('li')
        li.innerHTML = set[i];
        ol.append(li)
    }
}

populateList("fnames", first_names)
populateList("lnames", last_names)