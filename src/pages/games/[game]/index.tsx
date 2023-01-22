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

const Games = ({game, gameList}: {game: string; gameList: string}) => {
  const _game = JSON.parse(game) as IGameDetails;
  const _gamesList = JSON.parse(gameList) as IGamesList[];

  return (
    <Main
      meta={
      <Meta
        title={_game?.title || 'game title....'}
        description={_game?.short_description || 'game description....'}
      />
    }
  >
    <Box px={[5, 15, 20, 90]}> 
     <>
        <Grid my={10} templateColumns={['1fr', '1fr', '1fr', 'repeat(12, 1fr)']} gap={6}>
          <GridItem colSpan={5}><GameLeftDetail game={_game} /></GridItem>
          <GridItem colStart={6} colEnd={-1}><GameRightDetails game={_game} /></GridItem>
        </Grid>   <Box borderBottom='.5px solid #424141' />
        <Box my={3} mb={20}>
            <Recommand title={`Games like ${_game.title}`} gamesList={_gamesList} />
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
  
  const getGameByCategories = await axios({
    ...ftpRequestConfig,
    url: `${FTP_BASE_URL}/api/games`
  })
  const _gamesByCategories = getGameByCategories?.data?.filter((game: IGamesList) => game?.genre === getGameByID?.data?.genre);
  const gamesByCategories = _gamesByCategories.length >= 4 ? _gamesByCategories?.slice(0, 8) : getGameByCategories.data?.slice(0, 8);
  return {
      props: {
        game: JSON.stringify(getGameByID.data),
        gameList: JSON.stringify(gamesByCategories) 
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
    const paths = getGames?.data?.map((game: IGamesList) => {
      return {params: { game: game.id.toString() }}
    });

    return { paths, fallback: true }
}
