
const Vehicle = require('./models/vehicle');

//Create a Vehicle
const createVehicle = (req, res) => {
    Vehicle.create(req.body)
        .then(newVehicle => { res.json(newVehicle) })
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
};

//Retrieve all Vehicles from the database.
const getVehicles = (req, res) => {
    Vehicle.find()
        .then(vehicles => { res.json(vehicles); })
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
};

//Retrieve a single Vehicle with an id
const getVehicle = (req, res) => {
    Vehicle.findById(req.params.id)
        .then(vehicle => {
            if (!vehicle) {
                res.status(404).json({
                    message: "Vehicle not found with id " + req.params.id
                });
            }
            res.json(vehicle);
        })
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
};

//Update a Vehicle with an id
const updateVehicle = (req, res) => {
    const { id } = req.params;
    const {
        vin,
        make,
        model,
        year,
        color,
        mileage,
        bookedat,
        blackbook,
        retail,
        tires,
        setby,
        comments,
        mechanical,
        appearance,
        carfax,
        options
    } = req.body;

    const errors = {};
    if (!vin || vin.length < 17) {
        errors.vin = "VIN is required.";
    }
    if (!make || make.length < 1) {
        errors.make = "Make is required.";
    }
    if (!model || model.length < 1) {
        errors.model = "Model is required.";
    }
    if (!year || year.length < 4) {
        errors.year = "Year is required.";
    }
    if (!color || color.length < 3) {
        errors.color = "Color is required.";
    }
    if (!mileage || mileage.length < 1) {
        errors.mileage = "Mileage is required.";
    }
    if (!bookedat || bookedat.length < 1) {
        errors.bookedat = "Booked-in value is required.";
    }
    if (!blackbook || blackbook.length < 1) {
        errors.blackbook = "Blackbook value is required.";
    }
    //TODO: CHECK THESE VALIDATIONS
    if (retail == null) {
        errors.retail = "Retail disposition is required.";
    }
    //TODO: CHECK THESE VALIDATIONS
    if (tires == null) {
        errors.tires = "Does vehicle need tires?";
    }
    if (!setby || setby.length < 1) {
        errors.setby = "Desking Manager required.";
    }
    if (!comments || comments.length < 1 || comments.length > 255) {
        errors.comments = "Comments are required.";
    }
    //TODO: CHECK THESE VALIDATIONS
    if (!mechanical) {
        errors.mechanical = "Mechanical condition is required.";
    }
    //TODO: CHECK THESE VALIDATIONS
    if (!appearance) {
        errors.appearance = "Appearance condition is required.";
    }
    //TODO: CHECK THESE VALIDATIONS
    if (!carfax) {
        errors.carfax = "Carfax fields required.";
    }
    //TODO: CHECK THESE VALIDATIONS
    if (!options) {
        errors.options = "Options are required.";
    }
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    Vehicle.findByIdAndUpdate(id, {
        vin,
        make,
        model,
        year,
        color,
        mileage,
        bookedat,
        blackbook,
        retail,
        tires,
        setby,
        comments,
        mechanical,
        appearance,
        carfax,
        options
    }, { new: true })
        .then((vehicle) => {
            if (!vehicle) {
                res.status(404).json({
                    message: "Vehicle not found with id " + id
                });
            }
            res.json(vehicle);
        })
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
};

//Delete a Vehicle with an id
const deleteVehicle = (req, res) => {
    const { id } = req.params.id;

    Vehicle.findByIdAndRemove(id)
        .then(vehicle => {
            if (!vehicle) {
                res.status(404).json({
                    message: "Vehicle not found with id " + id
                });
            }
            res.json({ message: "Vehicle deleted successfully!" });
        })
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
};

module.exports = {
    createVehicle,
    getVehicles,
    getVehicle,
    updateVehicle,
    deleteVehicle
};

//Create and Save a Vehicle

// exports.create = (req, res) => {
//     //Validate request
//     if(!req.body.make ||
//         !req.body.model ||
//         !req.body.year ||
//         !req.body.color ||
//         !req.body.mileage ||
//         !req.body.bookedat ||
//         !req.body.blackbook ||
//         !req.body.retail ||
//         !req.body.tires ||
//         !req.body.setby ||
//         !req.body.comments ||
//         !req.body.mechanical ||
//         !req.body.appearance ||
//         !req.body.carfax ||
//         !req.body.options) {
//         res.status(400).send({
//             message: "Please complete all fields."
//         });
//         return;
//     }

// //Create a Vehicle
// const createVehicle = new Vehicle({
//     make: req.body.make,
//     model: req.body.model,
//     year: req.body.year,
//     color: req.body.color,
//     mileage: req.body.mileage,
//     bookedat: req.body.bookedat,
//     blackbook: req.body.blackbook,
//     retail: req.body.retail,
//     tires: req.body.tires,
//     setby: req.body.setby,
//     comments: req.body.comments,
//     mechanical: req.body.mechanical,
//     appearance: req.body.appearance,
//     carfax: req.body.carfax,
//     options: req.body.options
// });

//Save Vehicle in the database
//     vehicle.save()
//        .then(data => {
//             res.send(data);
//         })
//        .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Vehicle."
//             });
//         });
// };