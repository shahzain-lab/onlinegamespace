import React from 'react'
import styles from './hero.module.scss';
import { Box, Button, Flex, Icon } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { BiGame, BiCommentDetail, BiArrowFromLeft } from 'react-icons/bi'
import Link from 'next/link';

const HeroEpic = () => {
  
  return (
    <Box px={[5, 15, 20, 90]} backgroundSize={['cover']} className={styles.hero}>
      <div className={styles.hero_elements}>
        <Text color={'#be32d3'} display='flex' alignItems={'center'}>
           ------
           Best Game Experience
          <Icon mt={1} ml={1} fontSize={'20px'} as={BiGame} />
         </Text>
      <Text fontSize={[25, 40]} fontWeight={'bold'} color={'#aaaaaa'}>Play and 
      <span style={{color:'#be32d3'}} > Discover </span> 
       Best <br /> Games <span style={{color:'#be32d3'}}> EVERYTHING </span> <br /> is
      <span style={{color:'#be32d3'}}> FREE! </span></Text>
      <Flex flexDirection={['column-reverse', 'row']} mt={3}>
        <Link href='/games'>
          <Button 
          color={'#e4e2e2'} 
          _hover={{background:'#be32d3'}}
           background='#be32d3' size={['sm','lg']}>Start Playing <Icon mb={-1} ml={1}
           fontSize={'20px'} as={BiArrowFromLeft} /></Button>
        </Link>
        <Link href='/games'>
          <Text 
          p={[2, 3]}
          my={[1,0]}
          _hover={{cursor:'pointer', background: '#75737386', transition: '.3s ease-in'}}
          borderRadius='lg'
          display='flex'
          alignItems='center'
          color={'#e4e2e2'}
          mx={[0,1]}
          ><Icon mr={1} fontSize='15px' as={BiCommentDetail} /> Browse Games</Text>
        </Link>
      </Flex>
      </div>
    </Box>
  )
}

export default HeroEpic

// <div>
//   {gamesList && (
//   <Splide options={{
//     width: 700,
//     padding: '4rem',
//     arrows: false,
//     type: 'loop'
//       }} aria-label="My Favorite Images">
//     {gamesList?.slice(0, 5).map((game, i) => (
//     <SplideSlide key={i}>
//       <Card mx={2} p={2} maxW='sm' background={'#3a3f44'}>
//       <Image
//         src={game.thumbnail}
//         alt={game.title}
//         borderRadius='lg'
//         width='100%'
//       />
//       <div>
//       </div>
//       </Card>
//     </SplideSlide>
//     ))}
//   </Splide>
//   )}
// </div>