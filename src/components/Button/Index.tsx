import React from 'react';
import classNames from 'classnames';
import styles from './Index.module.css';

interface IProps {
	value: string;
	custom: string;
}

const Button: React.FunctionComponent<IProps> = ({ value, custom }) => {
	return (
		<div className={classNames(styles.wrapper)}>
			<span className={`${styles.number} ${custom}`}>{value}</span>
		</div>
	);
};

export default Button;
