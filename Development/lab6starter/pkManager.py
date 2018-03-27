from pokemon import Pokemon

class PKManager:
    def __init__ (self):
        self.records = []
    
    def readFile (self):
        raw = []
        with open("pokemon.csv", "r") as fp:
            data = fp.read()
            raw = data.split("\n")
            fp.close()
        for i in range (1, len(raw)):
            rec = raw[i]
            comp = rec.split(",")
            if len(comp) > 3:
                p = Pokemon(comp[0], comp[1], comp[2], comp[3], comp[4])
                self.records.append(p)
