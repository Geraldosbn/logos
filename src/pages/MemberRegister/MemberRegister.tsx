import {useEffect, useState} from 'react'
import {Typography} from '@mui/material'
import {schemaForm} from './schemaForm'
import {useStyles} from './style'
import {useMemberRegister} from './service/useMemberRegister'
import {useFormValidate} from '../../hooks/useFormValidate'
import {InputTextField} from '../../components/InputTextField/InputTextField'
import {Button} from '../../components/Button/Button'
import {CheckBox} from '../../components/CheckBox/CheckBox'
import {PaperForm} from '../../components/PaperForm/PaperForm'
import {InputDate} from '../../components/InputDate/InputDate'
import {MemberData} from '../../shared/interfaces/interfaces'
import {InputMask} from '../../components/InputMask/InputMask'

export const MemberRegister = () => {
	const classes = useStyles()
	const {mutateAsync: onSubmit, isSuccess, reset} = useMemberRegister()

	const [isUserSystem, setIsUserSystem] = useState(false)
	const [passwords, setPasswords] = useState<{
		password: string
		confirmPassword: string
	}>({password: '', confirmPassword: ''})

	const {register, errors, handleSubmit, setValue, clearErrors} = useFormValidate(
		schemaForm({
			isUserSystem,
			passwordError: passwords.password !== passwords.confirmPassword
		})
	)

	useEffect(() => {
		isSuccess && reset()
	}, [isSuccess])

	const handleSubmitForm = (data: MemberData) => {
		onSubmit(data)
	}

	return (
		<PaperForm onSubmit={handleSubmit(handleSubmitForm)}>
			<Typography className={classes.title}>Cadastrar membro</Typography>
			<InputTextField
				label="Nome"
				inputProps={{...register('name')}}
				error={!!errors.name}
				helperText={errors.name?.message as string}
			/>
			<InputMask
				label="Telefone"
				type="phone"
				setValueOnBlur={(value) => {
					setValue('phone', value)
				}}
				inputProps={{
					...register('phone')
				}}
				error={!!errors.phone}
				helperText={errors.phone?.message as string}
			/>
			<InputMask
				label="CPF"
				type="cpf"
				setValueOnBlur={(value) => {
					setValue('cpf', value)
				}}
				inputProps={{...register('cpf')}}
				error={!!errors.cpf}
				helperText={errors.cpf?.message as string}
			/>
			<InputDate
				label="Data de nascimento"
				onChange={(value) => setValue('birthday', value)}
				inputProps={{
					...register('birthday')
				}}
				clearError={() => clearErrors('birthday')}
				error={!!errors.birthday}
				helperText={errors.birthday?.message as string}
			/>
			{isUserSystem && (
				<div style={{width: '100%'}}>
					<InputTextField
						label="Login"
						autoComplete="username"
						inputProps={{...register('username')}}
						error={!!errors.username}
						helperText={errors.username?.message as string}
					/>
					<InputTextField
						label="Senha"
						type="password"
						autoComplete="new-password"
						onChange={(evt) => setPasswords({...passwords, password: evt.target.value})}
						inputProps={{...register('password')}}
						error={!!errors.password}
						helperText={errors.password?.message as string}
					/>
					<InputTextField
						label="confirme a senha"
						type="password"
						autoComplete="new-password"
						onChange={(evt) =>
							setPasswords({
								...passwords,
								confirmPassword: evt.target.value
							})
						}
						inputProps={{...register('confirmPassword')}}
						error={!!errors.confirmPassword}
						helperText={errors.confirmPassword?.message as string}
					/>
				</div>
			)}
			<CheckBox label="Este membro é um usuario do sistema?" onclick={setIsUserSystem} />
			<Button type="submit">Salvar</Button>
		</PaperForm>
	)
}
