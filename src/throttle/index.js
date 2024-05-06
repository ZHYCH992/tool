function throttle({ fn, wait = 100 }) {
	let isThrottled = false;
	return (...args) => {
		if (!isThrottled) {
			isThrottled = true;
			setTimeout(() => {
				fn.apply(this, args);
				isThrottled = false;
			}, wait);
		}
	};
}

export default throttle;
