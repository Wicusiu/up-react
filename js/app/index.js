"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var upobjectviewer_1 = require('./components/upobjectviewer');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.render = function () {
        return (React.createElement(upobjectviewer_1.UpObjectViewer, {object: { firstName: 'first', lastName: 'last' }, objectSchema: {
            title: "Example Schema",
            type: "object",
            properties: {
                firstName: {
                    title: "Prénom",
                    type: "string"
                },
                lastName: {
                    title: "Nom",
                    type: "string"
                }
            } }}));
    };
    return Main;
}(React.Component));
ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));
//# sourceMappingURL=index.js.map