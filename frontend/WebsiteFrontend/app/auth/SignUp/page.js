"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useSignup } from "@/hooks/useSignup";
import Loader from '@/components/Loader/Loader';
import withLoggedinAuthentication from '@/authManagement/withLoggedinAuthentication';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    role: "user",
    firstName: null,
    lastName: null,
    phoneNumber: null,
    gender: null,
    age: null,
    address: null,
    preferredLanguages: null,
    name: null,
    email: null,
    specialization: null,
    link: null,
    contactNumber: null,
    proofOfIdentity: null,
    password: null,
    dob: null,
  });
  const router = useRouter();
  const {user} = useAuthContext();
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const {signup, error, isLoading} = useSignup()
  const handleChange = (e) => {
    const { name, value} = e.target;
    console.log(value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    await signup(formData);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white min-h-screen">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-title-md2 font-bold text-black">
          Sign Up
        </h2>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <h2 className="mb-9 text-2xl font-bold text-black sm:text-title-xl2">
            Create Your Account
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

            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black">
                password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                required
              />
            </div>

            {formData.role === "user" && (
              <>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                    min="0"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Preferred Languages
                  </label>
                  <select
                    name="preferredLanguages"
                    value={formData.preferredLanguages}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  >
                    <option value="">Select your preferred language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="bengali">Bengali</option>
                    <option value="telugu">Telugu</option>
                    <option value="marathi">Marathi</option>
                    <option value="tamil">Tamil</option>
                    <option value="urdu">Urdu</option>
                    <option value="gujarati">Gujarati</option>
                    <option value="malayalam">Malayalam</option>
                    <option value="kannada">Kannada</option>
                    {/* Add other major Indian languages here */}
                  </select>
                </div>
              </>
            )}

            {formData.role === "doctor" && (
              <>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Specialization
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Enter your specialization"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Maps Link
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="Enter your maps link (if any)"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    License Number
                  </label>
                  <input
                    value={formData.proofOfIdentity}
                    name="proofOfIdentity"
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary"
                    required
                  />
                </div>
              </>
            )}

            <div className="mb-5">
              <input
                type="submit"
                value="Sign Up"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                disabled={isLoading}
              />
            </div>

            <div className="mt-6 text-center text-slate-600">
              <p className="font-medium">
                Already have an account?{" "}
                <a href="/auth/Login" className="text-primary">
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <div className='w-full my-5 flex justify-center'><Loader/></div>}
    </div>
  );
};

export default withLoggedinAuthentication(SignUpForm);
