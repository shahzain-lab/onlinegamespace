import GameLeftDetail from '@/components/games/pageDetails/GameLeftDetail'
import GameRightDetails from '@/components/games/pageDetails/GameRightDetails'
import Recommand from '@/components/home/recommand/Recommand'
import { IGameDetails, IGamesList } from '@/interfaces/context/IAPIService'
import { ftpRequestConfig } from '@/services/free-to-play.config'
import { Main } from '@/templates/Main'
import { Meta } from '@/templates/Meta'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import { GetStaticPropsContext } from 'next'
import React from 'react'

const Games = ({game, gameList}: {game: IGameDetails; gameList: IGamesList[]}) => {

  return (
    <Main
      meta={
      <Meta
        title={'game title....'}
        description={'game description....'}
      />
    }
  >
    <Box px={[5, 15, 20, 90]}> 
     <>
        <Grid my={10} templateColumns={['1fr', '1fr', '1fr', 'repeat(12, 1fr)']} gap={6}>
          <GridItem colSpan={5}><GameLeftDetail game={game} /></GridItem>
          <GridItem colStart={6} colEnd={-1}><GameRightDetails game={game} /></GridItem>
        </Grid>   <Box borderBottom='.5px solid #424141' />
        <Box my={3} mb={20}>
            <Recommand title={`Games like ${game.title}`} gamesList={gameList} />
        </Box>
    </>
    </Box>
    </Main>
  )
}

export default Games


export async function getStaticProps(context: GetStaticPropsContext) {
  const game_id = context?.params?.game as string;

  const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';

  const getGameByID = await axios({
    ...ftpRequestConfig,
    url: `${FTP_BASE_URL}/api/game?id=${game_id}`
  })
  const gameIdData = getGameByID.data;
  
  const getGameByCategories = await axios({
    ...ftpRequestConfig,
    url: `${FTP_BASE_URL}/api/games`
  })
  const gameCatData = getGameByCategories.data;

  const _gamesByCategories = gameCatData?.filter((game: IGamesList) => game?.genre === gameIdData.genre);
  const gamesByCategories = _gamesByCategories.length >= 4 ? _gamesByCategories?.slice(0, 8) : gameCatData?.slice(0, 8);
  return {
      props: {
        game: gameIdData,
        gameList: gamesByCategories
      }
    }
}


// get ID's
export async function getStaticPaths() {
  const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';

    const getGames = await axios({
      ...ftpRequestConfig,
      url: `${FTP_BASE_URL}/api/games`
    })
    const data = getGames.data
    const paths = data?.map((game: IGamesList) => {
      return {params: { game: `${game.id}` }}
    });

    return { paths, fallback: true }
}
