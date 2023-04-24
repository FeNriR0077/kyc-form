const documents = [
	{
		label: "Select a document type",
		type: "select",
		id: "user-select-document",
		className: "document",
		name: "document",
		values: [ "citizenship", "liscence", "passport" ],
		key: 16
	},
	{
		label: "Citizenship Number",
		type: "text",
		id: "user-input-citizinship-number",
		className: "citizenship-number",
		name: "citizenshipNumber",
		placeholder: "Citizenship Number",
		// pattern: "[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{4}",
		key: 17
	},
	{
		label: "Issued Date",
		type: "date",
		id: "user-input-citizenship-issued-date",
		className: "citizenship-issued-date",
		name: "citizenshipIssuedDate",
		key: 18
	},
	{
		label: "Issued City",
		type: "text",
		id: "user-input-citizenship-issued-city",
		className: "citizenship-issued-city",
		name: "citizenshipIssuedCity",
		placeholder: "City",
		key: 19
	},
	{
		label: "Citizenship Photo(Front)",
		type: "file",
		id: "user-input-citizenship-photo-front",
		className: "citizenship-photo-front",
		name: "citizenshipPhotoFront",
		accept: "image/*",
		key: 20
	},
	{
		label: "Citizenship Photo(Back)",
		type: "file",
		id: "user-input-citizenship-photo-back",
		className: "citizenship-photo-back",
		name: "citizenshipPhotoBack",
		accept: "image/*",
		key: 21
	},
];

export default documents;