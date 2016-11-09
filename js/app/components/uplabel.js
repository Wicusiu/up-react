"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/index.d.ts" />
var React = require('react');
var UpLabel = (function (_super) {
    __extends(UpLabel, _super);
    function UpLabel() {
        _super.apply(this, arguments);
    }
    UpLabel.prototype.render = function () {
        var value = this.props.children == null ? this.props.value : this.props.children;
        return React.createElement("label", null, value);
    };
    return UpLabel;
}(React.Component));
exports.UpLabel = UpLabel;
//# sourceMappingURL=uplabel.js.map