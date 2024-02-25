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
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var ProductType_1 = require("./ProductType");
var class_validator_1 = require("class-validator");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Product.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        class_validator_1.IsPositive(),
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Product.prototype, "costPrice", void 0);
    __decorate([
        class_validator_1.IsPositive(),
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Product.prototype, "sellingPrice", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ProductType_1.ProductType; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
            cascade: ["insert"]
        }),
        typeorm_1.JoinColumn({ name: "productTypeId" }),
        __metadata("design:type", ProductType_1.ProductType)
    ], Product.prototype, "productType", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "productTypeId", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}(Base_1.Base));
exports.Product = Product;
//# sourceMappingURL=Product.js.map