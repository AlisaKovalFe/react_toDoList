import { useState, useEffect } from "react";

function useLocalStorage(initialValue, key) {
	const getValue = () => {
		const storage = localStorage.getItem(key);
		if (storage !== null) {
			try {
				return JSON.parse(storage);
			} catch {
				return initialValue;
			}
		}
		return initialValue;
	};
	const [value, setValue] = useState(getValue);
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}

export { useLocalStorage };
