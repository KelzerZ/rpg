(() => {
	"use strict";
	var e = {
			778: (e, r) => {
				Object.defineProperty(r, "__esModule", { value: !0 }),
					(r.Player = void 0),
					(r.Player = class {
						constructor() {
							this.hp = 1;
						}
					});
			}
		},
		r = {};
	function o(t) {
		var s = r[t];
		if (void 0 !== s) return s.exports;
		var n = (r[t] = { exports: {} });
		return e[t](n, n.exports, o), n.exports;
	}
	(() => {
		const e = new (o(778).Player)();
		e.hp = 10;
		console.log(e.hp);
	})();
})();
