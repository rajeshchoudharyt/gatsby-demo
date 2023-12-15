/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        extend: {
            colors: {
                light: "#7461ed",
                dark: "#5933ab",
                medium: "#554bb3",
            },
            boxShadow: {
                topLeft: "-1px -1px 1px 1px",
            },
        },
    },
    plugins: [],
};
