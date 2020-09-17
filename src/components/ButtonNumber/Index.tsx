import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonNumber: React.FunctionComponent = () => {
	return (
		<div className={styles.btnNumbers}>
			<Button value='1' />
			<Button value='2' />
			<Button value='3' />
			<Button value='4' />
			<Button value='5' />
			<Button value='6' />
			<Button value='7' />
			<Button value='8' />
			<Button value='9' />
			<Button value='0' />
		</div>
	);
};

export default ButtonNumber;
