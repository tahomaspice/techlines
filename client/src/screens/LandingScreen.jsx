import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { GiTechnoHeart } from 'react-icons/gi';

export const LandingScreen = () => (
  <Box maxW="8xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
      <Box
        width={{ lg: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }} >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Flex alignItems='center'>
                <Icon as={GiTechnoHeart} h={12} w={12} color={useColorModeValue('orange.500', 'orange.300')} />
                <Text fontSize='3xl' fontWeight='bold'>
                    Artisan Sauces
                </Text>
            </Flex>
            
            <Heading size="md" fontWeight="normal">
              From our own Pepper Farm
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link as={ReactLink} to='/products' color={useColorModeValue('orange.500', 'orange.300')} fontWeight="bold" fontSize="lg">
              Discover now
            </Link>
            <Icon color={useColorModeValue('orange.500', 'orange.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src='../images/HEROProducts.jpg' alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="550px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        
      </Flex>
    </Stack>
  </Box>
)
export default LandingScreen;