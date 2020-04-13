"use strict";

let trademe = require('../api/tradeMeApi');

function checkUsedCarsBrandsCount(){
    trademe.usedMotorsSearch().then((response) => {
        const usedMotors = JSON.parse(response); 
        let count = 0;

        for (let i in Object.keys(usedMotors.Subcategories)) {
            if (usedMotors.Subcategories[i].Name !== 'Other'){
                count++;
            }
        }
        return count;
     })
};

module.exports.checkUsedCarsBrandsCount = checkUsedCarsBrandsCount;