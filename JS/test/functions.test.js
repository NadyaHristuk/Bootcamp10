const fun = require('./functions');

// sum
test('adds 2+2 to equal 4', ()=>{
    expect(fun.add(2,2)).toBe(4);
});

test('adds 2+2 to NOT equal 5', ()=>{
    expect(fun.add(2,2)).not.toBe(5);
});

// Null
test('Should be null', () =>{
    expect(fun.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () =>{
    expect(fun.checkFalsy(0)).toBeFalsy();
})

test('Should be falsy', () =>{
    expect(fun.checkFalsy(undefined)).toBeFalsy();
})

// check object
test('Check user name and lastname', () =>{
    expect(fun.createUser()).toEqual({
        firstName: "Tanos",
        lastName: "Torovich"
    });
});

// fetch
test('User fetch', async ()=>{
    // expect.assertions(1);
    const data = await fun.fetchUser();
    expect(data).toEqual(155);
});



