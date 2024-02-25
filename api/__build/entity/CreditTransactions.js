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
var class_validator_1 = require("class-validator");
var TransactionHeader_1 = require("./TransactionHeader");
var CreditTransactionsType;
(function (CreditTransactionsType) {
    CreditTransactionsType[CreditTransactionsType["Sale"] = 0] = "Sale";
    CreditTransactionsType[CreditTransactionsType["Payment"] = 1] = "Payment";
    CreditTransactionsType[CreditTransactionsType["SaleRevertPayment"] = 2] = "SaleRevertPayment";
})(CreditTransactionsType = exports.CreditTransactionsType || (exports.CreditTransactionsType = {}));
var CreditTransactions = /** @class */ (function (_super) {
    __extends(CreditTransactions, _super);
    function CreditTransactions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Customer_1.Customer; }, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn({ name: "customerId" }),
        __metadata("design:type", Customer_1.Customer)
    ], CreditTransactions.prototype, "customer", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        typeorm_1.Index(),
        __metadata("design:type", String)
    ], CreditTransactions.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TransactionHeader_1.TransactionHeader; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
            nullable: true
        }),
        typeorm_1.JoinColumn({ name: "transactionId" }),
        typeorm_1.Index(),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "transactionId", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.Min(0),
        typeorm_1.Column({ type: "float", nullable: true }),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "billAmount", void 0);
    __decorate([
        class_validator_1.IsPositive(),
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "amountPaid", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "balance", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "totalDebt", void 0);
    __decorate([
        class_validator_1.IsEnum(CreditTransactionsType),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CreditTransactions.prototype, "type", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], CreditTransactions.prototype, "paidDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], CreditTransactions.prototype, "isReverted", void 0);
    CreditTransactions = __decorate([
        typeorm_1.Entity()
    ], CreditTransactions);
    return CreditTransactions;
}(Base_1.Base));
exports.CreditTransactions = CreditTransactions;
//# sourceMappingURL=CreditTransactions.js.map