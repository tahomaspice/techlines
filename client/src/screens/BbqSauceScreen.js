import { Center, Wrap, WrapItem, Spinner, Stack, Alert, AlertIcon, AlertDescription, AlertTitle,} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';



const BbqSauceScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products, category } = productList;

  useEffect(() => {
        if (products) {
            dispatch(getProducts());
        }
    }, []);
  
return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' empty-color='gray.200' color='orange.500' size='xl'/>
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>

      ) : (
      products.map((product) => (
        <WrapItem key={product.category} >
          <Center w='250px' h='550px'>
            <ProductCard product={product} />
          </Center>
        </WrapItem> 
    )))}
    </Wrap>

  );
};

export default BbqSauceScreen;