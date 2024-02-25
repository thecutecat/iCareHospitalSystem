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
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var class_validator_1 = require("class-validator");
var mpatient = /** @class */ (function (_super) {
    __extends(mpatient, _super);
    function mpatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.PrimaryGeneratedColumn(),
        typeorm_1.Column(),
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], mpatient.prototype, "patient_id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], mpatient.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], mpatient.prototype, "date_of_birth", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(), class_validator_1.Length(10, 10),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], mpatient.prototype, "gender", void 0);
    mpatient = __decorate([
        typeorm_1.Entity()
    ], mpatient);
    return mpatient;
}(Base_1.Base));
exports.mpatient = mpatient;
//# sourceMappingURL=mPatients.js.map