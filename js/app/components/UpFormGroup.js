"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
require('bootstrap/dist/css/bootstrap.css');
var UpFormGroup = (function (_super) {
    __extends(UpFormGroup, _super);
    function UpFormGroup() {
        _super.apply(this, arguments);
    }
    UpFormGroup.prototype.render = function () {
        return React.createElement("div", {className: "form-group"}, 
            React.createElement("label", {className: "col-sm-2 control-label"}, this.props.label), 
            React.createElement("div", {className: "col-sm-10"}, this.props.children));
    };
    return UpFormGroup;
}(React.Component));
exports.UpFormGroup = UpFormGroup;
//# sourceMappingURL=UpFormGroup.js.map