const plugin = require('tailwindcss/plugin')

const material = plugin(
  ({ addBase, addUtilities }) => {
    // addBase({
    //   ":root": {
    //     "--md-source": "hsl(264, 67%, 35%)",
    //     "--md-ref-palette-primary0": "0 0% 0%"
    //   },
    //   "@media (prefers-color-scheme: dark)": {
    //     ":root": {
    //       "--test": "blue"
    //     }
    //   }
    // })

    addUtilities({
      '.display-large': {
        fontWeight: 400,
        fontSize: 57,
        lineHeight: '64px',
        letterSpacing: -0.25,
      },
      '.display-medium': {
        fontWeight: 400,
        fontSize: 45,
        lineHeight: '52px',
        letterSpacing: 0,
      },
      '.display-small': {
        fontWeight: 400,
        fontSize: 36,
        lineHeight: '44px',
        letterSpacing: 0,
      },
      '.headline-large': {
        fontWeight: 400,
        fontSize: 32,
        lineHeight: '40px',
        letterSpacing: 0,
      },
      '.headline-medium': {
        fontWeight: 400,
        fontSize: 28,
        lineHeight: '36px',
        letterSpacing: 0,
      },
      '.headline-small': {
        fontWeight: 400,
        fontSize: 24,
        lineHeight: '32px',
        letterSpacing: 0,
      },
      '.body-large': {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: 0.5,
      },
      '.body-medium': {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.25,
      },
      '.body-small': {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: 0.4000000059604645,
      },
      '.label-large': {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.10000000149011612,
      },
      '.label-medium': {
        fontWeight: 500,
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: 0.5,
      },
      '.label-small': {
        fontWeight: 500,
        fontSize: 11,
        lineHeight: '16px',
        letterSpacing: 0.5,
      },
      '.title-large': {
        fontWeight: 400,
        fontSize: 22,
        lineHeight: '28px',
        letterSpacing: 0,
      },
      '.title-medium': {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: 0.15000000596046448,
      },
      '.title-small': {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.10000000149011612,
      },
      '.bg-surface-light-1': {
        background:
          'linear-gradient(0deg, rgba(111, 70, 185, 0.05), rgba(111, 70, 185, 0.05)), #FFFBFF',
      },
      '.bg-surface-light-2': {
        background:
          'linear-gradient(0deg, rgba(111, 70, 185, 0.08), rgba(111, 70, 185, 0.08)), #FFFBFF',
      },
      '.bg-surface-light-3': {
        background:
          'linear-gradient(0deg, rgba(111, 70, 185, 0.11), rgba(111, 70, 185, 0.11)), #FFFBFF',
      },
      '.bg-surface-light-4': {
        background:
          'linear-gradient(0deg, rgba(111, 70, 185, 0.12), rgba(111, 70, 185, 0.12)), #FFFBFF',
      },
      '.bg-surface-light-5': {
        background:
          'linear-gradient(0deg, rgba(111, 70, 185, 0.14), rgba(111, 70, 185, 0.14)), #FFFBFF',
      },
      '.bg-surface-dark-1': {
        background:
          'linear-gradient(0deg, rgba(211, 187, 255, 0.05), rgba(211, 187, 255, 0.05)), #1D1B1E',
      },
      '.bg-surface-dark-2': {
        background:
          'linear-gradient(0deg, rgba(211, 187, 255, 0.08), rgba(211, 187, 255, 0.08)), #1D1B1E',
      },
      '.bg-surface-dark-3': {
        background:
          'linear-gradient(0deg, rgba(211, 187, 255, 0.11), rgba(211, 187, 255, 0.11)), #1D1B1E',
      },
      '.bg-surface-dark-4': {
        background:
          'linear-gradient(0deg, rgba(211, 187, 255, 0.12), rgba(211, 187, 255, 0.12)), #1D1B1E',
      },
      '.bg-surface-dark-5': {
        background:
          'linear-gradient(0deg, rgba(211, 187, 255, 0.14), rgba(211, 187, 255, 0.14)), #1D1B1E',
      },
    })
  },
  {
    theme: {
      colors: {
        palettes: {
          primary: {
            0: '#000000',
            5: '#19003E',
            10: '#260059',
            15: '#380961',
            20: '#3F0689',
            25: '#4B1B94',
            30: '#572BA0',
            35: '#6338AC',
            40: '#6F46B9',
            50: '#8960D4',
            60: '#A37AF1',
            70: '#BC99FF',
            80: '#D3BBFF',
            90: '#EBDCFF',
            95: '#F7EDFF',
            98: '#FEF7FF',
            99: '#FFFBFF',
            100: '#FFFFFF',
          },
          secondary: {
            0: '#000000',
            5: '#140E1F',
            10: '#1F182A',
            15: '#2B2234',
            20: '#342D40',
            25: '#3F384C',
            30: '#4B4358',
            35: '#574F64',
            40: '#635B70',
            50: '#7C738A',
            60: '#968DA4',
            70: '#B1A7BF',
            80: '#CDC2DB',
            90: '#EADEF8',
            95: '#F7EDFF',
            98: '#FEF7FF',
            99: '#FFFBFF',
            100: '#FFFFFF',
          },
          tertiary: {
            0: '#000000',
            5: '#240610',
            10: '#32101B',
            15: '#3F1A21',
            20: '#4A2530',
            25: '#57303A',
            30: '#643B46',
            35: '#714651',
            40: '#7F525D',
            50: '#9A6A76',
            60: '#B6838F',
            70: '#D39DAA',
            80: '#F1B7C5',
            90: '#FFD9E1',
            95: '#FFECEF',
            98: '#FFF8F8',
            99: '#FFFBFF',
            100: '#FFFFFF',
          },
          error: {
            0: '#000000',
            5: '#2D0001',
            10: '#410002',
            15: '#540003',
            20: '#690005',
            25: '#7E0007',
            30: '#93000A',
            35: '#A80710',
            40: '#BA1A1A',
            50: '#DE3730',
            60: '#FF5449',
            70: '#FF897D',
            80: '#FFB4AB',
            90: '#FFDAD6',
            95: '#FFEDEA',
            98: '#FFF8F7',
            99: '#FFFBFF',
            100: '#FFFFFF',
          },
          neutral: {
            0: '#000000',
            5: '#121014',
            10: '#1D1B1E',
            15: '#272528',
            20: '#323033',
            25: '#3D3A3E',
            30: '#48464A',
            35: '#545155',
            40: '#605D61',
            50: '#79767A',
            60: '#938F94',
            70: '#AEAAAE',
            80: '#CAC5CA',
            90: '#E6E1E6',
            95: '#F5EFF4',
            98: '#FEF8FC',
            99: '#FFFBFF',
            100: '#FFFFFF',
          },
          neutralVariant: {
            0: '#000000',
            5: '#121017',
            10: '#1D1A22',
            15: '#29242C',
            20: '#322F37',
            25: '#3E3A43',
            30: '#49454E',
            35: '#55515A',
            40: '#615D66',
            50: '#7A757F',
            60: '#948F99',
            70: '#AFA9B4',
            80: '#CBC4CF',
            90: '#E7E0EB',
            95: '#F6EEFA',
            98: '#FEF7FF',
            99: '#FFFBFF',
            100: '#FFFFFF',
          },
        },
        schemes: {
          light: {
            primary: '#6F46B9',
            primaryContainer: '#EBDCFF',
            onPrimary: '#FFFFFF',
            onPrimaryContainer: '#260059',
            secondary: '#635B70',
            secondaryContainer: '#EADEF8',
            onSecondary: '#FFFFFF',
            onSecondaryContainer: '#1F182A',
            tertiary: '#7F525D',
            tertiaryContainer: '#FFD9E1',
            onTertiary: '#FFFFFF',
            onTertiaryContainer: '#32101B',
            error: '#BA1A1A',
            errorContainer: '#FFDAD6',
            onError: '#FFFFFF',
            onErrorContainer: '#410002',
            outline: '#7A757F',
            background: '#FFFBFF',
            onBackground: '#1D1B1E',
            surface: '#FFFBFF',
            onSurface: '#1D1B1E',
            surfaceVariant: '#E7E0EB',
            onSurfaceVariant: '#49454E',
            inverseSurface: '#323033',
            inverseOnSurface: '#F5EFF4',
            inversePrimary: '#D3BBFF',
            shadow: '#000000',
            surfaceTint: '#6F46B9',
            outlineVariant: '#CBC4CF',
            scrim: '#000000',
            disabled: '#1D1B1E'
          },
          dark: {
            primary: '#D3BBFF',
            primaryContainer: '#572BA0',
            onPrimary: '#3F0689',
            onPrimaryContainer: '#EBDCFF',
            secondary: '#CDC2DB',
            secondaryContainer: '#4B4358',
            onSecondary: '#342D40',
            onSecondaryContainer: '#EADEF8',
            tertiary: '#F1B7C5',
            tertiaryContainer: '#643B46',
            onTertiary: '#4A2530',
            onTertiaryContainer: '#FFD9E1',
            error: '#FFB4AB',
            errorContainer: '#93000A',
            onError: '#690005',
            onErrorContainer: '#FFDAD6',
            outline: '#948F99',
            background: '#1D1B1E',
            onBackground: '#E6E1E6',
            surface: '#1D1B1E',
            onSurface: '#CAC5CA',
            surfaceVariant: '#49454E',
            onSurfaceVariant: '#CBC4CF',
            inverseSurface: '#E6E1E6',
            inverseOnSurface: '#1D1B1E',
            inversePrimary: '#6F46B9',
            shadow: '#000000',
            surfaceTint: '#D3BBFF',
            outlineVariant: '#49454E',
            scrim: '#000000',
            disabled: '#1D1B1E'
          },
        },
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        2: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
        4: '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)',
        5: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '28px',
        full: '100px',
      },
      extend: {
        opacity: {
          hovered: '0.08',
          focused: '0.12',
          pressed: '0.12',
          dragged: '0.16',
          'disabled-content': '0.38',
          'disabled-container': '0.12'
        },
      },
    },
  }
)

module.exports = material
