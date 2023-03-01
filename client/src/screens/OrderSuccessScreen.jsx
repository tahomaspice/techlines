import { Button, Alert, AlertTitle, AlertIcon, Wrap, useToast, Stack, } from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const OrderSuccessScreen = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    const logoutHandler = () => {
        dispatch(logout())
        toast({ description: 'Logged out!', status: 'success', isClosable: true });
        navigate('/products');
    };
    return (
    <Wrap justify='center' direction='column' align='center' mt='20px' minH='50vh'>
        <Alert status='success' variant='subtle' flexDirection='column' alignItems='center' 
        justifyContent='center' textAlign='center' height='auto'>
            <AlertIcon boxSize='55px' />
            <AlertTitle pt='8px' fontSize='xl'>
                Payment Successful!
            </AlertTitle>
            
            <Stack mt='30px' minW='200px'>
                
                <Button colorScheme='teal' variant='outline' as={ReactLink} to='/your-orders'>
                    Your Order
                </Button>
                <Button colorScheme='teal' variant='outline' as={ReactLink} to='/products'>
                    Products
                </Button>
                <Button colorScheme='teal' variant='outline' onClick={logoutHandler}>
                    Log Out
                </Button>

            </Stack>
        </Alert>
    </Wrap>
            
  );
};

export default OrderSuccessScreen;