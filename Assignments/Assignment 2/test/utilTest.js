describe('Generate Even', function() {
    var arr = []
    it('Creates an array of even numbers between 1 and 6', function () {
        arr = [2,4,6]
        expect(generateEven(6)).toEqual(arr);
    });

    it ('Creates an array of even numbers between 1 and 0', function () {
        arr = []
        expect(generateEven(1)).toEqual(arr)
    });
})

describe('Get Size', function() {
    var o;
    it('Gets the number of elements in a list [1,2,3]', function () {
        o = [1,2,3]
        expect(getSize(o)).toEqual(3);
    });

    it ('Gets the number of key:value pairs in a dictionary {\'a\':1}', function () {
        o = { 'a':1 }
        expect(getSize(o)).toEqual(1);
    });
})