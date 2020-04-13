"use strict";

const trademe = require('../api/trade_me_api');

function validateUsedCarBrands(){
    trademe.usedMotorsSearch().then((response) => {
        const usedMotors = JSON.parse(response); 
        let count = 0;
        for (let i in Object.keys(usedMotors.Subcategories)) {
            if (usedMotors.Subcategories[i].Name !== 'Other'){
                count++;
            }
        }
        console.log(`Total named brands count : ${count}`);
     })
};

module.exports.validateUsedCarBrands = validateUsedCarBrands;
