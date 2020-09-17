import React from 'react';

import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const ButtonFunction: React.FunctionComponent = () => {
	return (
		<div className={styles.btnFunctions}>
			<Button dataValue='RECALL' value='RECALL' custom={styles.pink} />
			<Button dataValue='CLEAR' value='CLEAR' custom={styles.pink} />
			<Button dataValue='DELETE' value='&#8592;' custom={styles.pink} />
		</div>
	);
};

export default ButtonFunction;
