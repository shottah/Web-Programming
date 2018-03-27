import json
import uuid
class Movie:
    
    def __init__ (self,title,year,genre,related=None):
        self.uuid = uuid.uuid4
        self.title = title
        self.year = year
        self.genre = genre
        if related is None:
            self.related = []
        else:
            self.related = related
    
    def addRelatedMovie (self,m):
        if isinstance(m,Movie):
            if m not in self.related:
                self.related.append(m)
    
    def setGenre (self,g):
        if isinstance(g,Genre):
            self.genre = g


class Genre:

    def __init__ (self,name,movies=None):
        self.name = name
        if movies is None:
            self.movies = []
        else:
            self.movies = movies
    
    def addMovie (self,m):
        if (isinstance(m, Movie)):
            if m not in self.movies:
                self.movies.append(m)
