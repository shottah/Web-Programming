var genres = [];
var uuid = 1;

function createGenre () {
    var name = document.getElementById('name').value;
    var movies = document.getElementById('movies').value;
    var ol = document.getElementById('genreListOrdered');
    var dropdown = document.getElementById('genre');
    
    // Parse Movies to [] form
    movies = parseMovies(movies);
    
    // Create Genre Class Object
    let g = new Genre (name,movies);

    // Determine if genre already exists
    let add = true;
    for (i in genres) {
        if (genres[i] === g.name)
            add = false;
    }

    // Update the global list, dropdown and sort
    if (add) {
        enqueue(genres,g.name);
        genres = sort(genres);
        console.log("Pushed "+g.name);
        displayGenres (ol, genres);
        populateDropdown(dropdown,genres);
        if (dropdown.disabled == true)
            dropdown.disabled = false;
    }
}

function createMovie () {
    var title = document.getElementById('movietitle').value;
    var year = document.getElementById('year').value;
    var genre = document.getElementById('genre').value;
    var related = document.getElementById('related');
    
    related = handleSelectMulti (related);

    console.log("Related:");
    console.log(related);
    let m = new Movie (uuid,title,year,genre,related);

    if (uuid == 1) {
        setupElements(m)
    }
    displayMovies(m);
    
    uuid+=1;
}

function displayGenres(o,a) {
    var li = [];
    o.innerHTML = "";
    for (i in a) {
        li[i] = document.createElement('li');
        li[i].innerHTML = a[i];
        o.appendChild(li[i]);
    }
}

function setupElements(m) {
    var section = document.createElement('section');
    section.className = 'row';
    document.getElementsByClassName('col')[0].appendChild(section);

    var table = document.createElement('table');
    table.id = 'movieList';
    table.style.width = '100%';
    table.style.textAlign = 'center';
    section.appendChild(table);
    var trow = toHTMLRow (m, true);
    table.appendChild(trow);
}

function displayMovies(m) {
    var table = document.getElementById('movieList');
    
    // Create a new row in table
    var trow = toHTMLRow(m);
    table.appendChild(trow);
    console.log(trow)

    // Update the Genre -> Movie List
    // Update the Movie -> Related List
    var g_mov = document.getElementById('movies')
    var m_rel = document.getElementById('related')
    
    if (g_mov.disabled == true)
        g_mov.disabled = false;
    if (m_rel.disabled == true)
        m_rel.disabled = false;
    
    populateMultiSelct (g_mov, m)
    populateMultiSelct (m_rel, m)
    
}

function populateDropdown (dropdown,g) {
    var opt = []
    dropdown.innerHTML = "";
    for (i in g) {
        opt[i] = document.createElement('option');
        opt[i].innerHTML = g[i];
        dropdown.appendChild(opt[i]);
    }
}

function populateMultiSelct (sel,m) {
    var opt = document.createElement('option');
    opt.innerHTML = m.title + '(' + m.year + ')';
    opt.value = m.title;
    sel.appendChild(opt);
}

function toHTMLRow(m,head=false) {
    let str = '';
    console.log(m);
    console.log(head);
    if (m instanceof Movie && !head) {
        for (var p in m) {
            if (m.hasOwnProperty(p)) {
                // P is either var or []
                if (m[p] instanceof Array){
                    console.log(m[p])
                    str += '<td>' + m[p].join(', ') +'</td>';
                }else {
                    str += '<td>' + m[p] + '</td>';
                }
            }
                
        }
    }
    if (m instanceof Movie && head) {
        console.log('Adding heading...')
        for (var p in m) {
            if (m.hasOwnProperty(p))
                str += '<th>'+ p.toUpperCase() +'</th>';
        }
        console.log(str)
    }

    var row = document.createElement('tr');
    row.innerHTML = str;
    return row
}

function handleSelectMulti (el) {
    let arr = [];
    let o = el && el.options;

    for (i in o) {
        if (o[i].selected) {
            arr.push(o[i].value || o[i].text);
        }
    }

    return arr;
}

function parseMovies (str) {
    if (str === '')
        return []
    else {
        m = []
        c = str.split(',')
        c.forEach((e)=> m.push(e));
    }
    return m
}

function loadGenres () {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var ol = document.getElementById('genreListOrdered')
            var data = this.responseText;
            var result = data.split(",");
            for (i in result)
                genres.push(result[i]);

            genres = sort(genres);
            displayGenres(ol, genres)
        }
    }

    xhttp.open('GET','http://127.0.0.1:8080/data/genresDB.txt',true);
    xhttp.send();
}

function loadMovies () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            for (i in data) {
                mov = data[i];
                m = new Movie (uuid,
                    mov.title,mov.year,
                    mov.genre,mov.related);
                if (uuid == 1) {
                    setupElements(m);
                }
                displayMovies(m);
                uuid+=1;
            }
        }
    }

    xhttp.open('GET','http://127.0.0.1:8080/data/moviesDB.json',true);
    xhttp.send();
}

loadGenres();
loadMovies();