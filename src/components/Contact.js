import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-600 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600">
            Contact
          </p>
          <p className="py-6 text-teal-500">If you're looking to connect with a dynamic and motivated tech enthusiast with a drive to succeed, let's Chat!!!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/a1d9b077-20b4-403e-87ef-ef9845bcd287"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            enctype="multipart/form-data"
            target="_blank"
          >
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="p-2 bg-transparent border-2 rounded-md text-teal-500 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email*"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-teal-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Comment*"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-teal-500 focus:outline-none"
            ></textarea>

            <button className= "bg-gradient-to-r  from-cyan-500 to text-teal text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md font-burtons border hover:scale-110 duration-300 font-burtons shadow-2xl shadow-white-200 hover:shadow-cyan-500">
              Connect with Romy 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;