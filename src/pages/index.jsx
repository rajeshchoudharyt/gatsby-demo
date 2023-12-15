import * as React from "react";
import SignupForm from "./components/signupForm";
import Navbar from "./components/Navbar";

export const Head = () => <title>Home Page</title>;

const footerContent = [
    ["Our Marketplaces", ["Jobs Marketplace", "Resources Marketplace"]],
    ["Partners", ["Referral workflow", "Contract management", "How to"]],
    ["Company", ["Our story", "FAQ", "Contact us", "Partner with us"]],
];

export default function Index() {
    return (
        <main className="text-white text-sm">
            {/* Header Section */}
            <div className="relative w-full h-fit bg-white">
                <div
                    className="absolute top-0 h-[100%] w-3/4 bg-gradient-to-br from-medium to-dark"
                    style={{
                        clipPath: "circle(70% at 30% 50%)",
                    }}></div>
                <Navbar />
                <div className="flex">
                    <SignupForm />
                    <div className="relative my-auto w-1/2 h-full">
                        <div className="relative flex justify-center items-center p-4 w-[30rem] h-[30rem] bg-transparent shadow-topLeft shadow-dark/70 rounded-full">
                            <div className="w-full h-full bg-transparent border-2 border-dark/50 rounded-full p-4">
                                <div className="w-full h-full bg-opacity-40 bg-white rounded-full p-3">
                                    <div
                                        className="w-full h-full bg-transparent border-4 border-white rounded-full p-1
                                flex justify-center items-end">
                                        <div className="flex justify-center items-center text-black w-5/6 h-5/6 bg-white rounded-full mb-4">
                                            <img src="" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section - Tab */}
            <div className="w-full flex flex-col justify-center items-center text-center py-16 gap-y-8">
                <h2 className="text-black text-xl font-bold max-w-3xl">
                    Instead of sending your resume into oblivion, ePosting helps
                    you connect with users and receive updates on your referral
                    requests.
                </h2>

                <div className="flex gap-x-4 w-full p-12 text-black">
                    {[1, 2, 3].map((key) => (
                        <div
                            key={key}
                            className="flex flex-col justify-center items-center cursor-pointer h-fit w-1/3 text-center gap-y-4 p-4 border-2 border-light rounded-md
                                     fill-white hover:fill-light hover:text-white group bg-white hover:bg-light">
                            <svg
                                viewBox="0 0 512 512"
                                className="w-12 h-12 fill-inherit bg-light rounded p-2.5 pl-3.5 group-hover:bg-white">
                                <g>
                                    <path d="M490.667,234.667H448V192c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333v42.667h-42.667   c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h42.667V320c0,11.782,9.551,21.333,21.333,21.333   c11.782,0,21.333-9.551,21.333-21.333v-42.667h42.667c11.782,0,21.333-9.551,21.333-21.333   C512,244.218,502.449,234.667,490.667,234.667z" />
                                    <circle cx="192" cy="128" r="128" />
                                    <path d="M192,298.667c-105.99,0.118-191.882,86.01-192,192C0,502.449,9.551,512,21.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C383.882,384.677,297.99,298.784,192,298.667z" />
                                </g>
                            </svg>
                            <h3 className="text-lg font-semibold">
                                Lorem Ipsum
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry typesetting industry
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section - Content */}
            <div className="flex flex-col w-full text-black p-12 gap-y-36">
                {[1, 2, 3].map((key) => (
                    <div
                        key={key}
                        className="flex flex-row odd:flex-row-reverse">
                        <div className="flex justify-center items-center my-auto w-1/2 h-fit">
                            <img src="" alt="img" />
                        </div>
                        <div className="flex flex-col gap-y-8 w-1/2 h-fit">
                            <p className="bg-gray-100 w-fit rounded-full p-2">
                                Lorem Ipsum lorem Ipsum
                            </p>
                            <p className="text-4xl font-bold">
                                Find your dream job on our
                                <span className="text-light"> marketplace</span>
                            </p>
                            <p className="text-xs">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry typesetting industry
                                industry typesetting industry
                            </p>
                            <div className="flex gap-x-4">
                                <button
                                    className="px-4 p-2 w-fit bg-light border border-light text-white rounded-3xl
                                            hover:bg-white hover:text-light">
                                    Lorem Ipsum Ipsum
                                </button>
                                <button
                                    className="px-4 p-2 w-fit bg-white border border-light text-black rounded-3xl
                                            hover:bg-light hover:text-white">
                                    Lorem Ipsum
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="flex flex-col justify-center items-center text-center w-full">
                {/* Footer Section - Top */}
                <div className="relative top-12 flex justify-between overflow-clip bg-white w-11/12 h-fit rounded-md">
                    <div className="absolute h-[150%] aspect-square bg-light rounded-full -translate-x-1/2 -translate-y-[50%]"></div>
                    <div className="absolute h-[200%] aspect-square bg-light rounded-full -translate-x-1/2 -translate-y-[15%] left-full"></div>

                    <div
                        className="relative text-black flex flex-col items-center p-12 gap-y-2 rounded-md w-full h-full
                                    bg-gradient-to-tr from-white to-light/30 bg-opacity-90">
                        <h2 className="text-xl font-bold">
                            Join us to reimagine the way we approach referrals
                        </h2>
                        <p className="text-sm font-semibold">
                            An ecosystem of technologies, resources and partners
                            that empowers each one of our users to be successful
                        </p>
                        <button
                            className="mt-6 px-4 p-2 w-fit bg-medium border border-medium text-white rounded-3xl
                        hover:bg-transparent hover:text-medium">
                            Create an account
                        </button>
                    </div>
                </div>

                {/* Footer Section - Bottom */}
                <div className="flex flex-col text-left text-white bg-medium w-full px-20 pt-12">
                    <div className="flex py-12">
                        <div className="flex justify-between w-1/2">
                            {footerContent.map((col) => (
                                <div
                                    key={col[0]}
                                    className="flex flex-col gap-y-6">
                                    <h6 className="text-lg font-semibold">
                                        {col[0]}
                                    </h6>
                                    <ul className="flex flex-col gap-y-4">
                                        {col[1].map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col w-1/2 pl-32 gap-y-4">
                            <p className="text-xl font-semibold">
                                Get In Touch
                            </p>
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="p-2 px-6 max-w-sm rounded-md text-black"
                            />
                        </div>
                    </div>
                    <hr className="opacity-50" />
                    <div className="flex justify-between items-center py-8">
                        <p>ePosting</p>
                        <div className="flex gap-x-4">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                        </div>
                        <p>2023 ePosting Corp. all rights reserved</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
