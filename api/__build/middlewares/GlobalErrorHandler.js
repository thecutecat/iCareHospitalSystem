"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler() {
    }
    GlobalErrorHandler.prototype.error = function (error, request, response, next) {
        console.log("===> (error) \n");
        console.log(error);
        if (error) {
            if (error.errors) {
                response.status(400).send(error);
                return;
            }
            if (error.code) {
                response.status(400).send(error);
                return;
            }
            response.status(500).send(error);
            return;
        }
        next(null);
    };
    GlobalErrorHandler = __decorate([
        routing_controllers_1.Middleware({ type: "after" })
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());
exports.GlobalErrorHandler = GlobalErrorHandler;
//# sourceMappingURL=GlobalErrorHandler.js.map