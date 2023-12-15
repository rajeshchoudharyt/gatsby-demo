import * as React from "react";

export default function Navbar() {
    return (
        <nav
            id="navbar"
            className="relative flex justify-between px-12 items-center bg-transparent w-full h-14">
            <div>ePosting</div>
            <ul className="flex gap-x-6">
                <li>Our Products</li>
                <li>Partners</li>
                <li>Help</li>
            </ul>
            <button className="py-1.5 px-4 border border-dark text-dark font-semibold rounded-3xl">
                Login
            </button>
        </nav>
    );
}
