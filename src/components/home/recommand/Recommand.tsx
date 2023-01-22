import React from 'react'
import { Box,  Icon, SimpleGrid, Text } from '@chakra-ui/react'
import ProductCard from '@/components/helpers/product-card';
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link';
import { IGamesList } from '@/interfaces/context/IAPIService';

const Recommand = ({title, gamesList, my}: {title: string; gamesList: IGamesList[], my?: string | number}) => {
  
  return (
    <Box w='100%' my={my}>
      <Text fontSize={[30]} color={'#aaaaaa'}>{title}</Text>
      {gamesList && (
        <SimpleGrid columns={[1, 2, 3, 4]} gap={15} mt={15}>
         {gamesList?.slice(0,8)?.map((game, i) => (
           <ProductCard key={i} game={game} />
           ))}
        </SimpleGrid> 
      )}
      <Link href={'/games'}>
        <Text
        float={'right'}
        fontSize='lg'
        color={'#aaaaaa'}
        display={'flex'}
        alignItems={'center'}
        p={2}
        mt={1}
        _hover={{cursor:'pointer', background: '#3a3f44', transition: '.2s ease-in'}}
        borderRadius='lg'
        >More Games <Icon pl={1} pt={1} as={FaArrowRight} /></Text>
      </Link>
    </Box>
  )
}

export default Recommand