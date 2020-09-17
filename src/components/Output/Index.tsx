import React from 'react';

import styles from './Index.module.css';

const Output: React.FunctionComponent = () => {
	return (
		<div className={styles.output}>
			<span className={styles.number}>0</span>
		</div>
	);
};

export default Output;
