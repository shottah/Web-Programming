const Pokemon = require('./pokemon').Pokemon;
const assert = require('assert');

function createPokemon(){
    return new Pokemon(1, "Buba", 1, 1, 3);
}

function test_construtor(){
    let p = createPokemon();
    assert.deepEqual(p.name, "Buba");
}

function test_toJSON(){
    let p = createPokemon();
    let strJSON = p.toJSON();
    assert.equal(typeof(strJSON), 'string');
}

function test_toHTMLRow(){
    let p = createPokemon();
    let strHTML = p.toHTMLRow();
    assert.equal(typeof(strHTML), 'string');
}

const testFunctions = [
    test_construtor,
    test_toJSON,
    test_toHTMLRow
].forEach(func => {
    func.call();
});