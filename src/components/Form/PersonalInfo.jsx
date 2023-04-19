import { useContext } from "react";
import FormInput from "./FormInput";
import { personalInfo } from "@/data/form";
import { FormContext } from "@/components/Contexts/Form";

const PersonlInfo = () => {
	const {
		actions: { handleChange },
	} = useContext(FormContext);

	return (
		<div className="px-12 py-8 mb-4 bg-white border-2 rounded-lg personal-info">
			<h1 className="mb-7 p-3 rounded-lg text-xl font-bold bg-slate-200">
        		PERSONAL INFORMATION
			</h1>

			<div className="grid w-full grid-cols-3 gap-12 text-left">
				{personalInfo.map((input) => {
					const {
						label,
						type,
						id,
						className,
						values,
						key,
						...rest
					} = input;

					return (
						<div key={key} className="flex flex-col mb-2 text-md">
							<label htmlFor={id} className="mb-2 font-medium">
								{label}:
							</label>

							<FormInput
								type={type}
								id={id}
								className={`p-3 bg-slate-100 border-2 rounded-lg  focus:outline-teal-600 ${className} ${
									type === "date" ? "" : "capitalize"
								}`}
								values={values ? values : ""}
								onChange={handleChange}
								{...rest}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PersonlInfo;
