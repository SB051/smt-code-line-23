import YWlogo from "@assets/images/YWlogo.png";
import SMTlogo from "@assets/images/SMTlogo-gray.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 h-[60px] w-full bg-transparent">
        <div className="absolute left-4 my-2 flex h-[60px] space-x-5">
          <img alt="YW Logo" src={YWlogo} className="h-[50px]" />
          <img alt="SMT Logo" src={SMTlogo} className="h-[50px]" />
        </div>
        <div className="hidden md:absolute md:right-4 md:top-0 md:my-[16px] md:flex md:space-x-8 md:text-lg md:text-white">
          <Link to={"/"}>หน้าแรก</Link>
          <a href="https:www.google.com/" className="flex">
            Openchat{" "}
            <svg
              className="ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
              </g>
            </svg>
          </a>
          <Link to={"/random"}>คำใบ้พี่รหัส</Link>
          <lable>{props.name}</lable>
        </div>
        <button
          className="absolute right-4 my-[12px] flex h-[36px] w-[36px] items-center justify-center rounded-md border border-neutral-600 text-neutral-400 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed right-0 top-0 z-40 h-full w-full bg-white md:hidden`}
        >
          <div className="flex h-full flex-col">
            <div className="flex justify-end pr-4 pt-4">
              <button
                className="text-3xl text-black hover:text-gray-500 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="flex h-full flex-col items-center justify-center">
              <Link
                to={"/"}
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-2xl font-bold text-gray-700 hover:text-gray-900"
              >
                หน้าแรก
              </Link>
              <a
                href="https:www.google.com/"
                onClick={() => setIsMenuOpen(false)}
                className="flex py-4 text-2xl  text-gray-700 hover:text-gray-900"
              >
                Openchat{" "}
                <svg
                  className="ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
                  </g>
                </svg>
              </a>
              <Link
                to={"/random"}
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-2xl font-bold text-gray-700 hover:text-gray-900"
              >
                คำใบ้พี่รหัส
              </Link>
              <lable className="py-4 text-2xl font-bold text-gray-700 hover:text-gray-900">
                {props.name}
              </lable>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
