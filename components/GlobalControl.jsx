import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';

const GlobalControl = () => {
  // const bgColor = useColorModeValue('white', 'rgb(1, 22, 39)');
  const bgColor = useColorModeValue('white', null);
  return (
    <Wrap w='100%' mx='auto' marginTop='1rem' spacing='2rem' px='1rem' py='1rem' borderWidth='1px' borderRadius='8px' borderColor='white' backgroundColor={bgColor}>
      <WrapItem>
        <FormControl>
          <FormLabel>Number of outputs</FormLabel>
          <NumberInput maxW='8rem' defaultValue={1} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>How many random numbers you want to generate.</FormHelperText>
        </FormControl>
      </WrapItem>

      <WrapItem>
        <FormControl>
          <FormLabel>Allow Duplicates</FormLabel>
          <Switch id='allow-duplicates' defaultChecked />
          <FormHelperText>Do you want your outputs to contain duplicate numbers.</FormHelperText>
        </FormControl>
      </WrapItem>

      <WrapItem>
        <FormControl>
          <FormLabel>Seed</FormLabel>
          <NumberInput maxW={'8rem'}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>Optional: specify a seed for the random numbers if you wish.</FormHelperText>
        </FormControl>
      </WrapItem>
    </Wrap>
  );
};

export default GlobalControl;