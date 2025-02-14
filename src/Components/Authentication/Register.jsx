import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import register from "../../assets/login02.jpg";
import { useState } from "react";
import { uploadImageToImgBB } from "../Provider/UploadImages";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    let imageUrl = null;

    if (profilePicture) {
      try {
        imageUrl = await uploadImageToImgBB(profilePicture);
      } catch (error) {
        toast.error("Image upload failed");
        setLoading(false);
        return;
      }
    }

    try {
      await createUser(email, password);

      updateUserProfile(name, imageUrl);
      toast.success("SignUp Successful");
      navigate(from);
    } catch (err) {
      toast(err.message);
    }
    setLoading(false);
  };

  const handleSignin = async () => {
    try {
      await signInWithGoogle();
      toast.success("SignUp Successful");
      navigate(from);
    } catch (err) {
      toast(err.message);
    }
  };
  return (
    <div className="flex items-center p-5 md:px-10 mx-auto">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-pink-300 mb-5">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          noValidate=""
          action=""
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              UserName
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="image" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full mb-4"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button
            disabled={loading}
            className="block w-full p-3 hover:bg-pink-500 border border-blue-500 text-center rounded-lg font-medium dark:text-gray-50 dark:bg-violet-600"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-base dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSignin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <p className="text-sm text-center sm:px-6 dark:text-gray-600">
          Don't have an account ?
          <Link to="/login">
            {" "}
            <button
              rel="noopener noreferrer"
              href="#"
              className="underline font-medium dark:text-gray-800"
            >
              {" "}
              Sign in
            </button>
          </Link>
        </p>
      </div>
      <img className="md:w-[50%]" src={register} alt="" />
    </div>
  );
};

export default Register;
