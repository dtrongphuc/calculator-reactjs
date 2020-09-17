import React from 'react';

import Result from 'components/Output/Index';
import Button from 'Components/Button/Index';
import styles from './Index.module.css';

const App: React.FunctionComponent = () => (
	<div className={`${styles.app}`}>
		<Result />
		<Button />
	</div>
);

export default App;
