import ProductCard from '@/components/helpers/product-card';
import { IGamesList } from '@/interfaces/context/IAPIService';
import { SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import styles from './AllGames.module.scss'

const AllGames = ({ gamesList }: {gamesList: IGamesList[]}) => {
  
  return (
    <div className={styles.container}>
      {gamesList && (
        <SimpleGrid mt={15} gap={5} columns={[1, 2, 3, 4]}>
         {gamesList.slice(1, 100).map((game, i) => (
           <ProductCard key={i} game={game} />
           ))}
        </SimpleGrid> 
      )}
    </div>
  )
}

export default AllGames