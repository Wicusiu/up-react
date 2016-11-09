"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../infrastructure/common.ts" />
var React = require('react');
var UpObjectViewer_1 = require('../UpObjectViewer');
var UpOVObjectComponent = (function (_super) {
    __extends(UpOVObjectComponent, _super);
    function UpOVObjectComponent() {
        _super.apply(this, arguments);
    }
    UpOVObjectComponent.prototype.render = function () {
        var properties = [];
        for (var key in this.props.objectSchema.properties) {
            var obj = this.props.object[key];
            var schema = this.props.objectSchema.properties[key];
            properties.push(React.createElement("div", {key: key}, 
                React.createElement(UpObjectViewer_1.UpObjectViewer, {object: obj, objectSchema: schema})
            ));
        }
        return (React.createElement("div", null, 
            React.createElement("label", null, this.props.objectSchema.title), 
            React.createElement("div", null, properties)));
    };
    return UpOVObjectComponent;
}(React.Component));
exports.UpOVObjectComponent = UpOVObjectComponent;
//# sourceMappingURL=object.js.map