import Image from "next/image";
import { useState } from "react";

const Profile = ({ register, errors }) => {
	const [ image, setImage ] = useState(null);
	const isImage = !!image;

	const handleProfileChange = (e) => {
		if(e.target.files){
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<div className="px-12 py-8 mb-4 align-middle bg-white border-2 rounded-lg">
			<h1 className="p-3 text-xl font-bold text-white rounded-lg mb-7 bg-cyan-600">
                PROFILE IMAGE
			</h1>

			<div className="flex flex-col items-center p-9">
				<label
					htmlFor="user-input-profile"
					className="mb-4 border-2 border-black border-dashed rounded-md cursor-pointer min-w-6xl hover:underline"
				>
					{isImage
						?
						<>
							<Image
								src={image}
								className="p-4"
								alt="Profile Picture"
								width={300}
								height={250}
							/>
							<p className="mb-2 text-slate-500">
								(click again to replace the image)
							</p>
						</>
						:
						<p className="p-16 font-semibold text-slate-500">
							UPLOAD YOUR PROFILE PICTURE
							<br/>
							(face should be clearly visible)
						</p>
					}

				</label>

				<input
					type="file"
					id="user-input-profile"
					name="profile"
					{...register("profile")}
					className={"mt-4 cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-600 hover:file:bg-sky-100"}
					onChange={handleProfileChange}
					accept="image/*"
				/>

				<p className="text-rose-700">{errors["profile"]?.message}</p>
			</div>

		</div>
	);
};

export default Profile;