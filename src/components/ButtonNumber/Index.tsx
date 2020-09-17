import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonNumber: React.FunctionComponent = () => {
	return (
		<div className={styles.btnNumbers}>
			<Button value='1' custom={styles.blue} />
			<Button value='2' custom={styles.blue} />
			<Button value='3' custom={styles.blue} />
			<Button value='4' custom={styles.blue} />
			<Button value='5' custom={styles.blue} />
			<Button value='6' custom={styles.blue} />
			<Button value='7' custom={styles.blue} />
			<Button value='8' custom={styles.blue} />
			<Button value='9' custom={styles.blue} />
			<Button value='0' custom={styles.blue} />
		</div>
	);
};

export default ButtonNumber;
