import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Submit</button>
        </form>
        <p className="mt-4 text-gray-600 text-center">You can also reach us at: <a href="mailto:your-email@example.com" className="text-yellow-600 font-semibold">tanusharma@21gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
 