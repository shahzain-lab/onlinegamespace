import React from 'react'
import styles from './Recent.module.scss';
import { Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react'
import RecentCard from '@/components/helpers/recent-card';
import ProductCard from '@/components/helpers/product-card';
import { IGamesList } from '@/interfaces/context/IAPIService';

const Recent = ({gamesList}: {gamesList: IGamesList[]}) => { 
  const [ isLessThan992 ] = useMediaQuery('(max-width: 992px)');
  const [ isGreaterThan1338 ] = useMediaQuery('(min-width: 1338px)');

  return (
    <div className={styles.recent}>
      <Text fontSize='30px' color={'#aaaaaa'}>Recently Added</Text>

      <Grid mt={15} gap={3} templateColumns={['100%', '100%', '100%', '70% 30%']}>
        {gamesList && gamesList.length && (
         <GridItem colSpan={1} className={styles.recent_cards}>
           {gamesList.slice(20, (isLessThan992 || isGreaterThan1338) ? 27 : 26).map((game, i) => (
             <RecentCard key={i} game={game} />
           ))}
         </GridItem>
        )}
        {gamesList && gamesList.length && (
        <GridItem colSpan={-1}>
          {isLessThan992 && <Text fontSize={[30]} mb={4} mt={6} color={'#aaaaaa'}>Enjoy Free Games</Text>}
          <Grid 
          templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', '1fr']}
          templateRows={['1fr', '1fr', '1fr', '1fr']}
          gap={3}
          // className={styles.recent_ads}
          >
            {gamesList.slice(10, (isLessThan992 || isGreaterThan1338) ? 14 : 15).map((game, i) => (
              <ProductCard key={i} game={game} noBody={true} />
            ))}
          </Grid>
        </GridItem>
        )}
      </Grid>
    </div>
  )
}

export default Recent