/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}" ,"./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#000814", 

                secondary: "#001B35", 

                light: {
                    100: "#CFE8FF", 

                    200: "#A8D1FF", 

                    300: "#84B8F4", 

                },
                dark: {
                    100: "#0A1929", 

                    200: "#020F1C", 

                },
                accent: "#4F9EFF",
                // tabbar:"#4F9EFF"

            },


        },
    },
    plugins: [],
}