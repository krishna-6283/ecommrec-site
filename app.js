const express = require('express');
const sequelize = require('./config/database'); 
const countryRoutes = require('./routes/countryRoutes');
const country_state_router = require('./routes/Country_StateRoutes');
const state_router=require('./routes/StateRoutes');
const app = express();
app.use(express.json()); 
app.use('/api/states', state_router);
app.use('/api/countries', countryRoutes);
app.use('/api/country-states', country_state_router);
const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log('Error syncing database: ', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});