
class Movie {
    constructor(id,title,year,genre,related=[]) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        if (related == [] )
            this.related = [];
        else if (related instanceof Array)
            this.related = related;
    }

    addRelatedMovie (m) {
        if (m instanceof Movie)
            if (!(this.related.includes(m)))
                this.related.push(m);
    }

    setGenre (g) {
        if (g instanceof Genre){
            this.genre = g;
        }
    }
}

class Genre {
    constructor(name,movies=[]) {
        this.name = name;
        if (movies == [])
            this.movies = []
        else if (movies instanceof Array)
            this.movies = movies
    }

    addMovie (m) {
        if (m instanceof Movie)
            if (!(this.movies.includes(m)))
                this.movies.push(m)
    }
}

// let a = new Movie (123,'It',2000,null,[])
// let b = new Movie (124,'That',2000,null,[])

// let c = new Movie (126,'Those',2000,null,[])

// let m = new Movie (125,'These',2000,null,[a,b])

// m.addRelatedMovie(c)
// console.log(m)

// let g_ = new Genre('Horror')

// m.setGenre(g_)
// g_.addMovie(m)
// console.log(m)