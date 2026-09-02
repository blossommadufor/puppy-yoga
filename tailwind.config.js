/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'olive': '#7C8D73',
                'warm': '#BFAF9B',
                'soft': '#C98F73',
            },
        },
    },
    plugins: [],
}