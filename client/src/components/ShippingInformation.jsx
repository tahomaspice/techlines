import { Box, Heading, VStack, FormControl, Flex, Stack, Text, Radio, RadioGroup, Tooltip } from '@chakra-ui/react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import { useDispatch } from 'react-redux';
import { setExpress } from '../redux/actions/cartActions';        
import { useState } from 'react';
import { setShippingAddress, setShippingAddressError } from '../redux/actions/orderActions';


const ShippingInformation = () => {
    const dispatch = useDispatch();
    const [formStateChanged, setFormStateChanged] = useState(false)

    const setErrorState = (input, data) => {
        if (!input) {
            dispatch(setShippingAddress(data));
        }
        if((!formStateChanged && !input) || (formStateChanged && input)) {
            return;
        } else {
            setFormStateChanged(input)
            dispatch(setShippingAddressError(input))
        }
    };

    return (
    <Formik
        initialValues = {{ address1: '', address2: '  ', city: '', state: '', zipcode: ''}}
        validationSchema={Yup.object({
        address1: Yup.string().required('Required').min(2, 'Too Short'),
        address2: Yup.string('').notRequired(),
        city: Yup.string().required('Required').min(2, 'Too Short'),
        state: Yup.string().required('Required').min(2, 'Too Short'),
        zipcode: Yup.string().required('Required').min(2, 'Too Short'),
    })}>
    {(formik) => (
      <VStack as='form'>
        <FormControl 
         onChange={
            Object.keys(formik.errors).length === 0 && Object.keys(formik.touched).length >= 2 
            ? setErrorState(false, formik.values) 
            : setErrorState(true)
         }>
            <TextField name='address1' placeholder='Street Address' label='Street Address' />
            <TextField name='address2' placeholder='Street Address 2' label='Street Address 2' />
           
            <Flex>
                <Box flex='1' mr='10'>
                    <TextField name='city' placeholder='City' label='City' />
                </Box>
                <Box flex='1' mr='10'>
                    <TextField name='state' placeholder='State' label='State' />
                </Box>
                <Box flex='1' mr='10'>
                    <TextField name='zipcode' placeholder='Zipcode' label='Zipcode' />
                </Box>
            </Flex>            
        </FormControl>

        <Box w='100%' h='180px' pr='5'>
            <Heading fontSize='2xl' fontWeight='extrabold' mb='10'>
                Shipping Method
            </Heading>
            <RadioGroup defaultValue = 'false' onChange={(e) => {
                dispatch(setExpress(e));
            }}>
            <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
                <Stack pr='10' spacing={{base: '8', md: '10' }} flex='0.75'>
                    <Box>
                        <Radio value='true'>
                            <Text fontWeight='bold'>Express $14.99</Text>
                            <Text > Ships right away!</Text>
                        </Radio>
                    </Box>
                    <Stack spacing='6'>Express</Stack>
                </Stack>
                <Radio value='false'>
                    <Tooltip label='Free Shipping on Orders over $200'>
                        <Box>
                            <Text fontWeight='bold'>Standard $4.99</Text>
                            <Text > Ships in 2-3 days</Text>
                        </Box>
                    </Tooltip>
                </Radio>
            </Stack>
            </RadioGroup>
          </Box>
        </VStack>
        )}
    </Formik>
  );
};

export default ShippingInformation
