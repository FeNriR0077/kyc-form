import { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
	const [ values, setValues ] = useState({
	});

	const handleChange = (e) => {
		setValues({
			...values, [e.target.name]: e.target.value.toLowerCase()
		});
	};

	const states = {
		values
	};
	const actions = {
		handleChange
	};

	return (
		<FormContext.Provider value={{
			states, actions
		}} >
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;