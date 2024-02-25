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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var Vendor_1 = require("./Vendor");
var class_validator_1 = require("class-validator");
var Receiving = /** @class */ (function (_super) {
    __extends(Receiving, _super);
    function Receiving() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Receiving.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.Product; }),
        typeorm_1.JoinColumn({ name: "productId" }),
        __metadata("design:type", Product_1.Product)
    ], Receiving.prototype, "product", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Receiving.prototype, "productId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        typeorm_1.JoinColumn({ name: "vendorId" }),
        __metadata("design:type", Vendor_1.Vendor)
    ], Receiving.prototype, "vendor", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Receiving.prototype, "vendorId", void 0);
    __decorate([
        class_validator_1.IsPositive(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Receiving.prototype, "qty", void 0);
    __decorate([
        class_validator_1.IsPositive(),
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Receiving.prototype, "price", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Receiving.prototype, "payedAt", void 0);
    Receiving = __decorate([
        typeorm_1.Entity()
    ], Receiving);
    return Receiving;
}(Base_1.Base));
exports.Receiving = Receiving;
//# sourceMappingURL=Receiving.js.map