import Profile from "@/components/Form/Profile";
import Sections from "@/components/Form/Sections";
import formSchema from "@/components/Validations/form";
import { address, contact, documents, personalInfo } from "@/data/form";
import { useForm } from "react-hook-form";

const Form = () => {

	const sectionList = [
		{
			heading: "PERSONAL INFORMATION",
			data: personalInfo,
			key: 111,
		},
		{
			heading: "CONTACT",
			data: contact,
			key: 222,
		},
		{
			heading: "ADDRESS",
			data: address,
			key: 333,
		},
		{
			heading: "DOCUMENTS",
			data: documents,
			key: 444,
		}
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: formSchema,
	});

	const onSubmit = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

			<Profile
				register={register}
				errors={errors}
			/>

			{sectionList.map((value) => {
				const { heading, data, key } = value;

				return (
					<Sections
						key={key}
						heading={heading}
						data={data}
						register={register}
						errors={errors}
					/>
				);
			})}

			<div className="mt-2 text-center submit-button">
				<button
					type="submit"
					id="user-action-submit"
					className="px-2 py-1 text-xl font-bold border-2 rounded-lg text-cyan-600 border-cyan-600 hover:text-white hover:bg-cyan-600 w-fit"
				>
          			SUBMIT
				</button>
			</div>
		</form>
	);
};

export default Form;
