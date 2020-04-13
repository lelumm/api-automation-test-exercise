"use strict";

let trademe = require('../api/trade_me_api');

function validateListedCount(brandName){
    trademe.usedMotorsSearch().then((response) => {
        const usedMotors = JSON.parse(response); 
        const index = usedMotors.Subcategories.findIndex(subCategory => subCategory.Name === brandName);
        const listedCount = usedMotors.Subcategories[index].Count
        if (listedCount === undefined){console.log(`${brandName} listed count : Fail`);}
        else{console.log(`${brandName} listed count : ${listedCount}`);}
     })
}

module.exports.validateListedCount = validateListedCount;
