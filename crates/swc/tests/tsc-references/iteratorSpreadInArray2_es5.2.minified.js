import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
import _to_consumable_array from "@swc/helpers/lib/_to_consumable_array.js";
var SymbolIterator = function() {
    "use strict";
    function SymbolIterator() {
        _class_call_check(this, SymbolIterator);
    }
    var _proto = SymbolIterator.prototype;
    return _proto.next = function() {
        return {
            value: Symbol(),
            done: !1
        };
    }, _proto[Symbol.iterator] = function() {
        return this;
    }, SymbolIterator;
}(), NumberIterator = function() {
    "use strict";
    function NumberIterator() {
        _class_call_check(this, NumberIterator);
    }
    var _proto = NumberIterator.prototype;
    return _proto.next = function() {
        return {
            value: 0,
            done: !1
        };
    }, _proto[Symbol.iterator] = function() {
        return this;
    }, NumberIterator;
}();
_to_consumable_array(new NumberIterator).concat(_to_consumable_array(new SymbolIterator));
