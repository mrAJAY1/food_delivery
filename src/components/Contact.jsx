import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact us Page</h1>
      <form action="" className="flex flex-col w-4/12">
        <input
          type="text"
          className="border border-black mb-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black mb-2 p-2"
          placeholder="message"
        />
        <button className="bg-slate-400 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
