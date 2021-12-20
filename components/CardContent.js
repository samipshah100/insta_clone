import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styles from './CardContent.module.css'
import Image from 'next/image'
export default function CardContent({ item }) {
  const theme = useTheme()
  const path = `https://picsum.photos/id/${item.id}/614`

  return (
    <Box
      id="cardcontent_"
      sx={{
        maxWidth: 614,
        //  minHeight: ,
        maxHeight: 614,
        height: 614,
        borderBottom: `${theme.insta.borderThin} 1px solid`,

        // width: 614,
        position: 'relative',
      }}
    >
      <Image
        src={path}
        // src="/images/pic.jpeg"
        layout="fill"
        // height={600}
        // width={600}
        className={styles.image}
        priority
      />
      {/* <img src="/images/instaLogo.png" /> */}
    </Box>
  )
}
