import React from 'react'
import styles from './LatestPlayed.module.scss';
import { Badge, Box, Button, Icon, Image, Text } from '@chakra-ui/react';
import { SlCalender } from 'react-icons/sl';
import { BiCommentDetail, BiArrowFromLeft } from 'react-icons/bi';
import Link from 'next/link';
import { IGamesList } from '@/interfaces/context/IAPIService';

const LatestPlayed = ({ gamesList }: {gamesList: IGamesList[]}) => {
  // const [gameNo, setGameNo] = useState(42)
  // const [bigGame, setBigGame] = useState<any>('')

  if(!gamesList) return <p>Loading....</p>
  const bigGame = gamesList[42];
  // useEffect(() => {
  //   console.log('NEW GAME ',game)
  //   console.log('gamesList ',gamesList)
  //   setBigGame(game)
  // },[gameNo])
  // console.log('NEW GAME OUT ',bigGame)
  return (
    <div className={styles.container}>
      
      {gamesList && bigGame && (
        <div className={styles.slide}>
          <Box 
          position={'relative'}
           h='100%'
           w='100%'
          >
            <Image
              src={bigGame?.thumbnail as string}
              alt={bigGame?.title as string}
              w='100%'
              h='100%'
              borderRadius='lg'
            />
            <Box 
            background={'#272b305c'}
             zIndex={122}
              position={'absolute'}
               top='0%' left='0%'
               w='100%'
               h='100%'
               >

              <Badge
                bg={'#be32d3'}
                // p={1}
                mt={3}
                fontWeight='bold'
                fontSize={'sm'}
                color={'#e4e2e2'}
                borderRightRadius='md'
                >{bigGame?.genre}</Badge>
              </Box>
          </Box>
          <Box px={1} position='relative'>
              <Text fontSize={'20px'} color={'#aaaaaa'} size='md'>{bigGame?.title}</Text>
               <Box title='Release Date' color={'#7a8288'} display='flex' alignItems='center'>
                 <Icon as={SlCalender} fontSize='13px' />
                 <Text fontWeight={'bold'} pl={1} fontSize={'12px'}>{bigGame?.release_date}</Text> 
               </Box>
               <Badge background={'#be32d3'} color={'#e4e2e2'} fontWeight='bold' py={.5} fontSize='10px'>FREE</Badge>

              <Text py={2} fontSize={'sm'} color={'#7a8288'}>{bigGame?.short_description}</Text>
              <Box 
              position='absolute'
               bottom='0%'
               left='0%'
               display='flex'
               flexDirection={['column', 'row']}
               alignItems='center'
                 >
                   <Link target={'_blank'} href={`${bigGame?.game_url}`}>
                    <Button 
                      border='1px solid #be32d3'
                      color={'#be32d3'}
                      _hover={{background:'#be32d3',  color:'#e4e2e2'}}
                      background='none'
                      size='md'>Play Now <Icon mb={-1} ml={1} fontSize={'20px'} as={BiArrowFromLeft} /></Button>
                   </Link>
                <Link href={`/games/${bigGame?.id}`}>
                  <Text 
                    p={2.5}
                    _hover={{cursor:'pointer', background: '#3a3f44', transition: '.3s ease-in'}}
                    borderRadius='lg'
                    display='flex'
                    alignItems='center'
                    color={'#e4e2e2'}
                    mx={1}
                    ><Icon mr={1} fontSize='15px' as={BiCommentDetail} /> See Details</Text>
                </Link> 
              </Box>
          </Box>
        </div>
      )}
      <div>
        {gamesList && gamesList.slice(100,105).map((game, i) => (
          <Box p={1.5} borderRadius={'lg'} _hover={{cursor:'pointer', background: '#3a3f44', transition: '.3s ease-in'}} display={'flex'} key={i}>
            <Image 
              src={game?.thumbnail}
              width={100}
              borderRadius='lg'
            />
            <Box pl={1} display={'flex'} flexDirection='column'>
              <Text fontWeight='bold' fontSize={'13px'} color={'#aaaaaa'} size='md'>{game?.title}</Text>
              <Text noOfLines={1} fontSize={'12px'} color={'#7a8288'}>
              {game?.short_description}
              </Text>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  )
}

export default LatestPlayed