import { useRouter } from "next/router";
import { Box, Container, Heading, IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import styles from '../styles/Header.module.css';

const Header = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const tips = useColorModeValue('Dark mode', 'Light mode');
  const variant = useColorModeValue("solid", "outline");
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />);
  const bgColor = useColorModeValue('#fdfdf9', '#212838');
  const headingHoverColor = useColorModeValue('black', 'white');
  return (
    <header className={styles.container} style={{ backgroundColor: bgColor }}>
      <Container
        maxW='var(--max-content-width)'
        px={{ base: '2rem', lg: '1.6rem' }}
        py={{ base: '0.5rem', md: '0.8rem', lg: '1.2rem' }}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box as="a" onClick={() => router.reload()} cursor='pointer'>
          <Heading
            as='h1'
            size={{ base: 'md', lg: 'lg' }}
            fontFamily='Trebuchet MS'
            _hover={{ color: headingHoverColor }}
          >
            Probability Simulator
          </Heading>
        </Box>
        <Tooltip label={tips}>
          <IconButton
            aria-label="toggle color theme"
            icon={icon}
            variant={variant}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Container>
    </header>
  );
};

export default Header;