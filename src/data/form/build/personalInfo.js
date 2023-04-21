const personalInfo = [
	{
		label: "Full Name",
		type: "text",
		id: "user-input-name",
		className: "full-name",
		name: "fullName",
		placeholder: "Full Name",
		key: 1
	},
	{
		label: "Gender",
		type: "radio",
		// id: "user-input-gender",
		className: "gender",
		name: "gender",
		values: [ "male", "female", "others" ],
		key: 2
	},
	{
		label: "Date Of Birth",
		type: "date",
		id: "user-input-dob",
		className: "date-of-birth",
		name: "dob",
		key: 3
	},
	{
		label: "Father's Name",
		type: "text",
		id: "user-input-father",
		className: "father",
		name: "father",
		placeholder: "Father's Name",
		key: 4
	},
	{
		label: "Mother's Name",
		type: "text",
		id: "user-input-mother",
		className: "mother",
		name: "mother",
		placeholder: "Mother's Name",
		key: 5
	},
	{
		label: "Grand Father's Name(Optional)",
		type: "text",
		id: "user-input-grand-father",
		className: "geand-father",
		name: "grandFather",
		placeholder: "Grand Father's Name",
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
		key: 8
	},

];

export default personalInfo;