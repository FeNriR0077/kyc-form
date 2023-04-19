import FormInput from "./FormInput";
import { useContext } from "react";
import { FormContext } from "@/components/Contexts/Form";
import { address } from "@/data/form";

const Address = () => {
	const { permanent, current } = address;

	return (
		<div className="px-12 py-8 bg-white border-2 rounded-lg address">
			<h1 className="mb-7 p-3 rounded-lg text-xl font-bold bg-slate-200">
                ADDDRESS
			</h1>

			<Display type="Permanent" inputs={permanent} />

			<p className="my-6 border-2 border-slate-100" ></p>

			<Display type="Current" inputs={current} />

		</div>
	);
};

const Display = ({ type, inputs }) => {
	const {
		actions: { handleChange }
	} = useContext(FormContext);

	return (
		<>
			<h2 className="mb-4 text-xl font-bold text-left border-b-2 border-slate-500 text-slate-600 w-fit">
				{type} Address:
			</h2>

			<div className="grid w-full grid-cols-3 gap-12 text-left">
				{inputs.map((input) => {
					const {
						label,
						id,
						type,
						className,
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
								className={`p-3 bg-slate-100 border-2 rounded-lg  focus:outline-teal-600 ${className} ${
									type === "date" ? "" : "capitalize"
								}`}
								onChange={handleChange}
								{...rest}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Address;
