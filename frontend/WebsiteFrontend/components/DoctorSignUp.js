// components/DoctorSignUp.js

import React from "react";

const DoctorSignUp = ({ formData, handleChange, handleFileChange }) => {
  return (
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
        <label className="mb-2.5 block font-medium text-black">Address</label>
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
          Website (Optional)
        </label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Enter your website URL"
          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary text-black"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black">
          Contact Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
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
          onChange={handleFileChange}
          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary"
          required
        />
      </div>
    </>
  );
};

export default DoctorSignUp;
