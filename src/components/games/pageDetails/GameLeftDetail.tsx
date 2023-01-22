import { IGameDetails } from '@/interfaces/context/IAPIService'
import { Box, Button, Flex, Icon, Image, Badge, Text, Stack, Skeleton } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { AiOutlineArrowRight, AiFillWindows } from 'react-icons/ai';
import { GoBrowser } from 'react-icons/go'

const GameLeftDetail = ({game}: {game: IGameDetails}) => {
  return (
    <Box>
      {!game && (
        <Stack>
        <Skeleton height='300px' />
        <Skeleton height='120px' />
        <Skeleton height='20px' />
      </Stack>
      )}
      {game && (
        <>
          <Image
          src={game.thumbnail}
          w='100%'
          borderRadius={'lg'}
          />
          <Flex my={3}>
            <Text display={'flex'} alignItems='center'
            mr={1} borderRadius='lg' px={4} py={2} background='#3a3f44'>
            {game?.platform&&game?.platform?.includes('Windows') ? (
              <Icon _hover={{color: '#9c9c9c'}} fontSize={'25px'} color={'#7a8288'} as={AiFillWindows} />
              ) : game?.platform&&game?.platform?.includes('Browser') && (
              <Icon _hover={{color: '#9c9c9c'}} fontSize={'25px'} color={'#7a8288'} as={GoBrowser} />
            )}
            </Text>
            <Link style={{width: '100%'}} target={'_blank'} href={`${game?.game_url}`}>
              <Button
              w='100%'
              background={'blue.300'}
              color='black'
              _hover={{background:'blue.300'}} 
              size={'lg'}> Play Now <Icon as={AiOutlineArrowRight} /></Button>
            </Link>
          </Flex>
          <Text fontSize='lg' display={'flex'} alignItems={'center'}>
            <Badge mr={1} color={'#3a3f44'} fontSize='10px' background={'#7a8288'} variant='solid'>{game?.genre}</Badge>
            <Badge background={'#be32d3'} color='white' fontWeight='bold' my={.5} fontSize='10px'>FREE</Badge>
          </Text>
        </>
      )}
    </Box>
  )
}

export default GameLeftDetail