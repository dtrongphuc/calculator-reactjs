import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonFunction: React.FunctionComponent = () => {
	return (
		<div className={styles.btnFunctions}>
			<Button value='RECALL' />
			<Button value='CLEAR' />
			<Button value='&#8592;' />
		</div>
	);
};

export default ButtonFunction;
