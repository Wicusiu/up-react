"use strict";
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var UpFormGroup_1 = require('../app/components/UpFormGroup');
it('CheckboxWithLabel changes the text after click', function () {
    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(React.createElement(UpFormGroup_1.UpFormGroup, {label: React.createElement("i", null, "lol")}, "test"));
    alert(checkbox);
    // Verify that it's Off by default
});
//# sourceMappingURL=UpFormGroup-test.js.map