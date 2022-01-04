import { useTheme } from '@mui/material/styles'
import { Button, Typography } from '@mui/material'
export default function ButtonComponent({
  disabled,
  disableRipple,
  onClick,
  primary,
  children,
}) {
  // console.log(
  //   '🚀 ~ file: ButtonComponent.js ~ line 4 ~ ButtonComponent ~ primary',
  //   primary
  // )
  const theme = useTheme()
  return (
    <Button
      sx={{
        backgroundColor: primary ? theme.insta.button : 'white',
        height: 30,
        width: 65,
        whiteSpace: 'nowrap',
        color: 'red',
      }}
      disableRipple={disableRipple}
      onClick={onClick}
    >
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'none',
          // fontFamily: 'Segoe UI',
          color: primary ? 'white' : theme.insta.button,
          opacity: disabled ? 0.4 : 1,
          // TODO
        }}
      >
        {children}
      </Typography>
    </Button>
  )
}
