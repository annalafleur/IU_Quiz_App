import * as S from './styles'
import Button from '../../elements/forms/Button'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import { setActiveGame, setCurrentQuestion, clearQuestions, clearSelectedQuestions, clearModule } from '../../../redux/singlePlayerGame'
import { AuthContext } from '../../../context/authContext';

const LogoutModal = () => {

    const { setToken} = useContext(AuthContext)

    //Modal
    const { setOpen } = useContext(ModalContext)

    //Redux
    const dispatch = useDispatch()

    let navigate = useNavigate()

    const handleButton = () => {
        //delete local storage
        dispatch(clearModule())
        dispatch(clearQuestions())
        dispatch(clearSelectedQuestions())
        dispatch(setCurrentQuestion(0))
        dispatch(setActiveGame(false))

        //close modal
        setOpen(false)

        //deletes tokes
        localStorage.removeItem('token')      
        setToken(false)
        navigate('/login')
    }

    return (
        <S.LogoutModal>
            <S.Icon>
                <FontAwesomeIcon icon={faDoorOpen} />
            </S.Icon>
            <h5>Wirklich Abmelden?</h5>
            <p>
                Dein Fortschritt im Einzelspielermodus geht verloren!
            </p>
            <NavLink to="/login">
                <Button label="Abmelden" onClick={() => {handleButton()}}/>
            </NavLink>
        </S.LogoutModal>
    )
}

export default LogoutModal