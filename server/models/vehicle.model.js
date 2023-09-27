

const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    vin: {
        type: String,
        required: [true, 'VIN is required.'],
        minLength: [17, 'VIN must be at least 17 characters long.'],
    },
    make: {
        type: String,
        required: [true, 'Make is required.']
        },
    model: {
        type: String,
        required: [true, 'Model is required.']
        },
    year: {
        type: Number,
        required: [true, 'Year is required.']
        },
    color: {
        type: String,
        required: [true, 'Color is required.']
        },
    mileage: {
        type: Number,
        required: [true, 'Mileage is required.'],
        minimum: [1, 'Mileage must be at least 1.'],
    },
    bookedat: {
        type: Number,
        required: [true, 'Booked-in value is required.'],
        minimum: [1, 'Booked-in value must be at least 1.'],
    },
    blackbook: {
        type: Number,
        required: [true, 'Black-book value is required.'],
        minimum: [1, 'Black-book value must be at least 1.'],
    },
    retail: {
        type: Boolean,
        required: [true, 'Is this a Retail or Wholesale unit?'],
    },
    tires: {
        type: Boolean,
        required: [true, 'Does it need tires?'],
    },
    setby: {
        type: String,
        required: [true, 'Desking Manager required.'],
    },
    comments: {
        type: String,
        required: [true, 'Comments are required.'],
        maxLength: [100, 'Comments must be less than 256 characters long.'],
    },
    // TODO: CONVERT OBJECTS TO STRINGS IN THE DATABASE
    mechanical: {
        type: String,
        required: [true, 'You must choose Mechanical condition.']
    },
    appearance: {
        type: String,
        required: [true, 'You must choose Appearance condition.']
    },
    carfax: {
        type: String,
        required: [true, 'Please select applicable CarFax fields.']
    },
    options: {
        type: String,
        required: [true, 'Please select applicable Options.']
    }
});

const Vehicle = mongoose.model('dealer_pro', VehicleSchema);

module.exports = Vehicle;