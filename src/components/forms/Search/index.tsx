import { FC, useEffect, useState } from 'react'
import { Props } from '../../../types'

const Search: FC<Props> = ( { onSearch }) =>{


    const [text, setText] = useState(''); 

    useEffect(()=>{
        onSearch(text)

    }, [text])
    



return(
    <div>
        <div>
            <form>
                <input/>
            </form>
        </div>
    </div>
)



}

export Search

