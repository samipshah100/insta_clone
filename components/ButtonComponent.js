import { useTheme } from '@mui/material/styles'
import { Button, Typography } from '@mui/material'
export default function ButtonComponent({ primary, children }) {
  const theme = useTheme()
  return (
    <Button
      sx={{
        backgroundColor: primary ? theme.insta.button : 'white',
        height: 30,
        width: 61,
        color: 'red',
      }}
    >
      <Typography sx={{}}>{children}</Typography>
    </Button>
  )
}
