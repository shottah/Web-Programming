# Return a list of even numbers between 0 and n
def generateEven (n):

    a = []
    if (n > 1):
        for i in range (1, n+1):
            if (i%2==0):
                a.append(i)
    
    return a

# Display number of elements in list or dictionary
def getSize (o):
    return len(o)

# Append an item to the front or back of a list
def addTo (o,v,str):
    j = 0
    if (str == 'back'):
        j = getSize(o)
    elif (str != 'front'):
        return
    
    o.insert(j,v)

# Enqueue an item to the list
def enqueue (o,v):
    addTo (o,v,'back')

# Dequeue an item from the list
def dequeue (o):
    if (getSize(o)>0):
        del o[0]

# Add an item to an object at an index and return the object
def addToObj (o,i,v):
    if (i >= 0 and i <= getSize(o)):
        o.insert(i,v)
    return o

# Sort list in ascending order (must have option for both ways)
def sort(o,str='ascending'):
    if (str=='ascending' or str == 'asc'):
        return sorted(o)
    elif(str!='descending' and str!='desc'):
        return o
    return sorted(o, reverse=True)

# Flatten object literal or list into a string
def flatten (o):
    s = ''

    if (type(o) is dict):
        i = 0
        for key, value in o.items():
            if (type(value) is dict):
                s += key + ':{' + flatten(value) + '}'
            elif (type(value) is list):
                s += key + ':[' + flatten(value) + ']'
            else:
                s += key + ':' + str(value)
            if (i < getSize(o)-1):
                s += ', '
            i += 1
    
    elif (type(o) is list):
        for i in range(0, getSize(o)):
            if (type(o[i]) is dict):
                s += str(i) + ':{' + flatten(o[i]) + '}'
            elif (type(o[i]) is list):
                s += str(i) + ':[' + flatten(o[i]) + ']'
            else:
                s += str(i) + ':' + str(o[i])
            if (i < getSize(o)-1):
                s += ', '

          
    
    return s


# Debug / Print Data
o = generateEven(10)
alpha = ['A', 'AB', 'Z', 'BA', 'C']
d = {
    "n":'1',
    "m":'2',
    "d2": {
        "x":'3.1',
        "y":'3.2',
        "z": {
            "+":"4.1",
            "_":"4.2"
        }
    }
}


print("Original list:")
print(o)
print(getSize(o))
addTo(o,99,'back')
print("Add 99 to list:")
print(o)
enqueue(o,82)
print("Enqueue 82 to list:")
print(o)
dequeue(o)
print("Dequeue an item:")
print(o)
print("Add value to index 5 of object")
print(addToObj(o,5,200))
print("Reverse list:")
print(sort(o,'descending'))
print("Reverse again:")
print(sort(o))
print("Sorting alpha desc:")
print(sort(alpha, "desc"))

print("Flattening a given object literal:")
print(flatten(d))