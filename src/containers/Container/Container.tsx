import {PropsWithChildren} from 'react'
import {CircularProgress, Typography} from '@mui/material'
import {useStyles} from './style'

interface ContainerProps extends PropsWithChildren {
	isFetching?: boolean
	isEmpty?: boolean
}

export const Container = ({isFetching, isEmpty, children}: ContainerProps) => {
	const classes = useStyles()
	if (isFetching) return <CircularProgress />
	if (isEmpty) return <Typography>Nenhum dado encontrado.</Typography>
	return <div className={classes.container}>{children}</div>
}
