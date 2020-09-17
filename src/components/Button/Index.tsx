import React from 'react';
import classNames from 'classnames';
import styles from './Index.module.css';

interface IProps {
	value: string;
}

const Button: React.FunctionComponent<IProps> = ({ value }) => {
	return (
		<div className={classNames(styles.wrapper)}>
			<span className={classNames(styles.number)}>{value}</span>
		</div>
	);
};

export default Button;
