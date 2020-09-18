import React, { useState } from 'react';

type input = { x: string; operator: string; y: string };
interface ContextState {
	input: input;
	output: number;
	setInput: React.Dispatch<React.SetStateAction<input>>;
	setOutput: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext({} as ContextState);

export const AppProvider = (props: any) => {
	const [input, setInput] = useState<input>({
		x: '',
		y: '',
		operator: '',
	});
	const [output, setOutput] = useState<number>(0);

	return (
		<AppContext.Provider value={{ input, output, setInput, setOutput }}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;
