import * as S from './styles'
import { useState } from 'react'
import Select from "../../../elements/forms/Select"
import Questions from './Questions'

import { useQuery } from '@apollo/client/react'
import GET_MODULES from '../../../../apollo/queries/getModules'

const PublicQuestions = () => {

   
    //getModules Query
    const { data: moduleData } = useQuery(GET_MODULES);

    const generateModuleOptions = () => {
        if (moduleData) {
            const generatedModules = moduleData.getModules.map(item => {
                const container = {};
                container.label = item.name;
                container.value = item.uuid
            
                return container;
            })
            return generatedModules
        }
    }
    //Wählt module aus
    const [module, setModule] = useState(null)
    const selectHandler = (event) => {
        const value = event.value
        setModule(value)
        //refetch({filter: {module_uuid: module, own_questions_only: false}})
    }



    return (
        <S.PublicQuestions>
            <S.Select>
                <label>Modul auswählen</label>
                <Select placeholder="Modul" options={generateModuleOptions()} onChange={selectHandler}/>
            </S.Select>
            {module && <Questions module={module} />}
        </S.PublicQuestions>
    )
}

export default PublicQuestions