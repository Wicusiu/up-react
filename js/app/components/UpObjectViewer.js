"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/index.d.ts" />
var React = require('react');
var Common = require('./infrastructure/common');
var UpObjectViewer = (function (_super) {
    __extends(UpObjectViewer, _super);
    function UpObjectViewer() {
        _super.apply(this, arguments);
    }
    UpObjectViewer.prototype.render = function () {
        return React.createElement(Common.ComponentManager.getComponentForType(this.props.objectSchema.type), this.props);
    };
    return UpObjectViewer;
}(React.Component));
exports.UpObjectViewer = UpObjectViewer;
//# sourceMappingURL=UpObjectViewer.js.map