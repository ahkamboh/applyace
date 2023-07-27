/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      "minnn-mobile": { max: "290px" },
      "minn-mobile": { max: "330px" },
      "min-mobile": { max: "500px" },
      "mx-mobile": { max: "640px" },
      "2mx-mobile": { max: "770px" },
      "laptop": { max: "1024px" },
      "xl-laptop": { max: "1280px" },
      "xll-laptop": { max: "1199px" },    
      "2xl-laptop": { max: "1560px" },
      "md": { min: "768px" },
      "sm": { min: "640px" },
      "2min-laptop": { min: "1560px" },
    },
    fontFamily: { 
      poppins: ["poppins", "system-ui"],
      Jost: ["Jost", "system-ui"],
    },
  }
};
