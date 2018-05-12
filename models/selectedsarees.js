var mongoose = require('mongoose');

var selectedSareeSchema = mongoose.Schema({
    id: String,
    qty: Number
});

var SelectedSarees = mongoose.model('SelectedSarees', selectedSareeSchema);

module.exports = SelectedSarees;