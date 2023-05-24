import { IGamesList } from '@/interfaces/context/IAPIService'
import { Grid, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../helpers/product-card'

const Discover = ({gamesList}: {gamesList: IGamesList[]}) => {
  return (
    <Stack py={8}>
       <Text fontSize='30px' color={'#aaaaaa'}>Discover</Text>
       <SimpleGrid spacing={8} columns={[1,2,3,4]}>
        {gamesList.slice(12,24).map((game ,i) => (
          <ProductCard key={i} game={game} noBody={true} />
        ))}
       </SimpleGrid>
    </Stack>
  )
}

export default Discover