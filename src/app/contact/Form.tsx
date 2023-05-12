import React from 'react';

function Form() {
  return (
    <div className="antialiased bg-gray-100">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-6 w-full min-h-screen">
        <div className="bg-cyan-700 max-w-4xl p-8 rounded-xl shadow-lg text-white w-full md:w-1/2">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <span>+(000) 1234 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Contact: Nutriasoft@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Location: 11,Street 234, Venezuela</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-0 text-gray-600">
              <form className="flex flex-col space-y-4 p-4 sm:p-8">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Your Name
                  </label>
                </div>
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 outline-none rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 outline-none rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                </div>
                <div>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="w-full px-4 py-2 outline-none rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <button className="inline-block px-6 py-2 text-sm font-bold text-white uppercase rounded-lg bg-cyan-700 self-end">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;