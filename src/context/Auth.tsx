import { User } from 'firebase'
import React, { FC, createContext, useEffect, useState } from 'react'

import auth from '../utils/firebase'

type AuthContextPrpos = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextPrpos>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
