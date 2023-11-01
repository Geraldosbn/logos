import { Typography } from '@mui/material'
import { InputTextField } from '../../../../components/InputTextField/InputTextField'
import { useFormValidate } from '../../../../hooks/useFormValidate'
import { schemaFormPost } from './schemaFormPost'
import { Button } from '../../../../components/Button/Button'
import { useStyles } from './style'
import { Post } from '../../../../shared/interfaces/interfaces'
import { useFormPost } from './service/useFormPost'
import { useEffect } from 'react'

export interface TypePost {
  typePost?: 'articles' | 'childReadings'
}

export const FormPost = ({ typePost = 'articles' }: TypePost) => {
  const classes = useStyles()
  const { mutateAsync: onSubmit, isSuccess } = useFormPost()
  const { register, handleSubmit, errors, reset } =
    useFormValidate(schemaFormPost)
  const typePostArticle = typePost === 'articles'

  useEffect(() => {
    if (isSuccess) {
      reset()
      alert('artigo criado com sucesso.')
    }
  }, [isSuccess])

  const handleSubmitForm = (data: Post) => {
    onSubmit({ data, typePost })
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <Typography className={classes.title}>
        Cadastrar {typePostArticle ? 'artigo' : 'historia infantil'}
      </Typography>
      <InputTextField
        label='Titulo'
        className={classes.input}
        inputProps={{ ...register('title') }}
        error={!!errors.title}
        errorMessage={errors.title?.message as string}
      />
      <InputTextField
        label='Descrição'
        className={classes.input}
        inputProps={{ ...register('description') }}
        error={!!errors.description}
        errorMessage={errors.description?.message as string}
      />
      <InputTextField
        label='Conteúdo'
        className={classes.input}
        inputProps={{ ...register('content') }}
        error={!!errors.content}
        errorMessage={errors.content?.message as string}
      />
      <InputTextField
        label='Autor'
        className={classes.input}
        inputProps={{ ...register('author') }}
        error={!!errors.author}
        errorMessage={errors.author?.message as string}
      />
      <Button type='submit'>Salvar</Button>
    </form>
  )
}
