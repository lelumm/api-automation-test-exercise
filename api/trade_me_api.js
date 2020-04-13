"use strict";

const request = require('request-promise');
const env = require('../config/env');


function usedMotorsSearch(){
    return new Promise((resolve,reject) => {
        return request
            .get(`${env.ENV_URL.sandBox}v1/Categories/UsedCars.json`)
            .then((searchResponse) => {
                resolve(searchResponse);
            })
            .catch(console.log);
    })
};

module.exports.usedMotorsSearch = usedMotorsSearch;

