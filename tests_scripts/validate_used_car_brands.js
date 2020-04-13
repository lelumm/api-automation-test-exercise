"use strict";

const trademe = require('../api/trade_me_api');

function validateUsedCarBrands(){
    trademe.usedMotorsSearch().then((response) => {
        const usedMotors = JSON.parse(response); 
        const count = usedMotors.Subcategories.filter(subcategory => subcategory.Name !== 'Other').length
        console.log(`Total named brands count : ${count}`);
     })
};

module.exports.validateUsedCarBrands = validateUsedCarBrands;
