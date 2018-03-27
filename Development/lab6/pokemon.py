import json

class Pokemon:
    def __init__ (self, id, name, weight, height, exp):
        self.id = id
        self.name = name
        self.weight = weight
        self.height = height
        self.base_exp = exp
    
    def toJSON (self):
        dict_val =  {
            'id':self.id,
            'name':self.name,
            'weight':self.weight,
            'height':self.height,
            'base_exp':self.base_exp
        }

        return json.dumps(dict_val)
    
    def toHTMLRow (self):
        str = "<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td>".format(self.id, self.name, self.weight, self.height, self.base_exp)
        return str
