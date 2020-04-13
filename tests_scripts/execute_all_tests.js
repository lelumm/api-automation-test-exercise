"use strict";

const excuteTestBrandCount = require('./validate_used_car_brands');
const excuteTestBarandName = require('./validate_brand_names');
const excuteBrandListedCount = require('./validate_brand_listed_count');

function executeAllTests(){
    console.log(`---------- Execute All Tests Exercise ----------`);
    excuteTestBrandCount.validateUsedCarBrands();
    excuteTestBarandName.validateBrandNames('Kia');
    excuteBrandListedCount.validateListedCount('Kia');
    excuteTestBarandName.validateBrandNames('Hispano Suiza');
}

executeAllTests();
