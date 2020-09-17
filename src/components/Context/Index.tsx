import React, { useState } from 'react';

interface ContextState {
	input: string;
	output: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	setOutput: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = React.createContext({} as ContextState);

export const AppProvider = (props: any) => {
	const [input, setInput] = useState<string>('');
	const [output, setOutput] = useState<string>('');

	return (
		<AppContext.Provider value={{ input, output, setInput, setOutput }}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;
