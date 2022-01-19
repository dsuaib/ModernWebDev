let someObject = new Object();
someObject.name = 'Les Claypool';
someObject.instrument = 'Bass';

let aMusician = {
    name: someObject.name,
    instrument: 'Bass',
    bands: ['Primus', 'Oysterhead'],
    "side project": "wine making"
};

console.log(aMusician.name + ' plays ' +
    aMusician.instrument + ' in ' + aMusician.bands[1]);

console.log("project:", aMusician["side project"]);


