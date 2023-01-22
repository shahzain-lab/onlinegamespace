import GameLeftDetail from '@/components/games/pageDetails/GameLeftDetail'
import GameRightDetails from '@/components/games/pageDetails/GameRightDetails'
import { IGameDetails, IGamesList } from '@/interfaces/context/IAPIService'
import { ftpRequestConfig } from '@/services/free-to-play.config'
import { Main } from '@/templates/Main'
import { Meta } from '@/templates/Meta'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import axios from 'axios'
import { GetStaticPropsContext } from 'next'
import React from 'react'

const Games = ({game}: {game: string}) => {
  const _gamesList = JSON.parse(game) as IGameDetails;

  return (
    <Main
      meta={
      <Meta
        title={_gamesList?.title || 'game title....'}
        description={_gamesList?.short_description || 'game description....'}
      />
    }
  >
    <Box px={90}>
        {game && (
          <>
            <Grid my={10} templateColumns={'repeat(12, 1fr)'} gap={6}>
              <GridItem colSpan={5}><GameLeftDetail game={_gamesList} /></GridItem>
              <GridItem colStart={6} colEnd={-1}><GameRightDetails game={_gamesList} /></GridItem>
            </Grid>   <Box borderBottom='.5px solid #424141' />
            <Box my={3}>
            <Text fontSize={'24px'} color='#aaaaaa'>Games like {_gamesList.title}</Text>

            </Box>
          </>
        )}
    </Box>
    </Main>
  )
}

export default Games


// get ID's
export async function getStaticPaths() {
  const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';

  try{
    const getGames = await axios({
      ...ftpRequestConfig,
      url: `${FTP_BASE_URL}/api/games`
    })
    const paths = getGames?.data?.map((game: IGamesList) => {
      return {params: { game: game.id }}
    });

    return { paths, fallback: false }

  } catch(err) {
    return { paths: null }
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const game_id = context?.params?.game as string;

  const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';

  try{
    const getGames = await axios({
      ...ftpRequestConfig,
      url: `${FTP_BASE_URL}/api/game?id=${game_id}`
    })
    return {
      props: {
        gamesList: JSON.stringify(getGames.data) 
      }
    }
  } catch(err) {
    return {
      props: {
        header: err,
        gamesList: null
      }
    }
  }
}