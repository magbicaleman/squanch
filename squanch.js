const squanch = (...patterns) => {
	return v => {
		const primitives = ['Number', 'String', 'Boolean', 'Symbol'];

		const isIdentical = (p, v) => p === v;
		const isNull = (p, v) => isIdentical(null, p) && isIdentical(p, v);
		const isUndefined = (p, v) => isIdentical(undefined, p) && isIdentical(p, v);
		const isPrimitiveWithValue = (primitives, type, value) => {
			return (value !== null && value !== undefined)
				&& primitives.includes(type.name) 
				&& {}.valueOf.call(value) instanceof type;
		};
		const callalbeTruthy = (p, v) => {
			if (p instanceof Function && ! primitives.includes(p.name)) {
				return p.call(null, v);
			}
		};

		for (let sequence of patterns) {
			let [pattern, fn] = sequence;
			switch(true) {
				case (isNull(pattern, v)) :
				case (isUndefined(pattern, v)) :
				case (isIdentical(pattern, v)) :
				case (isPrimitiveWithValue(primitives, pattern, v)) :
				case (callalbeTruthy(pattern, v)) :
					return fn.call(null, v);
					break;
			}
		}

		return 'No patterns matched';
	};
};

export default squanch;