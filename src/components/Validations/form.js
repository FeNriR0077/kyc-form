import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const MAX_FILE_SIZE = 250000879879;

const formSchema = yup.object().shape({
	fullName: yup
		.string()
		.matches(/^[A-Za-z0-9]*$/, "No special characters allowed")
		.max(30, "Full Name must be less than 30 characters")
		.required("Full Name is required"),
	gender: yup.string().required("Gender is required"),
	dob: yup.string().required("Date of birth is required"),
	father: yup
		.string()
		.matches(/^[A-Za-z0-9]*$/, "No special characters")
		.max(30, "Father's Name must be less than 30 characters")
		.required("Father's Name is required"),
	mother: yup
		.string()
		.matches(/^[A-Za-z0-9]*$/, "No special characters")
		.max(30, "Mother's Name must be less than 30 characters")
		.required("Mother's Name is required"),
	grandFather: yup
		.string()
		.matches(/^[A-Za-z0-9]*$/, "No special characters")
		.max(30, "Grand Father's Name must be less than 30 characters"),
	spouse: yup
		.string()
		.matches(/^[A-Za-z0-9]*$/, "No special characters")
		.max(30, "Spouse's name must be less than 30 characters"),
	occupation: yup
		.string()
		.matches(/^[A-Za-z0-9]*$/, "No special characters")
		.max(20, "Occupation must be less than 20 characters")
		.required("Occupation is required"),
	email: yup
		.string()
		.email()
		.max(20, "Email must be less than 20 characters")
		.required("Email is required"),
	phone: yup
		.string()
		.max(20, "Phone Number must be less than 15 characters")
		.matches(/^[0-9]*$/, "Only numbers allowed")
		.required("Phone Number is required"),
	street: yup
		.string()
		.max(20, "Street must be less than 20 characters")
		.required("Street is required"),
	city: yup
		.string()
		.max(20, "City must be less than 20 characters")
		.required("City is required"),
	state: yup
		.string()
		.max(20, "State must be less than 20 characters")
		.required("State is required"),
	country: yup
		.string()
		.max(20, "Country must be less than 20 characters")
		.required("Country is required"),
	postCode: yup
		.string("Post Code must be a number")
		.max(15, "Post Code must be less than 15 characters")
		.matches(/^[0-9]*$/, "Only numbers allowed")
		.required("Post Code is required"),
	document: yup.string().required("A document must be selected"),
	citizenshipNumber: yup
		.string()
		.max(20, "Citizenship Number must be less than 20 characters")
		.matches(/^[0-9]*$/, "Only numbers allowed")
		.required("Citizenship Number is required"),
	citizenshipIssuedDate: yup.string().required("Issued date is required"),
	citizenshipIssuedCity: yup
		.string()
		.max(20, "Issued City must be less than 20 characters")
		.required("Issued City is required"),
	citizenshipPhotoFront: yup
		.mixed()
		.required(),
	citizenshipPhotoBack: yup
		.mixed()
		.required(),
	profile: yup
		.mixed()
		.required("Profile image is required")
});

export default yupResolver(formSchema);
