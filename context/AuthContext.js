import { createContext,useContext } from 'react'

const AuthContext = createContext({})

export const AuthContextProvider = ({children,}: {children:React.ReactNode}) => {
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )

}
