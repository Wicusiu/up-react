"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../infrastructure/common.ts" />
var React = require('react');
var uplabel_1 = require('../uplabel');
var UpOVStringComponent = (function (_super) {
    __extends(UpOVStringComponent, _super);
    function UpOVStringComponent() {
        _super.apply(this, arguments);
    }
    UpOVStringComponent.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(uplabel_1.UpLabel, null, this.props.objectSchema.title), 
            React.createElement("div", null, this.props.object)));
    };
    return UpOVStringComponent;
}(React.Component));
exports.UpOVStringComponent = UpOVStringComponent;
//# sourceMappingURL=string.js.map