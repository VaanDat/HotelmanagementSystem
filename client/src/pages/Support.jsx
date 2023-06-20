import React from 'react';

const SupportPage = () => {
  return (
    <div className="bg-emerald-600 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Support</h1>
          <p className="text-lg mb-8">
            Welcome to our support page. If you have any questions or need assistance, please fill out the form below
            and we will get back to you as soon as possible.
          </p>
        </div>
        <form className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
