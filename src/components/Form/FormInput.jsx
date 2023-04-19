// import PropTypes from 'prop-types';

const FormInput = ({
	type,
	id,
	required,
	values,
	onChange,
	pattern,
	...rest
}) => {
	const date = new Date();

	let currentDay = String(date.getDate()).padStart(2, "0");
	let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
	let currentYear = date.getFullYear();

	let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	if (type === "radio") {
		return (
			<div className="flex gap-12 radio-options">
				{values.map((value, index) => {
					return (
						<div key={index}>
							<label htmlFor={id + "-" + value} className="mr-1 capitalize">
								{value}
							</label>

							<input
								type={type}
								id={id + "-" + value}
								value={value}
								required={required}
								onChange={onChange}
								{...rest}
							/>
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
			<input
				type={type}
				id={id}
				max={type === "date" ? currentDate : ""}
				required={required ? "required" : ""}
				onChange={onChange}
				pattern={pattern}
				{...rest}
			/>
		);
	}
};

export default FormInput;
