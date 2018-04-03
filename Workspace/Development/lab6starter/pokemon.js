class Pokemon{
    
}

// To handle running on commandline
if (global && module && module.exports){
    // console.log("Running pokemon.js via the command line");
    module.exports = {
        'Pokemon': Pokemon
    };
}