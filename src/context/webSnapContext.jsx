import { createContext, useContext, useState } from "react";

const WebSnapContext = createContext()
const WebSnapUpdate = createContext()
const WebSnapGithubLink = createContext()
const WebSnapGithubLinkUpdate = createContext()
const WebSnapHostLink = createContext()
const WebSnapHostLinkUpdate = createContext()
// const Modal = createContext()
// const ModalUpdate = createContext()

export function useWebSnap(){
    return useContext(WebSnapContext)
}

export function useWebSnapUpdate(){
    return useContext(WebSnapUpdate)
}

export function useWebSnapGithubLink(){
    return useContext(WebSnapGithubLink)
}
export function useWebSnapGithubLinkUpdate(){
    return useContext(WebSnapGithubLinkUpdate)
}
export function useWebSnapHostLink(){
    return useContext(WebSnapHostLink)
}
export function useWebSnapHostLinkUpdate(){
    return useContext(WebSnapHostLinkUpdate)
}

// export function useModal(){
//     return useContext(Modal)
// }

// export function useModalUpdate(){
//     return useContext(ModalUpdate)
// }

export function WebSnapContextProvider({ children }){
    const [webSnap, setWebSnap] = useState()
    const [webSnapGithubLink, setWebSnapGithubLink] = useState()
    const [webSnapHostLink, setWebSnapHostLink] = useState()


    const changeWebSnap = (data) =>{
        setWebSnap(data)
    }

    return(
        <WebSnapContext.Provider value={webSnap}>
            <WebSnapUpdate.Provider value = {changeWebSnap}>
                <WebSnapGithubLink.Provider value={webSnapGithubLink}>
                    <WebSnapGithubLinkUpdate.Provider value={setWebSnapGithubLink}>
                        <WebSnapHostLink.Provider value = {webSnapHostLink}>
                            <WebSnapHostLinkUpdate.Provider value = {setWebSnapHostLink}>
                                {children}
                            </WebSnapHostLinkUpdate.Provider>
                        </WebSnapHostLink.Provider>
                    </WebSnapGithubLinkUpdate.Provider>
                </WebSnapGithubLink.Provider>
            </WebSnapUpdate.Provider>
        </WebSnapContext.Provider>
    )
}