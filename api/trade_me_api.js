"use strict";

const request = require('request-promise');
const env = require('../config/env');


function usedMotorsSearch(){
    return request.get(`${env.ENV_URL.sandBox}/v1/Categories/UsedCars.json`)
    .catch(console.error);
};

module.exports.usedMotorsSearch = usedMotorsSearch;
