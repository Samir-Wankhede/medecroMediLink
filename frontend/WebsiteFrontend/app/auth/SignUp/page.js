"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    role: "user",
    fullName: "",
    phoneNumber: "",
    gender: "",
    age: "",
    address: "",
    preferredLanguages: "",
    name: "",
    specialization: "",
    website: "",
    contactNumber: "",
    proofOfIdentity: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form Submitted", formData);

    // Implement form submission logic here

    // Redirect based on role
    if (formData.role === "user") {
      router.push('/models/user'); 
    } else if (formData.role === "doctor") {
      router.push('/models/doctor'); 
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white min-h-screen">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-title-md2 font-bold text-black">
          Sign Up
        </h2>
      </div>

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

            {formData.role === "user" && (
              <>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
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
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
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
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Enter your website link (if any)"
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
                    Proof of Identity
                  </label>
                  <input
                    type="file"
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
                disabled={isSubmitting}
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
    </div>
  );
};

export default SignUpForm;
