"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
function PaginationInfo() {
    return routing_controllers_1.createParamDecorator({
        value: function (action) {
            var perPage = action.request.query["per_page"] || 50;
            var pageNo = action.request.query["page"] || 1;
            var info = {
                perPage: perPage,
                pageNo: pageNo
            };
            return info;
        }
    });
}
exports.PaginationInfo = PaginationInfo;
//# sourceMappingURL=PaginationInfo.js.map