import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <Box px={[5, 15, 20, 90]} className={styles.container}>
      <Link href={'/'}>
          <Image
          alt={'epic store free games listing'} 
          src={'/favicon.ico'}
          width={45}
          height={45}
          />
      </Link>
    </Box>
  )
}

export default Header