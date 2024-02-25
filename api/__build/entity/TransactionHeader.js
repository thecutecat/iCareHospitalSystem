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
var TransactionDetails_1 = require("./TransactionDetails");
var SalesType;
(function (SalesType) {
    SalesType[SalesType["CreditSale"] = 0] = "CreditSale";
    SalesType[SalesType["CounterSale"] = 1] = "CounterSale";
})(SalesType = exports.SalesType || (exports.SalesType = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["Init"] = 0] = "Init";
    TransactionStatus[TransactionStatus["Pending"] = 1] = "Pending";
    TransactionStatus[TransactionStatus["Done"] = 2] = "Done";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var TransactionHeader = /** @class */ (function (_super) {
    __extends(TransactionHeader, _super);
    function TransactionHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return TransactionDetails_1.TransactionDetails; }, function (datasource) { return datasource.transactionHeader; }, { onUpdate: "CASCADE", onDelete: "RESTRICT" }),
        __metadata("design:type", Array)
    ], TransactionHeader.prototype, "transactionDetails", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "discountOnItems", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "discountOnTotal", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "tax", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], TransactionHeader.prototype, "taxPercentageString", void 0);
    __decorate([
        typeorm_1.Column({ type: "float", default: 0 }),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "billAmount", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "netAmount", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "amountPaid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "salesType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], TransactionHeader.prototype, "transactionStatus", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], TransactionHeader.prototype, "comments", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Customer_1.Customer; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
            nullable: true
        }),
        typeorm_1.JoinColumn({ name: "customerId" }),
        __metadata("design:type", Customer_1.Customer)
    ], TransactionHeader.prototype, "customer", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], TransactionHeader.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], TransactionHeader.prototype, "isActive", void 0);
    TransactionHeader = __decorate([
        typeorm_1.Entity()
    ], TransactionHeader);
    return TransactionHeader;
}(Base_1.Base));
exports.TransactionHeader = TransactionHeader;
//# sourceMappingURL=TransactionHeader.js.map