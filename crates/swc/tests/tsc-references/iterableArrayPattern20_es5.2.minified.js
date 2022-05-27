import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
import _inherits from "@swc/helpers/lib/_inherits.js";
import _sliced_to_array from "@swc/helpers/lib/_sliced_to_array.js";
import _to_consumable_array from "@swc/helpers/lib/_to_consumable_array.js";
import _create_super from "@swc/helpers/lib/_create_super.js";
var Bar = function() {
    "use strict";
    _class_call_check(this, Bar);
}, Foo = function(Bar1) {
    "use strict";
    _inherits(Foo, Bar1);
    var _super = _create_super(Foo);
    function Foo() {
        return _class_call_check(this, Foo), _super.apply(this, arguments);
    }
    return Foo;
}(Bar), FooArrayIterator = function() {
    "use strict";
    function FooArrayIterator() {
        _class_call_check(this, FooArrayIterator);
    }
    var _proto = FooArrayIterator.prototype;
    return _proto.next = function() {
        return {
            value: [
                new Foo
            ],
            done: !1
        };
    }, _proto[Symbol.iterator] = function() {
        return this;
    }, FooArrayIterator;
}();
(function() {
    for(var _len = arguments.length, _tmp = new Array(_len), _key = 0; _key < _len; _key++)_tmp[_key] = arguments[_key];
    var __tmp = _sliced_to_array(_tmp, 2);
    void 0 === (void 0 === _sliced_to_array(__tmp[0], 1)[0] && new Foo, __tmp[1]) && new Foo;
}).apply(void 0, _to_consumable_array(new FooArrayIterator));
