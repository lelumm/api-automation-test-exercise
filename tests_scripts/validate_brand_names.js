"use strict";

let trademe = require('../api/tradeMeApi');

function validateBrandNames(brandName){
    trademe.usedMotorsSearch().then((response) => {
        const usedMotors = JSON.parse(response); 
        const brandFound = usedMotors.Subcategories.some(subCategory => subCategory.Name === brandName);
        console.log(`Is ${brandName} Brand exists :` + brandFound);
     })
}

module.exports.validateBrandNames = validateBrandNames;