import * as React from "react";

export default function SignupForm() {
    return (
        <div className="relative py-8 w-1/2 px-16">
            <h1 className="text-5xl tracking-wide">
                {"Join the world's fastest growing marketplace"}
            </h1>
            <div className="flex flex-col w-4/5 max-w-sm my-8 gap-y-4">
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="eposting@gmail.com"
                        className="p-1.5 rounded text-black"
                    />
                    <p className="text-xs leading-3">
                        error error error error error error error error error
                        error
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="p-1.5 rounded text-black"
                    />
                    <p className="text-xs leading-3">
                        error error error error error error error error error
                        error error error error error error error error error
                    </p>
                </div>
                <div className="flex flex-col py-2 gap-y-3">
                    <div className="flex justify-start items-center">
                        <input
                            type="checkbox"
                            id="terms&condition"
                            className="w-4 h-4 cursor-pointer border-2 text-white border-white border-opacity-70 rounded appearance-none checked:bg-white"
                        />
                        <label
                            htmlFor="terms&condition"
                            className="cursor-pointer pl-2 select-none">
                            I have read and accept the terms and condition
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Sign up"
                        className="w-full bg-light p-1.5 rounded-3xl"
                    />
                </div>
                <div className="flex justify-between items-center w-full pb-2">
                    <hr className="w-2/5" /> <p>or</p>
                    <hr className="w-2/5" />
                </div>
                <div className="flex gap-x-3 text-xs">
                    <button className="py-2 text-black bg-white rounded-3xl w-1/2">
                        Sign up with Google
                    </button>
                    <button className="py-2 text-black bg-white rounded-3xl w-1/2">
                        Sign up with LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
}
