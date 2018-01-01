"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var MyBase = (function (_super) {
    __extends(MyBase, _super);
    function MyBase() {
        var _this = _super.call(this) || this;
        _this.url = "mongodb://localhost:27017/BagnoDB";
        MyBase.connect(_this.url).then(function (client) {
            console.log('Db is created');
            client.close();
        }).catch(function (err) {
            console.log('something is not ok', err.name);
        });
        return _this;
    }
    MyBase.prototype.createCollection = function (name) {
        MyBase.connect(this.url).then(function (client) {
            var db = client.db('BagnoDB');
            db.createCollection(name).then(function (value) {
                console.log(value.collectionName);
                client.close().catch(function (err) { console.log(err); });
            }).catch(function (err) { console.log(err); });
        }).catch(function (err) { console.log(err); });
    };
    ;
    MyBase.prototype.vv = function () {
        return MyBase.connect(this.url).then(function (client) {
            return new Promise(function (resolve) {
                resolve(client.db('BagnoDB'));
            });
        });
    };
    Object.defineProperty(MyBase.prototype, "pp", {
        get: function () {
            return MyBase.connect(this.url).then(function (client) {
                return new Promise(function (resolve) {
                    resolve({ baza: client.db('BagnoDB'), close: client.close() });
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    return MyBase;
}(mongodb_1.MongoClient));
var biko = new MyBase();
biko.createCollection('pampers');
biko.pp.then(function (db) {
    db.collection('pampers').insertOne({ name: 'valdek' }).catch(function (err) { console.log(err); });
});
function omin() {
    mongodb_1.MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        if (err)
            throw err;
        console.log("Connected successfully to server");
        var db = client.db('Thunder');
        db.createCollection('Hounds')
            .then(function (value) {
            db.collection('Hounds')
                .insertOne({ name: 'Robo', age: 20 })
                .catch(function (err) {
                console.log(err);
            });
            client.close();
        })
            .catch(function (error) {
            console.log(error);
        });
    });
    mongodb_1.MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db('Thunder');
        db.collection('Hounds')
            .findOne({ name: 'Robo' })
            .then(function (value) {
            console.log(value.age);
            client.close();
        }).catch(function (err) {
            console.log('You got an error', err.name);
        });
    });
    mongodb_1.MongoClient.connect("mongodb://localhost:27017")
        .then(function (client) {
        var db = client.db('Thunder');
        db.collection('Hounds')
            .updateOne({ name: 'Robo' }, { $set: { name: 'Kot' } }, { upsert: true })
            .then(function (check) {
            client.close();
            console.log('Update confirm');
        }).catch(function (err) {
            console.log(err);
        });
    }).catch(function (err) {
        console.log(err);
    });
}
omin();
