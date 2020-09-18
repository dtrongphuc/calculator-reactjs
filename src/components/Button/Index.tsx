import React, { useContext, useEffect } from 'react';
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

	useEffect(() => {
		if (input?.x && input?.operator && input?.y) {
			handleCalculate();
		}
	}, [input]);

	const handleButtonClick = (event: React.MouseEvent) => {
		const element = event.currentTarget;
		const value = element.children[0]?.getAttribute('data-value');

		if (value === '=') {
			handleCalculate();
		} else {
			if (!input.x && !value?.match(/[\+\-\*\/]/g)) {
				setInput({ ...input, x: value || '' });
			} else if (value?.match(/[\+\-\*\/]/g)) {
				setInput({ ...input, operator: value || '' });
			} else if (input.x && input.operator) {
				setInput({ ...input, y: value || '' });
			}
		}
	};

	const handleCalculate = () => {
		let x = parseInt(input?.x);
		let y = parseInt(input?.y);

		switch (input?.operator) {
			case '+':
				setOutput(x + y);
				break;
			case '-':
				setOutput(x - y);
				break;

			case '*':
				setOutput(x * y);
				break;

			case '/':
				setOutput(x / y);
				break;

			default:
				setOutput(0);
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
