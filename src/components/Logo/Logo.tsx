import { useStyles } from './style'
import logoNameWhite from '../../assets/Logo_Igreja_Logos_Branco.png'
import logoNameBlack from '../../assets/Logo_Preto_nome.png'
import cross from '../../assets/Logo_Preto.png'

interface LogoProps {
  logo: 'cross' | 'nameBlack' | 'nameWhite'
}

export const Logo = ({ logo }: LogoProps) => {
  const classes = useStyles()

  const setLogo = (logo: LogoProps['logo']) => {
    switch (logo) {
      case 'cross':
        return cross
      case 'nameBlack':
        return logoNameBlack
      default:
        return logoNameWhite
    }
  }
  return (
    <div className={classes.toolBar}>
      <img src={setLogo(logo)} width={165} />
    </div>
  )
}
