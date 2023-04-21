// import PropTypes from "prop-types";

const FormInput = ({
	label,
	type,
	id,
	values,
	name,
	max,
	register,
	errors,
	...rest
}) => {
	const date = new Date();

	let currentDay = String(date.getDate()).padStart(2, "0");
	let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
	let currentYear = date.getFullYear();

	let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	if (type === "radio") {
		return (
			<>
				<label htmlFor={id}>{label}:</label>

				<div className="flex gap-12 radio-options">
					{values.map((value) => {
						return (
							<div key={value}>
								<label htmlFor={id + "-" + value} className="mr-1 capitalize">
									{value}
								</label>

								<input
									type={type}
									id={id}
									name={name}
									value={value}
									{...register(name)}
									{...rest}
								/>
							</div>
						);
					})}
				</div>
				<p className="mt-6 text-rose-600">{errors[`${name}`]?.message}</p>
			</>
		);
	}

	else if (type === "select") {
		return (
			<>
				<label htmlFor={id}>{label}:</label>

				<select id={id} name={name} {...rest} {...register(name)}>
					{values.map((value) => {
						return (
							<option key={value} value={value}>
								{value}
							</option>
						);
					})}
				</select>

				<p className="text-rose-600">{errors[`${name}`]?.message}</p>
			</>
		);
	}

	else {
		return (
			<>
				<label htmlFor={id}>{label}:</label>

				<input
					type={type}
					id={id}
					name={name}
					max={type === "date" ? currentDate : max}
					{...register(name)}
					{...rest}
				/>

				<p className="text-rose-700">{errors[`${name}`]?.message}</p>
			</>
		);
	}
};

// FormInput.propTypes = {
// 	label: PropTypes.string(),
// 	type: PropTypes.string(),
// 	id: PropTypes.string(),
// 	values: PropTypes.arrayOf(PropTypes.string),
// 	name: PropTypes.string(),
// 	max: PropTypes.string(),
// 	register: PropTypes.func(),
// 	errors: PropTypes.object(),
// };

export default FormInput;
