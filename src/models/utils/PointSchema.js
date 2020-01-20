const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    Type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
});
