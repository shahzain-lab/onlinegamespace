import { Box } from '@chakra-ui/react';
import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Box px={[5, 15, 20, 90]} className={styles.footer}>
      About us
    </Box>
  )
}

export default Footer