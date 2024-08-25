import { createContext, useState } from "react";
import Check from "../Check";
import Set from "../Set";


//step 1
export const AppContext = createContext();

export default function AppContextProvider() {

    const [loading, setLoading] = useState(false)

    const value = { loading, setLoading }
    //step 2
    return <AppContext.Provider value={value}>
       <Check/>
       <Set/>
    </AppContext.Provider>
}