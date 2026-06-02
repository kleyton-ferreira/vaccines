import { FunctionComponent, createContext } from 'react'

interface IUserContext {
  sendWhatsAppConfirmation: () => void
}

export const UserContext = createContext<IUserContext>({
  sendWhatsAppConfirmation: () => {},
})

interface UserContextProvider {
  children: string | React.ReactNode
}

const UserContextProvider: FunctionComponent<UserContextProvider> = ({
  children,
}) => {
  //   DIRECIONA PARA O WATS!
  const sendWhatsAppConfirmation = () => {
    const phone = '5582988322654'
    const message = encodeURIComponent('sendWhatsAppConfirmation')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <>
      <UserContext.Provider value={{ sendWhatsAppConfirmation }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
