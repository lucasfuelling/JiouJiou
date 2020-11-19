module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    
    extend: {colors:{
      'brand-blue': '#1992d4',
    },
  }
  },
  variants: {
    backgroundColor: ['responsive', 'focus','hover','active']
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
