import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styles from './CardContent.module.css'
import Image from 'next/image'
export default function CardContent() {
  const theme = useTheme()

  const path = 'https://picsum.photos/614'
  return (
    <Box
      sx={{
        maxWidth: 614,
        //  minHeight: ,
        maxHeight: 614,
        height: 614,
        width: 614,
        position: 'relative',
      }}
    >
      <Image
        src={path}
        layout="fill"
        className={styles.image}
        priority={true}
      />
      <img src="/images/instaLogo.png" />
    </Box>
  )
}
