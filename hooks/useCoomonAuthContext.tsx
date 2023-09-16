import React from 'react'

const useCoomonAuthContext = () => {
 
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);

}

export default useCoomonAuthContext