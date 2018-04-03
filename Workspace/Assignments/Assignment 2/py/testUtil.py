import unittest
import util

class TestUtil (unittest.TestCase):
    
    def test_generateEven (self):
        result = util.generateEven(10)
        answer = [2,4,6,8,10]
        self.assertEqual(result, answer)
        result = util.generateEven(2)
        answer = [2]
        self.assertEqual(result, answer)
        result = util.generateEven(1)
        answer = []
        self.assertEqual(result, answer)
    
    def test_getSize (self):
        a = [1,2,3]
        result = util.getSize(a)
        self.assertEqual(result, 3)
        a = [1]
        result = util.getSize(a)
        self.assertEqual(result, 1)
        a = []
        result = util.getSize(a)
        self.assertEqual(result, 0)

    def test_addTo (self):
        a = [1,2,3]
        util.addTo(a,4,"front")
        answer = [4,1,2,3]
        self.assertEqual(a, answer)
        util.addTo(a,5,"back")
        answer = [4,1,2,3,5]
        self.assertEqual(a, answer)
        util.addTo(a,99,"fox")
        self.assertEqual(a, answer)

    def test_enqueue (self):
        a = []
        util.enqueue(a,1)
        self.assertEqual(a,[1])

    def test_dequeue (self):
        a = [1]
        util.dequeue(a)
        self.assertEqual(a,[])
        util.dequeue(a)
        self.assertEqual(a,[])
    
    def test_addToObj (self):
        a = []
        result = util.addToObj(a,0,1)
        self.assertEqual(result,[1])
        result = util.addToObj(a,0,2)
        self.assertEqual(result,[2,1])
        result = util.addToObj(a,1,3)
        self.assertEqual(result,[2,3,1])
        result = util.addToObj(a,-1,4)
        self.assertEqual(result,[2,3,1])

    def test_sort (self):
        a = []
        result = util.sort(a)
        self.assertEqual(result,[])
        a = [3,1,2]
        result = util.sort(a)
        self.assertEqual(result,[1,2,3])
        a = [0,9,3]
        result = util.sort(a, "cow")
        self.assertEqual(result,[0,9,3])
        a = ['a','z','j']
        result = util.sort(a,"desc")
        self.assertEqual(result,['z','j','a'])
    
    def test_flatten (self):
        # Obj
        o = {
            'a':2
        }

        # List
        a = [1,2,3]
        result = util.flatten(o)
        self.assertEqual(result, "a:2")
        result = util.flatten(a)
        self.assertEqual(result, "0:1, 1:2, 2:3")

        # List of Obj
        b = [o]
        result = util.flatten(b)
        self.assertEqual(result, "0:{a:2}")
        
        # Obj of List
        o = {
            'a':a
        }
        result = util.flatten(o)
        self.assertEqual(result, "a:[0:1, 1:2, 2:3]")
        
        # List of List
        b = [[],[]]
        result = util.flatten(b)
        self.assertEqual(result, "0:[], 1:[]")

        # List of Mixed
        a = {
            'a':2
        }
        b = [ [], {'a':2}, [] ]
        result = util.flatten(b)
        self.assertEqual(result, "0:[], 1:{a:2}, 2:[]")

        # Object of Mixed
        a = {
            'a':1,
            'b':[2],
            'c':{
                'd':[4,5,6]
            }
        }
        
        result = util.flatten(a)
        self.assertEqual(result, "a:1, b:[0:2], c:{d:[0:4, 1:5, 2:6]}")


if __name__ == '__main__':
    unittest.main()