function debounce({ fn, wait = 100 }) {
	if (typeof fn !== 'function' || !fn) {
		console.error('debounce: fn Parameter error');
		return;
	}
	let timeout;
	return function () {
		const context = this;
		const args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			fn.apply(context, args);
		}, wait);
	};
}

export default debounce;
