import React, {createContext, useEffect, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token,setToken] = useState(null);
    const [userdata,setuserdata] = useState(null);
    const [isAuthenticated,setisAuthenticated] = useState(false);
    const storedData= JSON.parse(localStorage.getItem('user_data'));

    useEffect(()=>{
        if(storedData){
            const{userToken , user} =storedData;
            setToken(userToken);
            setuserdata(user);
            setisAuthenticated(true);
        }
    },[]);

    const login=(newToken,newData)=>{
        localStorage.setItem('user_data',JSON.stringify({userToken:newToken,user:newData}),
    );
    setToken(newToken);
    setuserdata(newData);
    setisAuthenticated(true);
    };
    
    return( 
    <AuthContext.Provider value={(token,isAuthenticated,login,userdata)}>
    {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);