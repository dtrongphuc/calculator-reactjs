import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonOperator: React.FunctionComponent = () => {
	return (
		<div className={styles.btnOperator}>
			<Button value='/' />
			<Button value='*' />
			<Button value='-' />
			<Button value='+' />
			<Button value='=' />
		</div>
	);
};

export default ButtonOperator;
