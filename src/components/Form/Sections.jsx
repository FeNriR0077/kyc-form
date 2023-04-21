import { FormInput } from "@/components/Form";

const Sections = ({ heading, data, register, errors }) => (
	<div className="px-12 py-8 mb-4 bg-white border-2 rounded-lg">
		<h1 className="p-3 text-xl font-bold text-white rounded-lg mb-7 bg-cyan-600">
			{heading}
		</h1>

		<div className="grid w-full grid-cols-3 gap-12 text-left">
			{data.map((input) => {
				const { type, id, className, values, key, ...rest } = input;

				const fileStyles = "file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-600 hover:file:bg-sky-100";

				return (
					<div key={key} className="flex flex-col gap-2 mb-2 text-md">
						<FormInput
							type={type}
							id={id}
							className={
								`p-3 bg-slate-100 border-2 rounded-lg  focus:outline-teal-600 
									${className} 
									${type === "date" || type === "email" ? "" : "capitalize"} 
									${type === "file" ? fileStyles : ""}`
							}
							values={values ? values : ""}
							register={register}
							errors={errors}
							{...rest}
						/>
					</div>
				);
			})}
		</div>
	</div>
);

export default Sections;
