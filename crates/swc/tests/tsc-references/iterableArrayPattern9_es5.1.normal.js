import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
import _inherits from "@swc/helpers/lib/_inherits.js";
import _sliced_to_array from "@swc/helpers/lib/_sliced_to_array.js";
import _create_super from "@swc/helpers/lib/_create_super.js";
//@target: ES6
function fun() {
    var ref = _sliced_to_array(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new FooIterator, 2), a = ref[0], b = ref[1];
}
var Bar = function Bar() {
    "use strict";
    _class_call_check(this, Bar);
};
var Foo = /*#__PURE__*/ function(Bar) {
    "use strict";
    _inherits(Foo, Bar);
    var _super = _create_super(Foo);
    function Foo() {
        _class_call_check(this, Foo);
        return _super.apply(this, arguments);
    }
    return Foo;
}(Bar);
var FooIterator = /*#__PURE__*/ function() {
    "use strict";
    function FooIterator() {
        _class_call_check(this, FooIterator);
    }
    var _proto = FooIterator.prototype;
    _proto.next = function next() {
        return {
            value: new Foo,
            done: false
        };
    };
    _proto[Symbol.iterator] = function() {
        return this;
    };
    return FooIterator;
}();
