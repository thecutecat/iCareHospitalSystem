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
var Initial1529954694708 = /** @class */ (function () {
    function Initial1529954694708() {
    }
    Initial1529954694708.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"password\" varchar NOT NULL, \"role\" integer NOT NULL, \"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"customer\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar, \"address\" varchar NOT NULL, \"mobile\" varchar NOT NULL, \"email\" varchar, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product_type\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"description\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar NOT NULL, \"costPrice\" float NOT NULL, \"sellingPrice\" float NOT NULL, \"productTypeId\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"transaction_details\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer NOT NULL, \"productId\" varchar NOT NULL, \"qty\" integer NOT NULL, \"costPrice\" float NOT NULL, \"sellingPrice\" float NOT NULL, \"discount\" float NOT NULL, \"price\" float NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, PRIMARY KEY (\"id\", \"productId\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"transaction_header\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY NOT NULL, \"discountOnItems\" float NOT NULL, \"discountOnTotal\" float NOT NULL, \"tax\" float NOT NULL, \"taxPercentageString\" varchar, \"billAmount\" float NOT NULL DEFAULT (0), \"netAmount\" float NOT NULL, \"amountPaid\" float NOT NULL, \"salesType\" integer NOT NULL, \"transactionStatus\" integer NOT NULL, \"comments\" varchar, \"customerId\" varchar, \"isActive\" boolean NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"credit_transactions\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"customerId\" varchar NOT NULL, \"billAmount\" float, \"amountPaid\" float NOT NULL, \"balance\" float NOT NULL, \"totalDebt\" float NOT NULL, \"type\" integer NOT NULL, \"paidDate\" datetime NOT NULL, \"isReverted\" boolean NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, \"transactionId\" integer)")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5cc73d9fbfdc51999d75b0c0b6\" ON \"credit_transactions\" (\"customerId\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_feddaa64ad05cbc5b1fb27b5f9\" ON \"credit_transactions\" (\"transactionId\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"credit_transactions_pointer\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"customerId\" varchar PRIMARY KEY NOT NULL, \"seqPointer\" integer NOT NULL, \"balanceAmount\" integer NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"REL_dbb6f15cc41fcd531155160e2a\" UNIQUE (\"customerId\"))")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"expense_type\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"description\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"expense\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"description\" varchar NOT NULL, \"amount\" float NOT NULL, \"spentAt\" datetime NOT NULL, \"expenseTypeId\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"vendor\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar, \"address\" varchar NOT NULL, \"mobile\" varchar NOT NULL, \"email\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"receiving\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"productId\" varchar NOT NULL, \"qty\" integer NOT NULL, \"price\" float NOT NULL, \"payedAt\" datetime NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, \"vendorId\" varchar)")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"stock\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"qty\" float NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"REL_092bc1fc7d860426a1dec5aa8e\" UNIQUE (\"id\"))")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"transaction_id\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"count\" integer NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_customer\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar, \"address\" varchar NOT NULL, \"mobile\" varchar NOT NULL, \"email\" varchar, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_06da83f09c12364501434a415f9\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_c214a79453aea94b16ccba6d9eb\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION)")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_customer\"(\"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\" FROM \"customer\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"customer\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_customer\" RENAME TO \"customer\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_product_type\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"description\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_d9b43312286eddb67e9c5dce935\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_5e82007c77af5633ce3f12a5900\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION)")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_product_type\"(\"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\" FROM \"product_type\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product_type\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_product_type\" RENAME TO \"product_type\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_product\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar NOT NULL, \"costPrice\" float NOT NULL, \"sellingPrice\" float NOT NULL, \"productTypeId\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_806302f2d4da2a0c27eedbf34fe\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_9c29670ff9dd3fd43cf20733c19\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_374bfd0d1b0e1398d7206456d98\" FOREIGN KEY (\"productTypeId\") REFERENCES \"product_type\" (\"id\") ON DELETE RESTRICT)")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_product\"(\"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"costPrice\", \"sellingPrice\", \"productTypeId\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"costPrice\", \"sellingPrice\", \"productTypeId\", \"createdById\", \"updatedById\" FROM \"product\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_product\" RENAME TO \"product\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_transaction_details\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer NOT NULL, \"productId\" varchar NOT NULL, \"qty\" integer NOT NULL, \"costPrice\" float NOT NULL, \"sellingPrice\" float NOT NULL, \"discount\" float NOT NULL, \"price\" float NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_d99a08c585bca9a7cdd380fe084\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_5f96b4bb045fc7c1d8bef85f9de\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_b9397af1203ca3a78ca6631e4b7\" FOREIGN KEY (\"id\") REFERENCES \"transaction_header\" (\"id\"), CONSTRAINT \"FK_22e400a129a85ea07d7142b385b\" FOREIGN KEY (\"productId\") REFERENCES \"product\" (\"id\"), PRIMARY KEY (\"id\", \"productId\"))")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_transaction_details\"(\"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"costPrice\", \"sellingPrice\", \"discount\", \"price\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"costPrice\", \"sellingPrice\", \"discount\", \"price\", \"createdById\", \"updatedById\" FROM \"transaction_details\"")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"transaction_details\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_transaction_details\" RENAME TO \"transaction_details\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_transaction_header\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY NOT NULL, \"discountOnItems\" float NOT NULL, \"discountOnTotal\" float NOT NULL, \"tax\" float NOT NULL, \"taxPercentageString\" varchar, \"billAmount\" float NOT NULL DEFAULT (0), \"netAmount\" float NOT NULL, \"amountPaid\" float NOT NULL, \"salesType\" integer NOT NULL, \"transactionStatus\" integer NOT NULL, \"comments\" varchar, \"customerId\" varchar, \"isActive\" boolean NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_972e5a2b3855fc29a6999f265e9\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_c39ed25297c15e8f5ee02dc43fc\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_02d7033e5613076786491c8c9c5\" FOREIGN KEY (\"customerId\") REFERENCES \"customer\" (\"id\") ON DELETE RESTRICT)")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_transaction_header\"(\"createdAt\", \"updatedAt\", \"id\", \"discountOnItems\", \"discountOnTotal\", \"tax\", \"taxPercentageString\", \"billAmount\", \"netAmount\", \"amountPaid\", \"salesType\", \"transactionStatus\", \"comments\", \"customerId\", \"isActive\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"discountOnItems\", \"discountOnTotal\", \"tax\", \"taxPercentageString\", \"billAmount\", \"netAmount\", \"amountPaid\", \"salesType\", \"transactionStatus\", \"comments\", \"customerId\", \"isActive\", \"createdById\", \"updatedById\" FROM \"transaction_header\"")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"transaction_header\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_transaction_header\" RENAME TO \"transaction_header\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5cc73d9fbfdc51999d75b0c0b6\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_feddaa64ad05cbc5b1fb27b5f9\"")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_credit_transactions\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"customerId\" varchar NOT NULL, \"billAmount\" float, \"amountPaid\" float NOT NULL, \"balance\" float NOT NULL, \"totalDebt\" float NOT NULL, \"type\" integer NOT NULL, \"paidDate\" datetime NOT NULL, \"isReverted\" boolean NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, \"transactionId\" integer, CONSTRAINT \"FK_af19d716d4d37a768e26930e04c\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_9470581ecc9a3b618dfc22fc8a1\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_5cc73d9fbfdc51999d75b0c0b65\" FOREIGN KEY (\"customerId\") REFERENCES \"customer\" (\"id\") ON DELETE RESTRICT, CONSTRAINT \"FK_feddaa64ad05cbc5b1fb27b5f92\" FOREIGN KEY (\"transactionId\") REFERENCES \"transaction_header\" (\"id\") ON DELETE RESTRICT)")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_credit_transactions\"(\"createdAt\", \"updatedAt\", \"id\", \"customerId\", \"billAmount\", \"amountPaid\", \"balance\", \"totalDebt\", \"type\", \"paidDate\", \"isReverted\", \"createdById\", \"updatedById\", \"transactionId\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"customerId\", \"billAmount\", \"amountPaid\", \"balance\", \"totalDebt\", \"type\", \"paidDate\", \"isReverted\", \"createdById\", \"updatedById\", \"transactionId\" FROM \"credit_transactions\"")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"credit_transactions\"")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_credit_transactions\" RENAME TO \"credit_transactions\"")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5cc73d9fbfdc51999d75b0c0b6\" ON \"credit_transactions\" (\"customerId\") ")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_feddaa64ad05cbc5b1fb27b5f9\" ON \"credit_transactions\" (\"transactionId\") ")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_credit_transactions_pointer\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"customerId\" varchar PRIMARY KEY NOT NULL, \"seqPointer\" integer NOT NULL, \"balanceAmount\" integer NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"REL_dbb6f15cc41fcd531155160e2a\" UNIQUE (\"customerId\"), CONSTRAINT \"FK_2c34274bbdf80c38852cb471352\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_e8141486ff2fca78580dfc66948\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_dbb6f15cc41fcd531155160e2a5\" FOREIGN KEY (\"customerId\") REFERENCES \"customer\" (\"id\") ON DELETE RESTRICT)")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_credit_transactions_pointer\"(\"createdAt\", \"updatedAt\", \"customerId\", \"seqPointer\", \"balanceAmount\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"customerId\", \"seqPointer\", \"balanceAmount\", \"createdById\", \"updatedById\" FROM \"credit_transactions_pointer\"")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"credit_transactions_pointer\"")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_credit_transactions_pointer\" RENAME TO \"credit_transactions_pointer\"")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_expense_type\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"description\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_b5532a31f18348ae4d821e0220d\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_471acd2ed86e5b5ea3af1bd92a3\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION)")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_expense_type\"(\"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\" FROM \"expense_type\"")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"expense_type\"")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_expense_type\" RENAME TO \"expense_type\"")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_expense\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"description\" varchar NOT NULL, \"amount\" float NOT NULL, \"spentAt\" datetime NOT NULL, \"expenseTypeId\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_33025f4898ea79cc35a3c6da4ca\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_106758ff33bf2f0895ccdddfe59\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_6409b02bdfe2376ca457cb799e6\" FOREIGN KEY (\"expenseTypeId\") REFERENCES \"expense_type\" (\"id\") ON DELETE RESTRICT)")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_expense\"(\"createdAt\", \"updatedAt\", \"id\", \"description\", \"amount\", \"spentAt\", \"expenseTypeId\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"description\", \"amount\", \"spentAt\", \"expenseTypeId\", \"createdById\", \"updatedById\" FROM \"expense\"")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"expense\"")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_expense\" RENAME TO \"expense\"")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_vendor\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar, \"address\" varchar NOT NULL, \"mobile\" varchar NOT NULL, \"email\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_0de97bf3cd0a4f7160f63e40fc2\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_65296297671a019dfc5520edffa\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION)")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_vendor\"(\"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\" FROM \"vendor\"")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"vendor\"")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_vendor\" RENAME TO \"vendor\"")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_receiving\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"productId\" varchar NOT NULL, \"qty\" integer NOT NULL, \"price\" float NOT NULL, \"payedAt\" datetime NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, \"vendorId\" varchar, CONSTRAINT \"FK_8d96bfc6c1630d2e04059b8ccc0\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_1b429c13ccc2e3c7ac61685e214\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_729fa079d0965fed1a67d0551d0\" FOREIGN KEY (\"productId\") REFERENCES \"product\" (\"id\"), CONSTRAINT \"FK_2f6fe4ca75365e7909475c0d1c6\" FOREIGN KEY (\"vendorId\") REFERENCES \"vendor\" (\"id\"))")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_receiving\"(\"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"price\", \"payedAt\", \"createdById\", \"updatedById\", \"vendorId\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"price\", \"payedAt\", \"createdById\", \"updatedById\", \"vendorId\" FROM \"receiving\"")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"receiving\"")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_receiving\" RENAME TO \"receiving\"")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_stock\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"qty\" float NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"REL_092bc1fc7d860426a1dec5aa8e\" UNIQUE (\"id\"), CONSTRAINT \"FK_801e7f94cda68a0f3f008c19a72\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_e4541a212a8959b773d04595f7c\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_092bc1fc7d860426a1dec5aa8e9\" FOREIGN KEY (\"id\") REFERENCES \"product\" (\"id\"))")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_stock\"(\"createdAt\", \"updatedAt\", \"id\", \"qty\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"qty\", \"createdById\", \"updatedById\" FROM \"stock\"")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"stock\"")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_stock\" RENAME TO \"stock\"")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_transaction_id\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"count\" integer NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"FK_a7885a2dba4d32e36b828e5c238\" FOREIGN KEY (\"createdById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION, CONSTRAINT \"FK_43d9814ddb37d9dd6fb606226eb\" FOREIGN KEY (\"updatedById\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION)")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_transaction_id\"(\"createdAt\", \"updatedAt\", \"id\", \"count\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"count\", \"createdById\", \"updatedById\" FROM \"transaction_id\"")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"transaction_id\"")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_transaction_id\" RENAME TO \"transaction_id\"")];
                    case 72:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Initial1529954694708.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"transaction_id\" RENAME TO \"temporary_transaction_id\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"transaction_id\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"count\" integer NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"transaction_id\"(\"createdAt\", \"updatedAt\", \"id\", \"count\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"count\", \"createdById\", \"updatedById\" FROM \"temporary_transaction_id\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_transaction_id\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"stock\" RENAME TO \"temporary_stock\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"stock\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"qty\" float NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"REL_092bc1fc7d860426a1dec5aa8e\" UNIQUE (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"stock\"(\"createdAt\", \"updatedAt\", \"id\", \"qty\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"qty\", \"createdById\", \"updatedById\" FROM \"temporary_stock\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_stock\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"receiving\" RENAME TO \"temporary_receiving\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"receiving\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"productId\" varchar NOT NULL, \"qty\" integer NOT NULL, \"price\" float NOT NULL, \"payedAt\" datetime NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, \"vendorId\" varchar)")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"receiving\"(\"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"price\", \"payedAt\", \"createdById\", \"updatedById\", \"vendorId\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"price\", \"payedAt\", \"createdById\", \"updatedById\", \"vendorId\" FROM \"temporary_receiving\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_receiving\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"vendor\" RENAME TO \"temporary_vendor\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"vendor\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar, \"address\" varchar NOT NULL, \"mobile\" varchar NOT NULL, \"email\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"vendor\"(\"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\" FROM \"temporary_vendor\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_vendor\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"expense\" RENAME TO \"temporary_expense\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"expense\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"description\" varchar NOT NULL, \"amount\" float NOT NULL, \"spentAt\" datetime NOT NULL, \"expenseTypeId\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"expense\"(\"createdAt\", \"updatedAt\", \"id\", \"description\", \"amount\", \"spentAt\", \"expenseTypeId\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"description\", \"amount\", \"spentAt\", \"expenseTypeId\", \"createdById\", \"updatedById\" FROM \"temporary_expense\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_expense\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"expense_type\" RENAME TO \"temporary_expense_type\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"expense_type\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"description\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"expense_type\"(\"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\" FROM \"temporary_expense_type\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_expense_type\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"credit_transactions_pointer\" RENAME TO \"temporary_credit_transactions_pointer\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"credit_transactions_pointer\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"customerId\" varchar PRIMARY KEY NOT NULL, \"seqPointer\" integer NOT NULL, \"balanceAmount\" integer NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, CONSTRAINT \"REL_dbb6f15cc41fcd531155160e2a\" UNIQUE (\"customerId\"))")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"credit_transactions_pointer\"(\"createdAt\", \"updatedAt\", \"customerId\", \"seqPointer\", \"balanceAmount\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"customerId\", \"seqPointer\", \"balanceAmount\", \"createdById\", \"updatedById\" FROM \"temporary_credit_transactions_pointer\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_credit_transactions_pointer\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_feddaa64ad05cbc5b1fb27b5f9\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5cc73d9fbfdc51999d75b0c0b6\"")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"credit_transactions\" RENAME TO \"temporary_credit_transactions\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"credit_transactions\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY AUTOINCREMENT NOT NULL, \"customerId\" varchar NOT NULL, \"billAmount\" float, \"amountPaid\" float NOT NULL, \"balance\" float NOT NULL, \"totalDebt\" float NOT NULL, \"type\" integer NOT NULL, \"paidDate\" datetime NOT NULL, \"isReverted\" boolean NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, \"transactionId\" integer)")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"credit_transactions\"(\"createdAt\", \"updatedAt\", \"id\", \"customerId\", \"billAmount\", \"amountPaid\", \"balance\", \"totalDebt\", \"type\", \"paidDate\", \"isReverted\", \"createdById\", \"updatedById\", \"transactionId\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"customerId\", \"billAmount\", \"amountPaid\", \"balance\", \"totalDebt\", \"type\", \"paidDate\", \"isReverted\", \"createdById\", \"updatedById\", \"transactionId\" FROM \"temporary_credit_transactions\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_credit_transactions\"")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_feddaa64ad05cbc5b1fb27b5f9\" ON \"credit_transactions\" (\"transactionId\") ")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5cc73d9fbfdc51999d75b0c0b6\" ON \"credit_transactions\" (\"customerId\") ")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"transaction_header\" RENAME TO \"temporary_transaction_header\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"transaction_header\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer PRIMARY KEY NOT NULL, \"discountOnItems\" float NOT NULL, \"discountOnTotal\" float NOT NULL, \"tax\" float NOT NULL, \"taxPercentageString\" varchar, \"billAmount\" float NOT NULL DEFAULT (0), \"netAmount\" float NOT NULL, \"amountPaid\" float NOT NULL, \"salesType\" integer NOT NULL, \"transactionStatus\" integer NOT NULL, \"comments\" varchar, \"customerId\" varchar, \"isActive\" boolean NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"transaction_header\"(\"createdAt\", \"updatedAt\", \"id\", \"discountOnItems\", \"discountOnTotal\", \"tax\", \"taxPercentageString\", \"billAmount\", \"netAmount\", \"amountPaid\", \"salesType\", \"transactionStatus\", \"comments\", \"customerId\", \"isActive\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"discountOnItems\", \"discountOnTotal\", \"tax\", \"taxPercentageString\", \"billAmount\", \"netAmount\", \"amountPaid\", \"salesType\", \"transactionStatus\", \"comments\", \"customerId\", \"isActive\", \"createdById\", \"updatedById\" FROM \"temporary_transaction_header\"")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_transaction_header\"")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"transaction_details\" RENAME TO \"temporary_transaction_details\"")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"transaction_details\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" integer NOT NULL, \"productId\" varchar NOT NULL, \"qty\" integer NOT NULL, \"costPrice\" float NOT NULL, \"sellingPrice\" float NOT NULL, \"discount\" float NOT NULL, \"price\" float NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL, PRIMARY KEY (\"id\", \"productId\"))")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"transaction_details\"(\"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"costPrice\", \"sellingPrice\", \"discount\", \"price\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"productId\", \"qty\", \"costPrice\", \"sellingPrice\", \"discount\", \"price\", \"createdById\", \"updatedById\" FROM \"temporary_transaction_details\"")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_transaction_details\"")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" RENAME TO \"temporary_product\"")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar NOT NULL, \"costPrice\" float NOT NULL, \"sellingPrice\" float NOT NULL, \"productTypeId\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"product\"(\"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"costPrice\", \"sellingPrice\", \"productTypeId\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"costPrice\", \"sellingPrice\", \"productTypeId\", \"createdById\", \"updatedById\" FROM \"temporary_product\"")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_product\"")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_type\" RENAME TO \"temporary_product_type\"")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product_type\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"description\" varchar NOT NULL, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"product_type\"(\"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"description\", \"createdById\", \"updatedById\" FROM \"temporary_product_type\"")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_product_type\"")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"customer\" RENAME TO \"temporary_customer\"")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"customer\" (\"createdAt\" datetime NOT NULL DEFAULT (datetime('now')), \"updatedAt\" datetime NOT NULL DEFAULT (datetime('now')), \"id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"description\" varchar, \"address\" varchar NOT NULL, \"mobile\" varchar NOT NULL, \"email\" varchar, \"createdById\" varchar NOT NULL, \"updatedById\" varchar NOT NULL)")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"customer\"(\"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\") SELECT \"createdAt\", \"updatedAt\", \"id\", \"name\", \"description\", \"address\", \"mobile\", \"email\", \"createdById\", \"updatedById\" FROM \"temporary_customer\"")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_customer\"")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"transaction_id\"")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"stock\"")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"receiving\"")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"vendor\"")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"expense\"")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"expense_type\"")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"credit_transactions_pointer\"")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_feddaa64ad05cbc5b1fb27b5f9\"")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5cc73d9fbfdc51999d75b0c0b6\"")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"credit_transactions\"")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"transaction_header\"")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"transaction_details\"")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product\"")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product_type\"")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"customer\"")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 72:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Initial1529954694708;
}());
exports.Initial1529954694708 = Initial1529954694708;
//# sourceMappingURL=1529954694708-Initial.js.map