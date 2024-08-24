import { createContext, useState } from 'react'

//step 1
export const AppContext = createContext()

export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false)

    const value = { loading, setLoading }

    //step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}