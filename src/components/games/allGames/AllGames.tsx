import ProductCard from '@/components/helpers/product-card';
import { IGamesList } from '@/interfaces/context/IAPIService';
import React from 'react'
import styles from './AllGames.module.scss'

const AllGames = ({ gamesList }: {gamesList: IGamesList[]}) => {
  
  return (
    <div className={styles.container}>
      {gamesList && (
        <div className={styles.products}>
         {gamesList.map((game, i) => (
           <ProductCard key={i} game={game} />
           ))}
        </div> 
      )}
    </div>
  )
}

export default AllGames