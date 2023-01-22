
import { Meta } from '@/templates/Meta';
import { Main } from '@/templates/Main';
import HeroEpic from '@/components/home/hero/hero-epic';
import Recommand from '@/components/home/recommand/Recommand';
import Recent from '@/components/home/recents/Recent';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { ftpRequestConfig } from '@/services/free-to-play.config';
import { IGamesList } from '@/interfaces/context/IAPIService';

const Index = ({ gamesList }: {gamesList: IGamesList[]}) => {
  // const _gamesList = JSON.parse(gamesList) as IGamesList[];
 
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      >
        {gamesList && (
          <>
            {/* Hero page */}
            <HeroEpic />
            <Box w='100%' px={[5, 15, 20, 90]}>

              {/* Recommanded Page */}
              <Recommand title='Personalized Recommendations!' gamesList={gamesList} my={'48px'} />

              {/* Recent Page */}
              <Recent gamesList={gamesList} />
          </Box>
          </>
        )}
    </Main>
  );
};

export default Index;

export async function getStaticProps() {
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