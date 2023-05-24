import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'
import { BiArrowFromLeft } from 'react-icons/bi'

const Header = () => {
  return (
    <Box px={[5, 15, 20, 90]} className={styles.container}>
      <Link href={'/'}>
          <Image
          alt={'epic store free games listing'} 
          src={'/logo2.png'}
          width={275}
          height={275}
          />
      </Link>
      <Flex alignItems={'center'}>
      <Link href={'/games'}>
        <Text size={'md'} mr={6}>Free Games</Text>
      </Link>
      <Link href='/games'>
          <Button 
          color={'#e4e2e2'} 
          _hover={{background:'#be32d3'}}
           background='#be32d3' size={['sm','md']}>Start Playing <Icon mb={-1} ml={1}
           fontSize={'20px'} as={BiArrowFromLeft} /></Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Header