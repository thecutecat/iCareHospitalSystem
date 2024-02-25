"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var currency = require("currency.js");
var typeorm_1 = require("typeorm");
var TransactionId_1 = require("../entity/TransactionId");
var TransactionDetails_1 = require("../entity/TransactionDetails");
var Product_1 = require("../entity/Product");
var Customer_1 = require("../entity/Customer");
var CreditTransactionsPointer_1 = require("../entity/CreditTransactionsPointer");
var CreditTransactions_1 = require("../entity/CreditTransactions");
var TransactionHeader_1 = require("../entity/TransactionHeader");
var Messages = require("./messages");
var SalesService = /** @class */ (function () {
    function SalesService() {
    }
    SalesService.prototype.initTransaction = function (userId) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            var returnId, id, connection, queryRunner, count, transactionId, transactionId, transactionHeader, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnId = null;
                        id = this.getIdPrefix();
                        connection = typeorm_1.getConnection();
                        queryRunner = connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        // New transaction:
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        // New transaction:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 12, , 14]);
                        return [4 /*yield*/, queryRunner.manager.count(TransactionId_1.TransactionId, { id: id })];
                    case 4:
                        count = _a.sent();
                        if (!(count > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, queryRunner.manager.increment(TransactionId_1.TransactionId, { id: id }, "count", 1)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.findOne(TransactionId_1.TransactionId, id)];
                    case 6:
                        transactionId = _a.sent();
                        returnId = Number("" + transactionId.id + transactionId.count);
                        return [3 /*break*/, 9];
                    case 7:
                        transactionId = this.getNewTransactionId(userId);
                        return [4 /*yield*/, queryRunner.manager.insert(TransactionId_1.TransactionId, transactionId)];
                    case 8:
                        _a.sent();
                        returnId = Number(id + "1");
                        _a.label = 9;
                    case 9:
                        transactionHeader = this.getnewTransHeader(returnId, userId);
                        return [4 /*yield*/, queryRunner.manager.insert(TransactionHeader_1.TransactionHeader, transactionHeader)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/, returnId];
                    case 12:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 13:
                        _a.sent();
                        throw error_1;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    SalesService.prototype.openTransaction = function (userId, transactionId) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            var transactionHeader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchFinishedTransactionHeader(transactionId)];
                    case 1:
                        transactionHeader = _a.sent();
                        if (!transactionHeader) {
                            throw Messages.TRANSACTION_ID_NOT_FOUND;
                        }
                        transactionHeader.transactionStatus = TransactionHeader_1.TransactionStatus.Pending;
                        transactionHeader.updatedBy = userId;
                        return [4 /*yield*/, typeorm_1.getManager().save(transactionHeader)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, transactionId];
                }
            });
        });
    };
    SalesService.prototype.updateCart = function (cartItem, userId) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            var transactionHeader, product, isValidPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchInProcessTransactionHeader(cartItem.id)];
                    case 1:
                        transactionHeader = _a.sent();
                        if (!transactionHeader) {
                            throw Messages.TRANSACTION_ID_NOT_FOUND;
                        }
                        return [4 /*yield*/, typeorm_1.getManager().findOne(Product_1.Product, {
                                id: cartItem.productId
                            })];
                    case 2:
                        product = _a.sent();
                        isValidPrice = currency(product.sellingPrice)
                            .multiply(cartItem.qty)
                            .subtract(cartItem.discount).value === cartItem.price;
                        if (isValidPrice === false) {
                            throw Messages.INVALID_PRICE;
                        }
                        cartItem.sellingPrice = currency(product.sellingPrice).multiply(cartItem.qty).value;
                        cartItem.costPrice = currency(product.costPrice).multiply(cartItem.qty).value;
                        cartItem.createdBy = userId;
                        cartItem.updatedBy = userId;
                        return [4 /*yield*/, typeorm_1.getManager().save(cartItem)];
                    case 3:
                        _a.sent();
                        transactionHeader.transactionStatus = TransactionHeader_1.TransactionStatus.Pending;
                        return [4 /*yield*/, typeorm_1.getManager().save(transactionHeader)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Messages.ADDED_TO_CART];
                }
            });
        });
    };
    SalesService.prototype.removeItemFromCart = function (id, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionHeader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transactionHeader = this.fetchInProcessTransactionHeader(id);
                        if (!transactionHeader) {
                            throw Messages.TRANSACTION_ID_NOT_FOUND;
                        }
                        return [4 /*yield*/, typeorm_1.getManager().delete(TransactionDetails_1.TransactionDetails, {
                                id: id,
                                productId: productId
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesService.prototype.emptyCart = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionHeader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchInProcessTransactionHeader(transactionId)];
                    case 1:
                        transactionHeader = _a.sent();
                        if (!transactionHeader) {
                            throw Messages.TRANSACTION_ID_NOT_FOUND;
                        }
                        return [4 /*yield*/, typeorm_1.getManager()
                                .createQueryBuilder()
                                .delete()
                                .from(TransactionDetails_1.TransactionDetails)
                                .where("id = :id", { id: transactionId })
                                .execute()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Messages.CART_EMPTIED];
                }
            });
        });
    };
    SalesService.prototype.deleteSale = function (userId, saleDetails) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            var transactionHeader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchFinishedTransactionHeader(saleDetails.transactionId)];
                    case 1:
                        transactionHeader = _a.sent();
                        if (!transactionHeader) {
                            throw Messages.TRANSACTION_ID_NOT_FOUND;
                        }
                        if (!(transactionHeader.salesType === TransactionHeader_1.SalesType.CounterSale)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.deleteCounterSale(saleDetails.transactionId)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.deleteCreditSale(userId, saleDetails)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesService.prototype.checkoutSale = function (userId, saleDetails, isCreditSale) {
        if (userId === void 0) { userId = "admin"; }
        if (isCreditSale === void 0) { isCreditSale = false; }
        return __awaiter(this, void 0, void 0, function () {
            var connection, queryRunner, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connection = typeorm_1.getConnection();
                        queryRunner = connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        // New transaction:
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        // New transaction:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 8, , 9]);
                        if (!(isCreditSale === true)) return [3 /*break*/, 5];
                        saleDetails.saleType = TransactionHeader_1.SalesType.CreditSale;
                        return [4 /*yield*/, this.saveCreditSale(queryRunner.manager, userId, saleDetails)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        saleDetails.saleType = TransactionHeader_1.SalesType.CounterSale;
                        return [4 /*yield*/, this.saveSale(queryRunner.manager, userId, saleDetails)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        queryRunner.commitTransaction();
                        return [2 /*return*/, Messages.SALE_COMPLETED_SUCCESS];
                    case 8:
                        error_2 = _a.sent();
                        queryRunner.rollbackTransaction();
                        throw error_2;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SalesService.prototype.deleteCreditSale = function (userId, saleDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionId, amountPaid, customerId, transactionHeader, connection, queryRunner, previousTransaction, pointer, current, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transactionId = saleDetails.transactionId, amountPaid = saleDetails.amountPaid, customerId = saleDetails.customerId;
                        return [4 /*yield*/, this.fetchFinishedTransactionHeader(transactionId)];
                    case 1:
                        transactionHeader = _a.sent();
                        connection = typeorm_1.getConnection();
                        queryRunner = connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 2:
                        _a.sent();
                        // New transaction:
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 3:
                        // New transaction:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 12, , 13]);
                        return [4 /*yield*/, queryRunner.manager.findOne(CreditTransactions_1.CreditTransactions, {
                                customerId: customerId,
                                transactionId: transactionId,
                                isReverted: false
                            })];
                    case 5:
                        previousTransaction = _a.sent();
                        return [4 /*yield*/, queryRunner.manager.findOne(CreditTransactionsPointer_1.CreditTransactionsPointer, { customerId: customerId })];
                    case 6:
                        pointer = _a.sent();
                        if (!previousTransaction || !pointer) {
                            throw Messages.NO_DATA_FOUND;
                        }
                        // To cross verify the pointer table has the latest update on customer.
                        return [4 /*yield*/, this.verifyTheBalanceIsLatest(queryRunner.manager, pointer)];
                    case 7:
                        // To cross verify the pointer table has the latest update on customer.
                        _a.sent();
                        current = new CreditTransactions_1.CreditTransactions();
                        current.customerId = saleDetails.customerId;
                        current.amountPaid = previousTransaction.billAmount;
                        current.balance = 0;
                        current.billAmount = previousTransaction.billAmount;
                        current.transactionId = previousTransaction.transactionId;
                        current.totalDebt = currency(pointer.balanceAmount)
                            .subtract(currency(previousTransaction.billAmount))
                            .add(amountPaid).value;
                        current.isReverted = false;
                        current.paidDate = new Date();
                        current.type = CreditTransactions_1.CreditTransactionsType.SaleRevertPayment;
                        current.createdBy = userId;
                        current.updatedBy = userId;
                        return [4 /*yield*/, queryRunner.manager.save(current)];
                    case 8:
                        res = _a.sent();
                        //==========================
                        // CreditTransactionsPointer
                        //==========================
                        pointer.seqPointer = res.id;
                        pointer.updatedBy = userId;
                        pointer.balanceAmount = current.totalDebt;
                        return [4 /*yield*/, queryRunner.manager.save(pointer)];
                    case 9:
                        _a.sent();
                        //===========================
                        // Previous CreditTransaction
                        //===========================
                        previousTransaction.isReverted = true;
                        previousTransaction.updatedBy = userId;
                        return [4 /*yield*/, queryRunner.manager.save(previousTransaction)];
                    case 10:
                        _a.sent();
                        //==========================
                        // TransactionHeader
                        //==========================
                        transactionHeader.isActive = false;
                        return [4 /*yield*/, queryRunner.manager.save(transactionHeader)];
                    case 11:
                        _a.sent();
                        queryRunner.commitTransaction();
                        return [2 /*return*/, Messages.SALE_DELETED];
                    case 12:
                        error_3 = _a.sent();
                        queryRunner.rollbackTransaction();
                        throw error_3;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    SalesService.prototype.deleteCounterSale = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getManager()
                            .createQueryBuilder()
                            .delete()
                            .from(TransactionDetails_1.TransactionDetails)
                            .where("id = :id", { id: id })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Messages.SALE_DELETED];
                }
            });
        });
    };
    SalesService.prototype.saveCreditSale = function (manager, userId, saleDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var count, _a, billAmount, amountPaid, currentBalance, currentTransaction, previousTransaction, pointer, previousBalance, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, manager.count(Customer_1.Customer, { id: saleDetails.customerId })];
                    case 1:
                        count = _b.sent();
                        if (count !== 1) {
                            throw Messages.INVALID_CUSTOMER;
                        }
                        return [4 /*yield*/, this.saveSale(manager, userId, saleDetails)];
                    case 2:
                        _a = _b.sent(), billAmount = _a.billAmount, amountPaid = _a.amountPaid;
                        currentBalance = currency(billAmount).subtract(amountPaid).value;
                        currentTransaction = new CreditTransactions_1.CreditTransactions();
                        currentTransaction.customerId = saleDetails.customerId;
                        currentTransaction.amountPaid = amountPaid;
                        currentTransaction.billAmount = billAmount;
                        currentTransaction.isReverted = false;
                        currentTransaction.type = CreditTransactions_1.CreditTransactionsType.Sale;
                        currentTransaction.paidDate = new Date();
                        currentTransaction.createdBy = userId;
                        currentTransaction.updatedBy = userId;
                        currentTransaction.transactionId = saleDetails.transactionId;
                        currentTransaction.balance = currentBalance;
                        return [4 /*yield*/, manager.findOne(CreditTransactions_1.CreditTransactions, {
                                customerId: saleDetails.customerId,
                                transactionId: saleDetails.transactionId,
                                isReverted: false
                            })];
                    case 3:
                        previousTransaction = _b.sent();
                        return [4 /*yield*/, manager.findOne(CreditTransactionsPointer_1.CreditTransactionsPointer, {
                                customerId: saleDetails.customerId
                            })];
                    case 4:
                        pointer = _b.sent();
                        // To cross verify the pointer table has the latest update on customer.
                        return [4 /*yield*/, this.verifyTheBalanceIsLatest(manager, pointer)];
                    case 5:
                        // To cross verify the pointer table has the latest update on customer.
                        _b.sent();
                        // CASE :
                        // No previous credit transaction and new sale entry.
                        if (!pointer && !previousTransaction) {
                            currentTransaction.totalDebt = currentBalance;
                        }
                        // CASE :
                        // Has previous credit transaction and new sale entry.
                        if (pointer && !previousTransaction) {
                            currentTransaction.totalDebt = currentBalance + pointer.balanceAmount;
                        }
                        if (!(pointer && previousTransaction)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.revertThePreviousCreditTransaction(manager, previousTransaction, pointer.balanceAmount, userId)];
                    case 6:
                        previousBalance = _b.sent();
                        currentTransaction.totalDebt = currentBalance + previousBalance;
                        previousTransaction.isReverted = true;
                        // Reverting the old transaction.
                        return [4 /*yield*/, manager.save(CreditTransactions_1.CreditTransactions, previousTransaction)];
                    case 7:
                        // Reverting the old transaction.
                        _b.sent();
                        _b.label = 8;
                    case 8: return [4 /*yield*/, manager.save(CreditTransactions_1.CreditTransactions, currentTransaction)];
                    case 9:
                        res = _b.sent();
                        if (!pointer) {
                            pointer = new CreditTransactionsPointer_1.CreditTransactionsPointer();
                            pointer.createdBy = userId;
                            pointer.customerId = saleDetails.customerId;
                        }
                        pointer.balanceAmount = currentTransaction.totalDebt;
                        pointer.seqPointer = res.id;
                        pointer.updatedBy = userId;
                        return [4 /*yield*/, manager.save(CreditTransactionsPointer_1.CreditTransactionsPointer, pointer)];
                    case 10:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesService.prototype.revertThePreviousCreditTransaction = function (manager, previousCreditTransaction, currentDebt, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var ct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ct = new CreditTransactions_1.CreditTransactions();
                        ct.customerId = previousCreditTransaction.customerId;
                        ct.amountPaid = currency(previousCreditTransaction.billAmount).subtract(previousCreditTransaction.amountPaid).value;
                        ct.balance = 0;
                        ct.totalDebt = currency(currentDebt).subtract(ct.amountPaid).value;
                        ct.createdBy = userId;
                        ct.updatedBy = userId;
                        ct.isReverted = true;
                        ct.type = CreditTransactions_1.CreditTransactionsType.SaleRevertPayment;
                        ct.paidDate = new Date();
                        return [4 /*yield*/, manager.save(CreditTransactions_1.CreditTransactions, ct)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, ct.totalDebt];
                }
            });
        });
    };
    // This is to check the pointer table has the latest. Currently we are throwing exception.
    // TODO : Instead exception handle it.
    SalesService.prototype.verifyTheBalanceIsLatest = function (manager, pointer) {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!pointer) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, manager
                                .createQueryBuilder(CreditTransactions_1.CreditTransactions, "ct")
                                .where("ct.id >= :id", { id: pointer.seqPointer })
                                .getCount()];
                    case 1:
                        count = _a.sent();
                        if (count !== 1) {
                            throw Messages.BALANCE_MISMATCH;
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SalesService.prototype.saveSale = function (manager, userId, saleDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionHeader, _a, totalPrice, totalDiscount, netTotalPrice;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetchInProcessTransactionHeader(saleDetails.transactionId)];
                    case 1:
                        transactionHeader = _b.sent();
                        if (!transactionHeader) {
                            throw Messages.TRANSACTION_ID_NOT_FOUND;
                        }
                        return [4 /*yield*/, manager
                                .createQueryBuilder(TransactionDetails_1.TransactionDetails, "td")
                                .select("SUM(td.price)", "totalPrice")
                                .addSelect("SUM(td.sellingPrice)", "netTotalPrice")
                                .addSelect("SUM(td.discount)", "totalDiscount")
                                .where("td.id = :id", { id: saleDetails.transactionId })
                                .getRawOne()];
                    case 2:
                        _a = _b.sent(), totalPrice = _a.totalPrice, totalDiscount = _a.totalDiscount, netTotalPrice = _a.netTotalPrice;
                        totalPrice = currency(totalPrice).value;
                        netTotalPrice = currency(netTotalPrice).value;
                        totalDiscount = currency(totalDiscount).value;
                        transactionHeader.transactionStatus = TransactionHeader_1.TransactionStatus.Done;
                        transactionHeader.taxPercentageString = saleDetails.taxPercentageString;
                        transactionHeader.tax = saleDetails.tax;
                        transactionHeader.discountOnTotal = currency(saleDetails.totalDiscount).value;
                        transactionHeader.discountOnItems = totalDiscount;
                        // Total of all products without any discount or tax.
                        transactionHeader.netAmount = currency(netTotalPrice).value;
                        // Total of netAmount + tax + discount.
                        transactionHeader.billAmount = currency(totalPrice)
                            .add(saleDetails.tax)
                            .subtract(saleDetails.totalDiscount).value;
                        transactionHeader.amountPaid = currency(saleDetails.amountPaid).value;
                        transactionHeader.updatedBy = userId;
                        transactionHeader.salesType = saleDetails.saleType;
                        return [2 /*return*/, manager.save(transactionHeader)];
                }
            });
        });
    };
    // UTILITY METHODS
    SalesService.prototype.fetchInProcessTransactionHeader = function (cartItemId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getManager()
                            .createQueryBuilder(TransactionHeader_1.TransactionHeader, "th")
                            .where("th.id = :id AND isActive = 1 AND th.transactionStatus NOT IN (2)", {
                            id: cartItemId,
                            status: [TransactionHeader_1.TransactionStatus.Done]
                        })
                            .getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesService.prototype.fetchFinishedTransactionHeader = function (cartItemId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getManager()
                            .createQueryBuilder(TransactionHeader_1.TransactionHeader, "th")
                            .where("th.id = :id AND isActive = 1 AND th.transactionStatus IN (:...status)", {
                            id: cartItemId,
                            status: [TransactionHeader_1.TransactionStatus.Done]
                        })
                            .getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesService.prototype.getnewTransHeader = function (id, userId, salesType) {
        if (salesType === void 0) { salesType = TransactionHeader_1.SalesType.CounterSale; }
        var transactionHeader = new TransactionHeader_1.TransactionHeader();
        transactionHeader.id = id;
        transactionHeader.billAmount = 0;
        transactionHeader.discountOnItems = 0;
        transactionHeader.discountOnTotal = 0;
        transactionHeader.netAmount = 0;
        transactionHeader.amountPaid = 0;
        transactionHeader.tax = 0;
        transactionHeader.taxPercentageString = "";
        transactionHeader.salesType = salesType;
        transactionHeader.transactionStatus = TransactionHeader_1.TransactionStatus.Init;
        transactionHeader.createdBy = userId;
        transactionHeader.updatedBy = userId;
        transactionHeader.isActive = true;
        return transactionHeader;
    };
    SalesService.prototype.getNewTransactionId = function (userId) {
        var id = this.getIdPrefix();
        var transactionId = new TransactionId_1.TransactionId();
        transactionId.id = id;
        transactionId.count = 1;
        transactionId.createdBy = userId;
        transactionId.updatedBy = userId;
        return transactionId;
    };
    SalesService.prototype.getIdPrefix = function () {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var strDay = day.toString().length > 1 ? day : "0" + day;
        var strMonth = month.toString().length > 1 ? month : "0" + month;
        return "" + year + strMonth + strDay;
    };
    return SalesService;
}());
exports.SalesService = SalesService;
//# sourceMappingURL=SalesService.js.map