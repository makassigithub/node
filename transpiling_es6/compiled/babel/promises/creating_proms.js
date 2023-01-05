"use strict";

function doWork(work) {
    return new Promise(function (resolve, reject) {
        var data = "go to" + work + ' and ';
        resolve(data);
    });
}

function getMoney(data) {
    return new Promise(function (resolve, reject) {
        resolve(data + " send the money to a bank");
    });
}

function manageLive(data) {
    return new Promise(function (resolve, reject) {
        resolve(data + " live is ok");
    });
}

doWork("r3d").then(function (result1) {
    return getMoney(result1);
}).then(function (result2) {
    return manageLive(result2);
}).then(function (final) {
    console.log(final);
});