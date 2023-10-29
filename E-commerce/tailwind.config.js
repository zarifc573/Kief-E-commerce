/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainText': '#FAFAFA',
        'Text1': '#7D8184',
        'black': '#000000',
        'Text3': '#FAFAFA',
        'brand': '#FF4040',
        'green': '#00FF66',
        'button': '#DB4444',
        'hover1': '#E07575',
        'hover2': '#A0BCE0',
      },
      maxWidth: {
        'container': '1170px',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'outer': '0px 1px 13px 0px rgba(0, 0, 0, 0.05)',
      }


    },
  },
  plugins: [],
}
