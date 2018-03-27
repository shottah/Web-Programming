from pokemon import Pokemon
import unittest

class testPokemon(unittest.TestCase):
    def __createPokemon(self):
        return Pokemon(1, "Buba", 1, 1, 3)
    
    def test_constructor(self):
        p = self.__createPokemon()
        self.assertEqual(p.name, "Buba")
    
    def test_toJSON(self):
        p = self.__createPokemon()
        strJSON = p.toJSON()
        self.assertEqual(type(strJSON), str)

    def test_toHTMLRow(self):
        p = self.__createPokemon()
        strHTML = p.toHTMLRow()
        self.assertEqual(type(strHTML), str)

if __name__ == '__main__':
    unittest.main()