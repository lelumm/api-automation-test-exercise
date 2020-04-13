"use strict";

var assert = require('assert');
var asserts = require('asserts');

function resultsAssert(actual,expect,msg){
    return new Promise((resolve,reject) => {
        return asserts({
            expectedBrands: function(){
                assert.equal(actual,expect,msg);
            }
        })
    })
    // asserts({
    //     expectedBrands: function(){
    //         assert.equal(actual,expect,msg);
    //     }
    // })
} 

 module.exports.resultsAssert = resultsAssert;