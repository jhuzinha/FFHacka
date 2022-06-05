import { AiOutlineCompass } from 'react-icons/ai'
import { Foot } from './footer.jsx'
import { BiLockOpenAlt } from 'react-icons/bi'
import { FaWrench } from 'react-icons/fa'
import { useState } from 'react'

export default function Footer() {
    const [navbar, setNavbar] = useState(false)
    return( 
        <Foot>
            <div onClick={() => setNavbar(true)}><AiOutlineCompass /></div>
            <div onClick={() => setNavbar(true)}><BiLockOpenAlt /></div>
            <div onClick={() => setNavbar(true)}><FaWrench /></div>
        </Foot>
    )
}



