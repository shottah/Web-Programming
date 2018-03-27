class Pokemon {
    constructor (id, name, weight, height, exp) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.base_exp = exp;
    }

    toJSON () {
        const o = {
            'id':this.id,
            'name':this.name,
            'weight':this.weight,
            'height':this.height,
            'base_exp':this.base_exp
        }
        return JSON.stringify(o);
    }

    toHTMLRow () {
        str = "<tr>";
        // this = Pokemon obj
        // i iterate through this[] list of Pokemon object attributes
        for (let i in this) {
            str += "<td>" + this[i] + "</td>";
        }
        str += "</tr>";
        return str;
    }
}

// To handle running on commandline
if (global && module && module.exports){
    console.log("Running pokemon.js via the command line");
    module.exports = {
        'Pokemon': Pokemon
    };
}

let p = new Pokemon (001, "Vayne", 60, 90, 560);
console.log(p.toHTMLRow());