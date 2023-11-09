import {
  Container,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import GlobalControl from './GlobalControl';
import styles from '../styles/Main.module.css';

const Main = () => {
  const variant = useColorModeValue("solid", "outline");
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />);
  // const bgColor = useColorModeValue('white', 'rgba(71, 67, 67, 0.383)');
  const bgColor = useColorModeValue('white', 'var(--chakra-colors-chakra-body-bg)');
  const headingHoverColor = useColorModeValue('black', 'white');
  return (
    <main className={styles.main}>
      <Container
        // backgroundColor={bgColor}
        maxW='calc(var(--max-content-width) - 3.2rem)'
        px={{ base: '2rem', lg: '1.6rem' }}
        py={{ base: '0.5rem', md: '0.8rem', lg: '1.2rem' }}
        my={{ base: '1rem', md: '1.5rem', lg: '2rem' }}
        minH='calc(100vh - 13.5rem)'
      >
        <h2 className={styles.title}>Probability Simulator</h2>
        <Text fontSize='2xl' textAlign={'center'}>
          Generate random numbers based on discrete or continuous probabilities.
        </Text>
        <GlobalControl />
      </Container>
    </main>
  );
};

export default Main;