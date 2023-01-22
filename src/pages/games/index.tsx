import AllGames from '@/components/games/allGames/AllGames'
import Filter from '@/components/games/filters/Filter'
import LatestPlayed from '@/components/games/latest/Latest'
import { IGamesList } from '@/interfaces/context/IAPIService'
import { ftpRequestConfig } from '@/services/free-to-play.config'
import { Main } from '@/templates/Main'
import { Meta } from '@/templates/Meta'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const Games = ({ gamesList }: {gamesList: string}) => {
  const _gamesList = JSON.parse(gamesList) as IGamesList[];

  return (
      <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Box px={90}>
          <Text mt={'24px'} mb={'10px'} fontSize={'32.7px'} color='#aaaaaa'>Top Free Games for PC and Browser In 2023!</Text>
          {/* Latest PLAYED Slides */}
          <LatestPlayed gamesList={_gamesList} />

          {/* SOME FILTERS */}
          <Filter />

          {/* ALL GAMES */}
          <AllGames gamesList={_gamesList} />
      </Box>
    </Main>
  )
}

export default Games;

export async function getStaticProps() {
  const FTP_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com';

  try{
    const getGames = await axios({
      ...ftpRequestConfig,
      url: `${FTP_BASE_URL}/api/games`
    })
    return {
      props: {
        gamesList: JSON.stringify(getGames.data) 
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