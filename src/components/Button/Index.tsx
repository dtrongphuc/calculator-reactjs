import React, { useContext } from 'react';
import classNames from 'classnames';

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
			setInput(value ? input.concat(value) : input);
		}
	};

	const handleCalculate = () => {
		// handle input ?
		setOutput('test');
	};

	return (
		<div className={classNames(styles.wrapper)} onClick={handleButtonClick}>
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
