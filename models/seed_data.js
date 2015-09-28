var seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost/animal-shelter', function() {
    seeder.loadModels([
        './models/animals.js'
    ]);
    // Clear
    seeder.clearModels(['Animal'], function() {
        seeder.populateModels(data);
    });
});

var data = [
    { 
        'model': 'Animal',
        'documents': [
            { 'name': 'Saffron', 'breed': 'Lab'},
            { 'name': 'Catty', 'breed': 'Stripey'}
            { 'name': 'Doggy', 'breed': 'pooch'}
            { 'name': 'Adoptme', 'breed': 'Stray'}
        ]
    }
];  