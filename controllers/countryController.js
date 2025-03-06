const Country = require('../models/country');

exports.create = async (req, res) => {
    try {
        const country = await Country.create({ CountryName: req.body.name  });
        res.status(201).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (country) {
            res.status(200).json(country);
        } else {
            res.status(404).json({ message: 'Country not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await Country.update(req.body, {
            where: { countryid: req.params.id }
        });
        if (updated) {
            const updatedCountry = await Country.findByPk(req.params.id);
            res.status(200).json(updatedCountry);
        } else {
            res.status(404).json({ message: 'Country not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Country.destroy({
            where: { countryid: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Country deleted' });
        } else {
            res.status(404).json({ message: 'Country not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
