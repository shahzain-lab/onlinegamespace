import React from 'react'
import { 
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Badge,
  Icon,
  Skeleton
 } from '@chakra-ui/react'
import { IGamesList } from '@/interfaces/context/IAPIService'
import { AiFillWindows } from 'react-icons/ai';
import { GoBrowser } from 'react-icons/go';
import Link from 'next/link';


const ProductCard = ({game, noBody=false}: {game: IGamesList,noBody?: boolean}) => {

  return (
    <Link href={`games/${game.id}`}>
    <Card p={2} maxW='lg' background={'#3a3f44'}>
        <CardBody p={0}>
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
                src={game?.thumbnail}
                alt={game?.title}
                borderRadius='lg'
              />
              {!noBody && (
              <Stack mt='4' color={'#aaaaaa'} spacing='3'>
                <Heading display={'flex'} justifyContent='space-between'>
                  <Text fontSize={'15px'} size='md'>{game?.title}</Text>
                  <Badge background={'#be32d3'} color='white' fontWeight='bold' py={.5} fontSize='10px'>FREE</Badge>
                </Heading>
                <Text fontSize={'sm'} color={'#7a8288'} noOfLines={1}>
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
              </Stack>
            )}
            </>
          )}
      </CardBody>
    </Card>
    </Link>
  )
}

export default ProductCard