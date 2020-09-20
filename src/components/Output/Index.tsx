import React, { useContext } from 'react';
import * as _ from 'lodash';

import { AppContext } from 'Components/Context/Index';
import styles from './Index.module.css';

const Output: React.FunctionComponent = () => {
	const { output } = useContext(AppContext);

	return (
		<div className={styles.output}>
			<span className={styles.number}>{output ? output : '0'}</span>
		</div>
	);
};

export default Output;
