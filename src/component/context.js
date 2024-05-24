import { createContext } from "react";

export const HenderContext = createContext({
    addNewItem : (newitem) => {},
    deleteHender : (id) => {},
    editHander : (id, etask) => {},
    
})