/** @type {import('postcss-load-config').Config} */

// For Tailwind v4
// const config = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };

// For Tailwind v3
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
