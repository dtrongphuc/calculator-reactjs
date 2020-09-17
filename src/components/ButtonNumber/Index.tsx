import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonNumber: React.FunctionComponent = () => {
	return (
		<div className={styles.btnNumbers}>
			<Button dataValue='1' value='1' custom={styles.blue} />
			<Button dataValue='2' value='2' custom={styles.blue} />
			<Button dataValue='3' value='3' custom={styles.blue} />
			<Button dataValue='4' value='4' custom={styles.blue} />
			<Button dataValue='5' value='5' custom={styles.blue} />
			<Button dataValue='6' value='6' custom={styles.blue} />
			<Button dataValue='7' value='7' custom={styles.blue} />
			<Button dataValue='8' value='8' custom={styles.blue} />
			<Button dataValue='9' value='9' custom={styles.blue} />
			<Button dataValue='0' value='0' custom={styles.blue} />
		</div>
	);
};

export default ButtonNumber;
