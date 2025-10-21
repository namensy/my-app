"use cilent";

import { NextPage } from "next";

interface Props {}

const LoginForm: NextPage<Props> = ({}) => {
  return (
    <form action={} className="space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
        />
      </div>
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
        />
      </div>
      <button
        type="submit"
        className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent hover:bg-blue-800 bg-blue-600 text-white font-medium text-sm shadow-sm rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
