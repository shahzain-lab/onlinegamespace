import React from 'react'
import { 
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Badge,
  Icon,
  Heading,
  Skeleton
 } from '@chakra-ui/react'
import { IGamesList } from '@/interfaces/context/IAPIService'
import { AiFillWindows } from 'react-icons/ai';
import { GoBrowser } from 'react-icons/go';
import Link from 'next/link';


const RecentCard = ({game}: {game: IGamesList}) => {
  return (
    <Link href={`/games/${game.id}`}>
          <Card background={'#3a3f44'}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          cursor={'pointer'}
        >
          {!game && (
            <Stack>
               <Skeleton height='100px' />
               <Skeleton height='50px' />
               <Skeleton height='20px' />
            </Stack>
          )}
          {game && (
            <>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '150px' }}
                src={game.thumbnail}
                alt={game.thumbnail}
              />
              <Stack mt='2' color={'#aaaaaa'} >
                <CardBody py={2}>
                <Badge background={'#be32d3'} color='white' fontWeight='bold' my={.5} py={.5} fontSize='10px'>FREE</Badge>
                  <Heading size='md'>{game.title}</Heading>
                  <Text fontSize={'sm'} py={1} color={'#7a8288'} noOfLines={1}>
                    {game?.short_description}
                  </Text>
                  <Text fontSize='lg' display={'flex'} alignItems={'center'}>
                      <Badge mr={1} color={'#3a3f44'} fontSize='10px' background={'#7a8288'} variant='solid'>{game?.genre}</Badge>
                    {game?.platform&&game?.platform?.includes('Windows') ? (
                        <Icon color={'#7a8288'} as={AiFillWindows} />
                        ) : game?.platform&&game?.platform?.includes('Browser') && (
                        <Icon color={'#7a8288'} as={GoBrowser} />
                      )}
                  </Text>
                </CardBody>
              </Stack>
            </>
          )}
        </Card>
    </Link>
  )
}

export default RecentCard