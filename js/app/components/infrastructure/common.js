"use strict";
var string_1 = require('../components/string');
var object_1 = require('../components/object');
var TypeToComponent = {
    'string': string_1.UpOVStringComponent,
    'object': object_1.UpOVObjectComponent
};
var ComponentManager = (function () {
    function ComponentManager() {
    }
    ComponentManager.getComponentForType = function (objType) {
        var type = TypeToComponent[objType];
        if (type == null)
            return TypeToComponent['string'];
        return type;
    };
    return ComponentManager;
}());
exports.ComponentManager = ComponentManager;
//# sourceMappingURL=common.js.map