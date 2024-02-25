"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SalesService_1 = require("../../services/SalesService");
var routing_controllers_1 = require("routing-controllers");
var CurrentUser_1 = require("../../decorators/CurrentUser");
var TransactionDetails_1 = require("../../entity/TransactionDetails");
var sale_1 = require("../../dtos/sale");
var INVALID_TRANSACTIONID = {
    code: "INVALID_TRANSACTIONID",
    message: "invalid transaction id is sent"
};
var Sale = /** @class */ (function () {
    function Sale(salesService) {
        this.salesService = salesService;
    }
    Sale.prototype.initTransaction = function (userid) {
        return this.salesService.initTransaction(userid);
    };
    Sale.prototype.openTransaction = function (userid, transactionId) {
        if (!transactionId) {
            throw INVALID_TRANSACTIONID;
        }
        return this.salesService.openTransaction(userid, transactionId);
    };
    Sale.prototype.addToCart = function (transactionId, transactionDetails, userid) {
        if (!transactionId) {
            throw INVALID_TRANSACTIONID;
        }
        transactionDetails.id = transactionId;
        return this.salesService.updateCart(transactionDetails, userid);
    };
    Sale.prototype.removeItemFromCart = function (transactionId, productId) {
        return this.salesService.removeItemFromCart(transactionId, productId);
    };
    Sale.prototype.checkoutCounterSale = function (transactionId, userid, saleDetails) {
        if (!transactionId) {
            throw INVALID_TRANSACTIONID;
        }
        saleDetails.transactionId = transactionId;
        return this.salesService.checkoutSale(userid, saleDetails);
    };
    Sale.prototype.checkoutCreditSale = function (transactionId, userid, saleDetails) {
        if (!transactionId) {
            throw INVALID_TRANSACTIONID;
        }
        saleDetails.transactionId = transactionId;
        return this.salesService.checkoutSale(userid, saleDetails, true);
    };
    __decorate([
        routing_controllers_1.Get("/initTransaction"),
        __param(0, CurrentUser_1.CurrentUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Sale.prototype, "initTransaction", null);
    __decorate([
        routing_controllers_1.Get("/openTransaction/:transactionId"),
        __param(0, CurrentUser_1.CurrentUser()),
        __param(1, routing_controllers_1.Param("transactionId")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], Sale.prototype, "openTransaction", null);
    __decorate([
        routing_controllers_1.Post("/:transactionId/updateCart"),
        __param(0, routing_controllers_1.Param("transactionId")),
        __param(1, routing_controllers_1.Body()),
        __param(2, CurrentUser_1.CurrentUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, TransactionDetails_1.TransactionDetails, String]),
        __metadata("design:returntype", Promise)
    ], Sale.prototype, "addToCart", null);
    __decorate([
        routing_controllers_1.Delete("/:transactionId/:productId"),
        __param(0, routing_controllers_1.Param("transactionId")),
        __param(1, routing_controllers_1.Param("productId")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], Sale.prototype, "removeItemFromCart", null);
    __decorate([
        routing_controllers_1.Post("/:transactionId/checkoutCounterSale"),
        __param(0, routing_controllers_1.Param("transactionId")),
        __param(1, CurrentUser_1.CurrentUser()),
        __param(2, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, sale_1.CheckoutSale]),
        __metadata("design:returntype", void 0)
    ], Sale.prototype, "checkoutCounterSale", null);
    __decorate([
        routing_controllers_1.Post("/:transactionId/checkoutCreditSale"),
        __param(0, routing_controllers_1.Param("transactionId")),
        __param(1, CurrentUser_1.CurrentUser()),
        __param(2, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, sale_1.CheckoutSale]),
        __metadata("design:returntype", void 0)
    ], Sale.prototype, "checkoutCreditSale", null);
    Sale = __decorate([
        routing_controllers_1.JsonController("/sales"),
        routing_controllers_1.Authorized(),
        __metadata("design:paramtypes", [SalesService_1.SalesService])
    ], Sale);
    return Sale;
}());
exports.Sale = Sale;
//# sourceMappingURL=SaleController.js.map