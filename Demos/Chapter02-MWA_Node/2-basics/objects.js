let someObject = new Object();
someObject.name = 'Les Claypool';
let aMusician = {
    name: someObject.name,
    instrument: 'Bass',
    bands: ['Primus','Oysterhead']
}

console.log(aMusician);

console.log(aMusician.name + ' plays ' + 
        aMusician.instrument + ' in ' + aMusician.bands[1]);


        