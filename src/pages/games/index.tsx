import AllGames from '@/components/games/allGames/AllGames'
import LatestPlayed from '@/components/games/latest/Latest'
import { IGamesList } from '@/interfaces/context/IAPIService'
import { ftpRequestConfig } from '@/services/free-to-play.config'
import { Main } from '@/templates/Main'
import { Meta } from '@/templates/Meta'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const Games = ({ gamesList }: {gamesList: IGamesList[]}) => {
  // const _gamesList = JSON.parse(gamesList) as IGamesList[];

  return (
      <Main
      meta={
        <Meta
        title="Free Epic Games - Free TO Play"
        description="Free TO Play Online Browser and Desktop Based Games"
         />
      }
    >
      {gamesList && (
        <Box px={[5, 15, 20, 90]}>
            <Text mt={'24px'} mb={'10px'} fontSize={'32.7px'} color='#aaaaaa'>Top Free Games for PC and Browser In 2023!</Text>
            {/* Latest PLAYED Slides */}
            <LatestPlayed gamesList={gamesList} />

            {/* SOME FILTERS */}
            {/* <Filter /> */}

            {/* ALL GAMES */}
            <AllGames gamesList={gamesList} />
        </Box>
      )}
    </Main>
  )
}

export default Games;

export async function getServerSideProps() {
  const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';

  try{
    const getGames = await axios({
      ...ftpRequestConfig,
      url: `${FTP_BASE_URL}/api/games`
    })
    const data = getGames.data;
    return {
      props: {
        gamesList: data
      }
    }
  } catch(err) {
    return {
      props: {
        gamesList: null
      }
    }
  }
}