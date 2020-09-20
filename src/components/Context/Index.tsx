import React, { useState } from 'react';

type input = { x: string; operator: string; y: string };
interface ContextState {
	inputValue: input;
	output: string;
	history: Array<input>;
	setInputValue: React.Dispatch<React.SetStateAction<input>>;
	setOutput: React.Dispatch<React.SetStateAction<string>>;
	setHistory: React.Dispatch<React.SetStateAction<Array<input>>>;
}

export const AppContext = React.createContext({} as ContextState);

export const AppProvider = (props: any) => {
	const [inputValue, setInputValue] = useState<input>({
		x: '',
		y: '',
		operator: '',
	});
	const [output, setOutput] = useState<string>('');
	const [history, setHistory] = useState<Array<input>>([]);

	return (
		<AppContext.Provider
			value={{
				inputValue,
				output,
				history,
				setInputValue,
				setOutput,
				setHistory,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;
