// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '85.75rem',
  '2xl': '96em',
}

// 3. extend the theme
const theme = extendTheme({ config, breakpoints });

export default theme;