import childrensBibleStudyCards from './childrenHistory'
import { Card } from '../../components/Card/Card'
import { useStyles } from './style'

export const ChildrensArea = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {childrensBibleStudyCards.map(
        ({ author, content, description, title }, index) => (
          <Card key={index} post={{ author, content, description, title }} />
        )
      )}
    </div>
  )
}
