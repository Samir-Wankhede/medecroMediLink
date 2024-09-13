"use client";
import React, { useState } from 'react';
import { useLogin } from '@/hooks/useLogin';
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader/Loader';
import withLoggedinAuthentication from '@/authManagement/withLoggedinAuthentication';

const Login = () => {
  // State to store all form input values
  const [formData, setFormData] = useState({
    role: "user",
    email: null,
    contact: null,
    password: null
  });

  const {login,isLoading,error} = useLogin();
  const router = useRouter();

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    await login(formData);
  };

  return (
    <>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white min-h-screen ">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">Sign In</h2>
      </div>
      {error && <p className='text-red'>{error}</p>}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center ">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <p className=" 2xl:px-20 font-bold text-6xl text-blue-500">MediLink</p>
            </div>
          </div>
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to MediLink
              </h2>

              <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                >
                  <option value="user">User</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              {
                formData.role==="user"?
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">Contact</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                :
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
              }
                
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center text-slate-600">
                  <p className="font-medium">
                    Don’t have any account?{" "}
                    <a href="/auth/SignUp" className="text-primary">Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <div className='w-full my-5 flex justify-center'><Loader/></div>}
    </div>
    </>
  );
};

export default withLoggedinAuthentication(Login) ;
