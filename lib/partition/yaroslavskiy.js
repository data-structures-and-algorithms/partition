"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.yaroslavskiy = yaroslavskiy;

/**
 * HYP : i < j
 *
 * http://cs.stackexchange.com/a/24099/20711
 */

function yaroslavskiy(compare, a, i, j) {

	--j;

	// Choose outermost elements as pivots
	if (compare(a[i], a[j]) > 0) {

		var t = a[i];
		a[i] = a[j];
		a[j] = t;
	}

	var p = a[i];
	var q = a[j];

	// Partition a according to invariant below
	var l = i + 1;
	var g = j - 1;
	var k = l;

	while (k <= g) {

		if (compare(p, a[k]) > 0) {

			var _t = a[k];
			a[k] = a[l];
			a[l] = _t;

			++l;
		} else if (compare(q, a[k]) <= 0) {

			while (compare(a[g], q) > 0 && k < g) {
				--g;
			}

			var _t2 = a[k];
			a[k] = a[g];
			a[g] = _t2;
			--g;

			if (compare(p, a[k]) > 0) {

				var _t3 = a[k];
				a[k] = a[l];
				a[l] = _t3;
				++l;
			}
		}

		++k;
	}

	--l;
	++g;

	// Swap pivots to final place

	var t1 = a[i];
	a[i] = a[l];
	a[l] = t1;

	var t2 = a[j];
	a[j] = a[g];
	a[g] = t2;

	return [l, g];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0aXRpb24veWFyb3NsYXZza2l5LmpzIl0sIm5hbWVzIjpbInlhcm9zbGF2c2tpeSIsImNvbXBhcmUiLCJhIiwiaSIsImoiLCJ0IiwicCIsInEiLCJsIiwiZyIsImsiLCJ0MSIsInQyIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsWSxHQUFBQSxZOztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsWUFBVCxDQUF3QkMsT0FBeEIsRUFBa0NDLENBQWxDLEVBQXNDQyxDQUF0QyxFQUEwQ0MsQ0FBMUMsRUFBOEM7O0FBRXBELEdBQUVBLENBQUY7O0FBRUE7QUFDQSxLQUFLSCxRQUFTQyxFQUFFQyxDQUFGLENBQVQsRUFBZ0JELEVBQUVFLENBQUYsQ0FBaEIsSUFBeUIsQ0FBOUIsRUFBa0M7O0FBRWpDLE1BQU1DLElBQUlILEVBQUVDLENBQUYsQ0FBVjtBQUNBRCxJQUFFQyxDQUFGLElBQU9ELEVBQUVFLENBQUYsQ0FBUDtBQUNBRixJQUFFRSxDQUFGLElBQU9DLENBQVA7QUFFQTs7QUFFRCxLQUFNQyxJQUFJSixFQUFFQyxDQUFGLENBQVY7QUFDQSxLQUFNSSxJQUFJTCxFQUFFRSxDQUFGLENBQVY7O0FBRUE7QUFDQSxLQUFJSSxJQUFJTCxJQUFJLENBQVo7QUFDQSxLQUFJTSxJQUFJTCxJQUFJLENBQVo7QUFDQSxLQUFJTSxJQUFJRixDQUFSOztBQUVBLFFBQVFFLEtBQUtELENBQWIsRUFBaUI7O0FBRWhCLE1BQUtSLFFBQVNLLENBQVQsRUFBYUosRUFBRVEsQ0FBRixDQUFiLElBQXNCLENBQTNCLEVBQStCOztBQUU5QixPQUFNTCxLQUFJSCxFQUFFUSxDQUFGLENBQVY7QUFDQVIsS0FBRVEsQ0FBRixJQUFPUixFQUFFTSxDQUFGLENBQVA7QUFDQU4sS0FBRU0sQ0FBRixJQUFPSCxFQUFQOztBQUVBLEtBQUVHLENBQUY7QUFFQSxHQVJELE1BVUssSUFBS1AsUUFBU00sQ0FBVCxFQUFhTCxFQUFFUSxDQUFGLENBQWIsS0FBdUIsQ0FBNUIsRUFBZ0M7O0FBRXBDLFVBQVFULFFBQVVDLEVBQUVPLENBQUYsQ0FBVixFQUFpQkYsQ0FBakIsSUFBdUIsQ0FBdkIsSUFBNEJHLElBQUlELENBQXhDLEVBQTRDO0FBQzNDLE1BQUVBLENBQUY7QUFDQTs7QUFFRCxPQUFNSixNQUFJSCxFQUFFUSxDQUFGLENBQVY7QUFDQVIsS0FBRVEsQ0FBRixJQUFPUixFQUFFTyxDQUFGLENBQVA7QUFDQVAsS0FBRU8sQ0FBRixJQUFPSixHQUFQO0FBQ0EsS0FBRUksQ0FBRjs7QUFFQSxPQUFLUixRQUFTSyxDQUFULEVBQVlKLEVBQUVRLENBQUYsQ0FBWixJQUFxQixDQUExQixFQUE4Qjs7QUFFN0IsUUFBTUwsTUFBSUgsRUFBRVEsQ0FBRixDQUFWO0FBQ0FSLE1BQUVRLENBQUYsSUFBT1IsRUFBRU0sQ0FBRixDQUFQO0FBQ0FOLE1BQUVNLENBQUYsSUFBT0gsR0FBUDtBQUNBLE1BQUVHLENBQUY7QUFFQTtBQUVEOztBQUVELElBQUVFLENBQUY7QUFDQTs7QUFFRCxHQUFFRixDQUFGO0FBQ0EsR0FBRUMsQ0FBRjs7QUFFQTs7QUFFQSxLQUFNRSxLQUFLVCxFQUFFQyxDQUFGLENBQVg7QUFDQUQsR0FBRUMsQ0FBRixJQUFPRCxFQUFFTSxDQUFGLENBQVA7QUFDQU4sR0FBRU0sQ0FBRixJQUFPRyxFQUFQOztBQUVBLEtBQU1DLEtBQUtWLEVBQUVFLENBQUYsQ0FBWDtBQUNBRixHQUFFRSxDQUFGLElBQU9GLEVBQUVPLENBQUYsQ0FBUDtBQUNBUCxHQUFFTyxDQUFGLElBQU9HLEVBQVA7O0FBRUEsUUFBTyxDQUFFSixDQUFGLEVBQU1DLENBQU4sQ0FBUDtBQUVBIiwiZmlsZSI6Inlhcm9zbGF2c2tpeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBIWVAgOiBpIDwgalxuICpcbiAqIGh0dHA6Ly9jcy5zdGFja2V4Y2hhbmdlLmNvbS9hLzI0MDk5LzIwNzExXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHlhcm9zbGF2c2tpeSAoIGNvbXBhcmUgLCBhICwgaSAsIGogKSB7XG5cblx0LS1qIDtcblxuXHQvLyBDaG9vc2Ugb3V0ZXJtb3N0IGVsZW1lbnRzIGFzIHBpdm90c1xuXHRpZiAoIGNvbXBhcmUoIGFbaV0gLCBhW2pdICkgPiAwICkge1xuXG5cdFx0Y29uc3QgdCA9IGFbaV0gO1xuXHRcdGFbaV0gPSBhW2pdIDtcblx0XHRhW2pdID0gdCA7XG5cblx0fVxuXG5cdGNvbnN0IHAgPSBhW2ldIDtcblx0Y29uc3QgcSA9IGFbal0gO1xuXG5cdC8vIFBhcnRpdGlvbiBhIGFjY29yZGluZyB0byBpbnZhcmlhbnQgYmVsb3dcblx0bGV0IGwgPSBpICsgMSA7XG5cdGxldCBnID0gaiAtIDEgO1xuXHRsZXQgayA9IGwgO1xuXG5cdHdoaWxlICggayA8PSBnICkge1xuXG5cdFx0aWYgKCBjb21wYXJlKCBwICwgYVtrXSApID4gMCApIHtcblxuXHRcdFx0Y29uc3QgdCA9IGFba10gO1xuXHRcdFx0YVtrXSA9IGFbbF0gO1xuXHRcdFx0YVtsXSA9IHQgO1xuXG5cdFx0XHQrK2wgO1xuXG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIGNvbXBhcmUoIHEgLCBhW2tdICkgPD0gMCApIHtcblxuXHRcdFx0d2hpbGUgKCBjb21wYXJlICggYVtnXSAsIHEgKSA+IDAgJiYgayA8IGcgKSB7XG5cdFx0XHRcdC0tZyA7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHQgPSBhW2tdIDtcblx0XHRcdGFba10gPSBhW2ddIDtcblx0XHRcdGFbZ10gPSB0IDtcblx0XHRcdC0tZyA7XG5cblx0XHRcdGlmICggY29tcGFyZSggcCwgYVtrXSApID4gMCApIHtcblxuXHRcdFx0XHRjb25zdCB0ID0gYVtrXSA7XG5cdFx0XHRcdGFba10gPSBhW2xdIDtcblx0XHRcdFx0YVtsXSA9IHQgO1xuXHRcdFx0XHQrK2wgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQrK2sgO1xuXHR9XG5cblx0LS1sIDtcblx0KytnIDtcblxuXHQvLyBTd2FwIHBpdm90cyB0byBmaW5hbCBwbGFjZVxuXG5cdGNvbnN0IHQxID0gYVtpXSA7XG5cdGFbaV0gPSBhW2xdIDtcblx0YVtsXSA9IHQxIDtcblxuXHRjb25zdCB0MiA9IGFbal0gO1xuXHRhW2pdID0gYVtnXSA7XG5cdGFbZ10gPSB0MiA7XG5cblx0cmV0dXJuIFsgbCAsIGcgXSA7XG5cbn1cbiJdfQ==