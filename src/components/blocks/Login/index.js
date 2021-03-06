import * as S from './styles'
import { useForm }from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks'
import LOGIN from '../../../apollo/mutations/login';
import { AuthContext } from '../../../context/authContext';

import { useContext, useState } from 'react'

const Login = () => {
  
    let navigate = useNavigate()
    const { setToken} = useContext(AuthContext)
    //form
    const { register, handleSubmit, formState: { errors }} = useForm()
    const [error, setError] = useState()

    //Login Mutation
    const [loginUser] = useMutation(LOGIN)
    
    //führt login mutation when form submitted
    const onSubmit = (abc) => {
        loginUser({ variables: { email: abc.email, password:abc.password } })
        .then((data) => {
            if (data.data.login.default.success){
                localStorage.setItem("token", data.data.login.jwt)
                setToken(true)
                navigate('/')
            } else {
                setError(data.data.login.default.message)
            }    
        })
        .catch((ex) => {
            console.log(ex)
        })
    }

    //const { token } = useSelector((state) => state.auth)

    return (
        <S.Login>
            <S.Information >
                <S.InformationContent 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 5, type: 'spring' }}
                >
                    <h2>Herzlich Willkommen auf der Startseite der IU Quiz APP</h2>
                    <hr />
                    <p>
                        Diese Webanwendung wurde im Rahmen des Softwareprojekts an der IU - Internationale Hochschule erstellt.<br/>
                        Bitte loggen Sie sich, mit den von uns zur Verfügung gestellten, Login-Daten ein.<br/><br/>
                        Viel Spaß mit der App wünschen:<br/>
                        Anna, Annika, Thomas, Jamal und David<br/><br/>
                        - Sommer 2022
                    </p>
                </S.InformationContent>
            </S.Information>
            <S.Content
                initial={{ x: "100vw" }} 
                animate={{ x: 0, delay: 1.5 }} 
                transition={{ duration: 1.5, type: 'tween' }}
            >
                <h1>Anmeldung</h1>
                <hr/>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Element>
                        <input
                            {...register("email", { required: true })} 
                            type="email"
                            placeholder='E-Mail' 
                            name="email" 
                            autoComplete="on" 
                            id="email" 
                        />
                        <label htmlFor="email">E-Mail</label>
                   </S.Element>
                   <S.Element>
                        <input
                            {...register("password", { required: true })} 
                            type="password" placeholder='Passwort' 
                            name="password" 
                            autoComplete="on" 
                            id="password" 
                        />
                        <label htmlFor="password">Passwort</label>
                   </S.Element>
                    <S.SubmitButton type="submit" value="Anmelden"/>
                    {error && <S.Error>{error}</S.Error>}
                    {errors.password  && <S.Error>Bitte geben Sie ihre Daten vollständig ein.</S.Error>}
                </S.Form>
            </S.Content>
        </S.Login>
    )
}

export default Login