import React from 'react';

import Output from 'Components/Output/Index';
import ButtonOperator from 'Components/ButtonOperator/Index';
import ButtonFunction from 'Components/ButtonFunction/Index';
import ButtonNumber from 'Components/ButtonNumber/Index';
import styles from './Index.module.css';

const App: React.FunctionComponent = () => (
	<div className={`${styles.app}`}>
		<Output />
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<ButtonFunction />
				<ButtonNumber />
			</div>
			<div className={styles.right}>
				<ButtonOperator />
			</div>
		</div>
	</div>
);

export default App;
