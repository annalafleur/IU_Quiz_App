import { Route, Routes } from "react-router-dom"

import Dashboard from "./Dashboard"
import Duell from "./Duell"
import Einzelspieler from "./Einzelspieler"
import Login from "./Login"
import Profil from "./Profil"
import Fragenkatalog from "./Fragenkatalog"
import Datenschutz from "./Datenschutz"
import Freunde from "./Freunde"
import Impressum from "./Impressum"
import Chat from "./Chat"
import { useContext } from 'react'
import { AuthContext } from "../context/authContext"
import PageNotFound from "../components/blocks/PageNotFound"

const Pages = () => {
    //Auth token
    const { token } = useContext(AuthContext)
    const authToken = localStorage.getItem("token")

    return (
        <Routes>
            <Route path="/" element={(token !== false || authToken !== null)? <Dashboard /> : <PageNotFound />} />
            <Route path="/fragenkatalog" element={(token !== false || authToken !== null) ? <Fragenkatalog /> : <PageNotFound />} />
            <Route path="/datenschutz" element={<Datenschutz />}/>
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/chat" element={(token !== false || authToken !== null) ? <Chat /> : <PageNotFound />} />
            <Route path="/freunde" element={(token !== false || authToken !== null) ? <Freunde /> : <PageNotFound />} />
            <Route path="/einzelspieler" element={(token !== false || authToken !== null) ? <Einzelspieler /> : <PageNotFound />} />
            <Route path="/duell" element={(token !== false || authToken !== null) ? <Duell /> : <PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={(token !== false || authToken !== null) ? <Profil /> : <PageNotFound />} />
        </Routes>
    )
}

export default Pages
