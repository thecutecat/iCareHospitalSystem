"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devConfig = {
    jwtSecret: 'Ne!lC^fferry_wc0!!ar',
    tokenExpiry: '24h',
    refreshTokenExpiry: '24h'
};
var prodConfig = {
    jwtSecret: process.env.JWT_SECRET,
    tokenExpiry: '24h',
    refreshTokenExpiry: '24h'
};
exports.config = process.env.IS_PROD ? prodConfig : devConfig;
//# sourceMappingURL=index.js.map