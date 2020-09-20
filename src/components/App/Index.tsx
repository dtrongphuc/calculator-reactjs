import React from 'react';

import { AppProvider } from 'Components/Context/Index';
import Output from 'Components/Output/Index';
import ButtonOperator from 'Components/ButtonOperator/Index';
import ButtonFunction from 'Components/ButtonFunction/Index';
import ButtonNumber from 'Components/ButtonNumber/Index';
import History from 'Components/History/Index';
import styles from './Index.module.css';

const App: React.FunctionComponent = () => {
	return (
		<div className={`${styles.app}`}>
			<AppProvider>
				<Output />
				<div className={`${styles.wrapper}`}>
					<div className={styles.left}>
						<ButtonFunction />
						<ButtonNumber />
					</div>
					<div className={styles.right}>
						<ButtonOperator />
					</div>
				</div>
				<History />
			</AppProvider>
		</div>
	);
};

export default App;
