export const handleCalculate: Function = (
	x: number,
	operator: string,
	y: number
): string => {
	let result = 0;

	if (y) {
		switch (operator) {
			case '+':
				result = x + y;
				break;
			case '-':
				result = x - y;
				break;

			case '*':
				result = x * y;
				break;

			case '/':
				result = x / y;
				break;

			default:
				result = x || 0;
				break;
		}
	} else {
		switch (operator) {
			case '+':
				result = x + x;
				break;
			case '-':
				result = x - x;
				break;

			case '*':
				result = x * x;
				break;

			case '/':
				result = x / x;
				break;

			default:
				result = x || 0;
				break;
		}
	}

	return result + '';
};

export default handleCalculate;
