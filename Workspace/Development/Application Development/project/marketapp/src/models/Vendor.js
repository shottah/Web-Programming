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
exports.__esModule = true;
var User_1 = require("./User");
var Vendor = /** @class */ (function (_super) {
    __extends(Vendor, _super);
    function Vendor(email, password, v_name, o_name, v_type) {
        var _this = _super.call(this, email, password) || this;
        _this.vendor_name = v_name;
        _this.owner_name = o_name;
        _this.vendor_type = [];
        _this.products = [];
        return _this;
    }
    Vendor.prototype.addProduct = function (itemName) {
        var j = Object.keys(this.products).length;
        this.products.splice(j, 0, itemName);
        this.products.sort();
    };
    return Vendor;
}(User_1.User));
exports.Vendor = Vendor;
var v = new Vendor('none', 'none', 'none', 'none', []);
v.addProduct('item1');
v.addProduct('cat2');
console.log(v.products);
