/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c7ffbe",
        secondary: "#0891B2",
        slate: {
          900: "#18181b",
          800: "#030303",
          700: "#21242d",
        },
        tile: "#080808",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundPosition: {
        "hero-mobile": "-250px",
      },
      backgroundImage: {
        "banner-profile": "url('/images/banner-profile.jpg')",
      },
    },
  },

  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },

  plugins: [],
};

/* html,
* {
	font-family: 'Articulat CF', sans-serif;
	margin: 0;
}

input:focus,
textarea:focus {
	outline: none;
}

:root {
	--primary-color: #c7ffbe;
	--primary-hover-color: #32f115;
	--primary-disabled-color: #5b8055;
	--secondary-color: #1243b0;
	--secondary-hover-color: #4c82fc;
	--secondary-disabled-color: #4c82fc;
	--success-color: #00997a;
	--success-hover-color: #00b894;
	--success-disabled-color: #00b894;
	--danger-color: #ff3838;
	--danger-hover-color: #fd7272;
	--danger-disabled-color: #fd7272;
	--info-color: #17c0eb;
	--info-hover-color: #18dcff;
	--info-disabled-color: #18dcff;
	--warning-color: #ff9f1a;
	--warning-hover-color: #ffaf40;
	--warning-disabled-color: #ffaf40;
	--border-radius: 15px;
	--topnav-height: 110px;
	--transition-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);


	--app-sidebar-color-bg: #272d89;
	--app-sidebar-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	--sidebar-width: 230px;
	--border-radius: 15px;
	--topnav-height: 110px;
	--transition-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
} */
