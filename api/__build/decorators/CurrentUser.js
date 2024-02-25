"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
function CurrentUser() {
    return routing_controllers_1.createParamDecorator({
        value: function (action) {
            var _a = action.request.token, _b = (_a === void 0 ? {} : _a).userid, userid = _b === void 0 ? undefined : _b;
            return userid;
        }
    });
}
exports.CurrentUser = CurrentUser;
//# sourceMappingURL=CurrentUser.js.map