const personalInfo = [
	{
		label: "Full Name",
		type: "text",
		id: "user-input-name",
		className: "full-name",
		name: "fullName",
		placeholder: "Full Name",
		required: "required",
		key: 1
	},
	{
		label: "Gender",
		type: "radio",
		id: "user-input-gender",
		className: "gender",
		name: "gender",
		required: "required",
		values: [ "male", "female", "others" ],
		key: 2
	},
	{
		label: "Date Of Birth",
		type: "date",
		id: "user-input-dob",
		className: "date-of-birth",
		name: "dob",
		required: "required",
		key: 3
	},
	{
		label: "Fathers Name",
		type: "text",
		id: "user-input-father",
		className: "father",
		name: "father",
		placeholder: "Fathers Name",
		required: "required",
		key: 4
	},
	{
		label: "Mothers Name",
		type: "text",
		id: "user-input-mother",
		className: "mother",
		name: "mother",
		placeholder: "Mothers Name",
		required: "required",
		key: 5
	},
	{
		label: "Grand Fathers Name(Optional)",
		type: "text",
		id: "user-input-grand-father",
		className: "geand-father",
		name: "grandFather",
		placeholder: "Grand Fathers Name",
		key: 6
	},
	{
		label: "Spouse Name(Optional)",
		type: "text",
		id: "user-input-spouse",
		className: "spouse",
		name: "spouse",
		placeholder: "Spouse Name",
		key: 7
	},
	{
		label: "Occupation",
		type: "text",
		id: "user-input-occupation",
		className: "occupation",
		name: "occupation",
		placeholder: "Occupation",
		required: "required",
		key: 8
	},

];

export default personalInfo;