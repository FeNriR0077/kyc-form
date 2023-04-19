import { useContext } from "react";
import PersonlInfo from "./PersonalInfo";
import { FormContext } from "../Contexts/Form";
import Address from "./Address";
import Contact from "./Contact";

const Form = () => {
	const {
		states: { values },
	} = useContext(FormContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values, "formValues");
		// const data = new FormData(e.target);
		// console.log(Object.fromEntries(data.entries()));
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<PersonlInfo />
			<Contact />
			<Address />

			<div className="mt-4 text-center submit-button">
				<button
					type="submit"
					id="user-action-submit"
					className="px-2 py-1 text-xl font-bold text-teal-500 border-2 border-teal-500 rounded-lg hover:text-white hover:bg-teal-500 w-fit"
				>
          			SUBMIT
				</button>
			</div>
		</form>
	);
};

export default Form;
