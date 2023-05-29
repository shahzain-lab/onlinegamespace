import { IGamesList } from '@/interfaces/context/IAPIService'
import React from 'react'
import styles from './AllGames.module.scss'
import Paginate from '@/components/helpers/paginate'

const AllGames = ({ gamesList }: {gamesList: IGamesList[]}) => {
  
  return (
    <div className={styles.container}>
      <Paginate 
        itemPerPage={32}
        items={gamesList}
      />
    </div>
  )
}

export default AllGames