import React, { useContext } from 'react';
import * as _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from 'Components/Context/Index';
import styles from './Index.module.css';

const History: React.FunctionComponent = () => {
	const { history, setInputValue, setOutput, inputValue } = useContext(
		AppContext
	);

	const closeModal = () => {
		let modalElement = document.getElementById('modal');
		modalElement?.setAttribute('style', 'transform: translateY(-100%)');
		setTimeout(() => {
			document
				.querySelector('#modal > svg')
				?.setAttribute('style', 'display: none');
			document
				.querySelector(`.${styles.modalWrapper}`)
				?.setAttribute('style', 'z-index: -1');
		}, 250);
	};

	const handleReCall = (event: React.MouseEvent): void => {
		let element = event.currentTarget;
		let x = element?.getAttribute('data-x');
		let y = element?.getAttribute('data-y');
		let operator = element?.getAttribute('data-operator');

		setInputValue((inputValue) => {
			return {
				...inputValue,
				x: x ? x : '',
				operator: operator ? operator : '',
				y: y ? y : '',
			};
		});

		setOutput(`${x} ${operator} ${y}`);
	};

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal} id='modal'>
				<div className={styles.content}>
					{_.map(history, (item, index) => {
						return (
							<p
								key={index}
								onClick={handleReCall}
								className={styles.item}
								data-x={item.x}
								data-y={item.y}
								data-operator={item.operator}
							>{`${item.x} ${item.operator} ${item.y}`}</p>
						);
					})}
				</div>
				<FontAwesomeIcon
					icon={faTimes}
					size='1x'
					className={styles.times}
					fixedWidth
					onClick={closeModal}
				/>
			</div>
		</div>
	);
};

export default History;
