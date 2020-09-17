import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonOperator: React.FunctionComponent = () => {
	return (
		<div className={styles.btnOperator}>
			<Button dataValue='/' value='/' custom={styles.pink} />
			<Button dataValue='*' value='*' custom={styles.pink} />
			<Button dataValue='-' value='-' custom={styles.pink} />
			<Button dataValue='+' value='+' custom={styles.pink} />
			<Button dataValue='=' value='=' custom={styles.pink} />
		</div>
	);
};

export default ButtonOperator;
