import React from 'react'
import styles from './Recommand.module.scss';
import { Icon, Text } from '@chakra-ui/react'
import ProductCard from '@/components/helpers/product-card';
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link';
import { IGamesList } from '@/interfaces/context/IAPIService';

const Recommand = ({gamesList}: {gamesList: IGamesList[]}) => {
  
  return (
    <div className={styles.container}>
      <Text fontSize='30px' color={'#aaaaaa'}>Personalized Recommendations!</Text>
      {gamesList && (
        <div className={styles.products}>
         {gamesList?.slice(0,8)?.map((game, i) => (
           <ProductCard key={i} game={game} />
           ))}
        </div> 
      )}
      <Link href={'/games'}>
        <Text
        float={'right'}
        fontSize='lg'
        color={'#aaaaaa'}
        display={'flex'}
        alignItems={'center'}
        p={2}
        mt={1}
        _hover={{cursor:'pointer', background: '#3a3f44', transition: '.2s ease-in'}}
        borderRadius='lg'
        >More Games <Icon pl={1} pt={1} as={FaArrowRight} /></Text>
      </Link>
    </div>
  )
}

export default Recommand