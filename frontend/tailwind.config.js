// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */

export default {

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

theme: {

extend: {

colors: {

brand: {
dark: "#0B4F79",
primary: "#2F67B1",
light: "#4FA3FF"
}

}

}

},

plugins: [],

}