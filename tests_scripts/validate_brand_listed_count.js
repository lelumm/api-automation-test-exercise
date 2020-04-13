"use strict";

const trademe = require('../api/trade_me_api');

function validateListedCount(brandName){
    trademe.usedMotorsSearch().then((response) => {
        const usedMotors = JSON.parse(response); 
        const count = usedMotors.Subcategories.find(subCategory => subCategory.Name === brandName).Count;
        if (count === undefined){console.log(`${brandName} listed count : 0`);}
        else{console.log(`${brandName} listed count : ${count}`);}
     })
}

module.exports.validateListedCount = validateListedCount;
