import React from 'react';
import classNames from 'classnames';
import styles from './Index.module.css';

const Button: React.FunctionComponent = () => {
	return (
		<div className={classNames(styles.wrapper)}>
			<span className={classNames(styles.number)}>0</span>
		</div>
	);
};

export default Button;
