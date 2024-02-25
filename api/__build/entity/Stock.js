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
var Stock = /** @class */ (function (_super) {
    __extends(Stock, _super);
    function Stock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToOne(function (type) { return Product_1.Product; }),
        typeorm_1.JoinColumn({ name: "id" }),
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Stock.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Stock.prototype, "qty", void 0);
    Stock = __decorate([
        typeorm_1.Entity()
    ], Stock);
    return Stock;
}(Base_1.Base));
exports.Stock = Stock;
//# sourceMappingURL=Stock.js.map