/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    extend: {
        screens: {
            xs: "500px",
        },
        gridTemplateColumns: {
            auto: "repeat(auto-fill, minmax(200px, 1fr))",
        },
    },
    plugins: [],
};
