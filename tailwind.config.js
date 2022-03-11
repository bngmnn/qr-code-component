function hslColor(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        background: hslColor('--color-background'),
        headline: hslColor('--color-headline'),
        copy: hslColor('--color-copy'),
      },
      fontSize: {
        base: '15px',
      }
    },
  },
  plugins: [],
}
