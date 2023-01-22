import React from 'react'
import styles from './Recent.module.scss';
import { Text } from '@chakra-ui/react'
import RecentCard from '@/components/helpers/recent-card';
import ProductCard from '@/components/helpers/product-card';
import { IGamesList } from '@/interfaces/context/IAPIService';

const Recent = ({gamesList}: {gamesList: IGamesList[]}) => { 
  
  return (
    <div className={styles.recent}>
      <Text fontSize='30px' color={'#aaaaaa'}>Recently Added</Text>

      <div className={styles.recent_utility}>
        {gamesList && gamesList.length && (
         <div className={styles.recent_cards}>
           {gamesList.slice(20, 26).map((game, i) => (
             <RecentCard key={i} game={game} />
           ))}
         </div>
        )}
        {gamesList && gamesList.length && (
        <div className={styles.recent_ads}>
           {gamesList.slice(10, 14).map((game, i) => (
             <ProductCard key={i} game={game} noBody={true} />
           ))}
        </div>
        )}
      </div>
    </div>
  )
}

export default Recent