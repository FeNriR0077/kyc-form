import FormProvider from "@/components/Contexts/Form";
import Form from "@/components/Form";

export default function Home() {

	return (
		<main className="px-24 my-8 text-center ">
			<h1
				className="mb-8 text-3xl font-bold text-slate-600"
			>
        		KYC FORM
			</h1>

			<FormProvider>
				<Form />
			</FormProvider>
		</main>
	);
}
