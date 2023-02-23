/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "739px" },
      md: { min: "740px", max: "1023px" },
      lg: { min: "1024px", max: "1280px" },
      "2xl": { min: "1281px" },
    },
  },
  plugins: [],
  extend: {
    colors: {
      // primary: "#1A94FF",
      // header: "#0D5CB6",
      // yellow: "#FDD835",
      // gia: "#EEEEEE",
      // xanh: "#00AB56",
      do: "#FF424E",
      dautrang: "#189EFF",
    },
  },
};
