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
var Customer_1 = require("./Customer");
var CreditTransactionsPointer = /** @class */ (function (_super) {
    __extends(CreditTransactionsPointer, _super);
    function CreditTransactionsPointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToOne(function (type) { return Customer_1.Customer; }, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn({ name: "customerId" }),
        __metadata("design:type", Customer_1.Customer)
    ], CreditTransactionsPointer.prototype, "customer", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], CreditTransactionsPointer.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CreditTransactionsPointer.prototype, "seqPointer", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CreditTransactionsPointer.prototype, "balanceAmount", void 0);
    CreditTransactionsPointer = __decorate([
        typeorm_1.Entity()
    ], CreditTransactionsPointer);
    return CreditTransactionsPointer;
}(Base_1.Base));
exports.CreditTransactionsPointer = CreditTransactionsPointer;
//# sourceMappingURL=CreditTransactionsPointer.js.map