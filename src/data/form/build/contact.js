const contact = [
	{
		label: "Email",
		type: "email",
		id: "user-input-email",
		className: "email",
		name: "email",
		placeholder: "Email Address",
		required: "required",
		key: 1
	},
	{
		label: "Phone",
		type: "phone",
		id: "user-input-phone",
		className: "phone",
		name: "phone",
		placeholder: "+977-000-000-0000",
		required: "required",
		pattern: "[+]{1}[9]{1}[9]{7}[9]{7}-[0-9]{3}-[0-9]{3}-[0-9]{4}",
		key: 2
	}
];

export default contact;