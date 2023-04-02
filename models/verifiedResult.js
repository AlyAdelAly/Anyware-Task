const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const verifiedResultrSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    local_format: {
        type: String,
        required: true
    },
    international_format: {
        type: String,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    country_prefix: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    line_type: {
        type: String,
        required: true
    },
    valid: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Result = mongoose.model("verifiedResult", verifiedResultrSchema);

module.exports = { Result };