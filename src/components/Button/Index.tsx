import React, { useContext } from 'react';
import * as _ from 'lodash';

import { AppContext } from 'Components/Context/Index';
import styles from './Index.module.css';

interface IProps {
	value: string;
	dataValue: string;
	custom: string;
}

const Button: React.FunctionComponent<IProps> = ({
	value,
	dataValue,
	custom,
}) => {
	const { input, setInput, setOutput } = useContext(AppContext);

	const handleButtonClick = (event: React.MouseEvent) => {
		const element = event.currentTarget;
		const value = element.children[0]?.getAttribute('data-value');

		if (value === '=') {
			handleCalculate();
		} else {
			if (
				!input?.x ||
				(!input?.operator && !value?.match(/[\+\-\*\/]/g))
			) {
				setInput({
					...input,
					x: input?.x.concat(value ? value : '') || '',
				});
			} else if (value?.match(/[\+\-\*\/]/g)) {
				setInput({ ...input, operator: value || '' });
			} else if (input.x && input.operator) {
				setInput({
					...input,
					y: input?.y.concat(value ? value : '') || '',
				});
			}
		}
	};

	const handleCalculate = () => {
		let x = parseInt(input?.x);
		let y = parseInt(input?.y);
		let result = 0;

		switch (input?.operator) {
			case '+':
				result = x + y;
				setOutput(result);
				setInput({ x: '' + result, operator: '', y: '' });
				break;
			case '-':
				result = x - y;
				setOutput(result);
				setInput({ x: '' + result, operator: '', y: '' });
				break;

			case '*':
				result = x * y;
				setOutput(result);
				setInput({ x: '' + result, operator: '', y: '' });
				break;

			case '/':
				result = x / y;
				setOutput(result);
				setInput({ x: '' + result, operator: '', y: '' });
				break;

			default:
				result = 0;
				setOutput(result);
				setInput({ x: '' + result, operator: '', y: '' });
				break;
		}
	};

	return (
		<div
			className={styles.wrapper}
			onClick={_.throttle(handleButtonClick, 100)}
		>
			<span
				data-value={dataValue}
				className={`${styles.number} ${custom}`}
			>
				{value}
			</span>
		</div>
	);
};

export default Button;
