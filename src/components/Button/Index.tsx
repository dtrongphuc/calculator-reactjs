import React, { useContext, useEffect, useState } from 'react';
import * as _ from 'lodash';

import { handleCalculate } from '../../helper/Calculate';
import { AppContext } from 'Components/Context/Index';
import styles from './Index.module.css';
import { result } from 'lodash';

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
	const {
		inputValue,
		setInputValue,
		output,
		setOutput,
		history,
		setHistory,
	} = useContext(AppContext);

	const setStates: Function = (
		result: string,
		x: string,
		y: string,
		operator: string
	) => {
		setOutput(result);
		setInputValue((inputValue) => {
			return { ...inputValue, x: result, operator: '', y: '' };
		});
		setHistory((history) => {
			return [...history, { x: x, operator: operator, y: y }];
		});
	};

	const handleSelected: Function = (selected: string): void => {
		let x = inputValue?.x;
		let y = inputValue?.y;
		let operator = inputValue?.operator;
		let result = '';

		switch (selected) {
			case '=':
				result = handleCalculate(parseInt(x), operator, parseInt(y));
				setStates(result, x, y, operator);
				break;
			case 'DELETE':
				let arr = _.compact(output.trim().split(' ')).slice(0, -1);

				if (arr.length >= 2) {
					arr[1] = ' ' + arr[1] + ' ';
				}

				setOutput(arr.join(''));

				if (operator && y) {
					setInputValue({
						...inputValue,
						y: y.slice(0, -1),
					});
				} else if (operator) {
					setInputValue({
						...inputValue,
						operator: operator.slice(0, -1),
					});
				} else {
					setInputValue({
						...inputValue,
						x: x.slice(0, -1),
					});
				}
				break;
			case 'CLEAR':
				setOutput('');
				setInputValue({ ...inputValue, x: '', operator: '', y: '' });
				break;

			case 'RECALL':
				let modalElement = document.getElementById('modal');
				(modalElement?.parentNode as HTMLElement).setAttribute(
					'style',
					'z-index: 999'
				);
				modalElement?.setAttribute('style', 'transform: translateY(0)');
				setTimeout(() => {
					document
						.querySelector('#modal > svg')
						?.setAttribute('style', 'display: inline-block');
				}, 100);
				break;
			default:
				if (!x || (!operator && !selected?.match(/[\+\-\*\/]/g))) {
					setInputValue((inputValue) => {
						return {
							...inputValue,
							x:
								inputValue?.x.concat(
									selected ? selected : ''
								) || '',
						};
					});
					setOutput((output) => {
						return `${output}${selected}`;
					});
				} else if (selected?.match(/[\+\-\*\/]/g)) {
					if (x && operator && y) {
						result = handleCalculate(
							parseInt(x),
							operator,
							parseInt(y)
						);
						setStates(result, x, y, operator);
					}
					setInputValue((inputValue) => {
						return {
							...inputValue,
							operator: selected || '',
						};
					});
					setOutput((output) => {
						return `${output} ${selected} `;
					});
				} else if (x && operator) {
					setInputValue((inputValue) => {
						return {
							...inputValue,
							y: y.concat(selected ? selected : '') || '',
						};
					});
					setOutput((output) => {
						return `${output}${selected}`;
					});
				}
				break;
		}
	};

	const handleButtonClick = (event: React.MouseEvent) => {
		const element = event.currentTarget;
		const value = element.children[0]?.getAttribute('data-value');

		handleSelected(value);
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
