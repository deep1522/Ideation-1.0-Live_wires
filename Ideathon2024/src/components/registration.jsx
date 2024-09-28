import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({
    teammate1: {
      name: '',
      registerNumber: '',
      department: '',
      mobile: '',
    },
    teammate2: {
      name: '',
      registerNumber: '',
      department: '',
      mobile: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e, teammate) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [teammate]: {
        ...prevData[teammate],
        [name]: value,
      },
    }));
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Make POST request to backend
      await axios.post('http://localhost:80/register', formData);
      alert('Registration Successful!');
    } catch (error) {
      setError('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-white text-center p-14 mt-10">
      <h1 className="mb-24 text-4xl text-cyan-300">Registration</h1>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center gap-24">
          {/* Teammate-1 */}
          <div className="bg-gradient-to-r from-gray-950 to-gray-900 shadow-[0_0_25px_rgb(6,182,212)] rounded-lg p-5 m-2 w-1/3">
            <h2 className="text-cyan-300 text-xl">Teammate-1</h2>
            <p>Mandatory</p>
            <div className="flex flex-col gap-1 mb-4">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.teammate1.name}
                onChange={(e) => handleChange(e, 'teammate1')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label>Register Number:</label>
              <input
                type="text"
                name="registerNumber"
                value={formData.teammate1.registerNumber}
                onChange={(e) => handleChange(e, 'teammate1')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={formData.teammate1.department}
                onChange={(e) => handleChange(e, 'teammate1')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label>Mobile No:</label>
              <input
                type="tel"
                name="mobile"
                value={formData.teammate1.mobile}
                onChange={(e) => handleChange(e, 'teammate1')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
                required
              />
            </div>
          </div>

          {/* Teammate-2 */}
          <div className="bg-gradient-to-l from-gray-950 to-gray-900 shadow-[0_0_25px_rgb(6,182,212)] rounded-lg p-5 m-2 w-1/3">
            <h2 className="text-cyan-300 text-xl">Teammate-2</h2>
            <p>Optional</p>
            <div className="flex flex-col gap-1 mb-4">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.teammate2.name}
                onChange={(e) => handleChange(e, 'teammate2')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label>Register Number:</label>
              <input
                type="text"
                name="registerNumber"
                value={formData.teammate2.registerNumber}
                onChange={(e) => handleChange(e, 'teammate2')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={formData.teammate2.department}
                onChange={(e) => handleChange(e, 'teammate2')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label>Mobile No:</label>
              <input
                type="tel"
                name="mobile"
                value={formData.teammate2.mobile}
                onChange={(e) => handleChange(e, 'teammate2')}
                className="bg-gray-700 text-white rounded-md p-2 mb-2 w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="bg-transparent mt-7 text-cyan-500 border-2 w-44 border-cyan-300 font-bold py-2 px-4 rounded-md hover:shadow-[0_0_25px_rgb(6,182,212)] transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default Registration;
