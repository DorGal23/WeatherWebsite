const autofill = require("./autofill");


test("one element array", ()=>{
    var city=["London"];
    expect(autofill("L", city)[0]).toBe("<strong>L</strong>ondon<input type='hidden' value='London'>");
});
test("two element array", ()=>{
    var city2=["London", "Lisbon"];
    var toRet = autofill("L", city2);
    expect(toRet[0]).toBe("<strong>L</strong>ondon<input type='hidden' value='London'>");
    expect(toRet[1]).toBe("<strong>L</strong>isbon<input type='hidden' value='Lisbon'>");
    var toRet = autofill("Li", city2);
    expect(toRet[0]).toBe("<strong>Li</strong>sbon<input type='hidden' value='Lisbon'>");
    expect(toRet[1]).toBeUndefined();
});
test("display max 10 elements", ()=>{
    var city3=["London", "Lisbon", "Lima", "Lagos", "Los Angeles", "Luanda", "Liverpool", "La Paz", "Las Vegas", "Lyon", "Lusaka"]
    var toRet = autofill("L", city3);
    expect(toRet.length).toBe(10);
    for(i=0;i<10;i++){
        expect(toRet[i]).toBe(`<strong>L</strong>${city3[i].substr(1)}<input type='hidden' value='${city3[i]}'>`);
    }
})
