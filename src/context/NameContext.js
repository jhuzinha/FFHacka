import { createContext, useState } from "react";

const NameContext = createContext()

export function NameProvider({ children }) {
    const [nameUser, setNameUser] = useState('')

    return (
        <NameContext.Provider value={{ nameUser, setNameUser }}>
            {children}
        </NameContext.Provider>
    )
}

export default NameContext