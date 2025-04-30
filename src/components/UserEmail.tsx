import { userDetailsAtom, tempPassAtom } from "../jotai/Jotai"
import { useAtom } from "jotai"
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

const userEmail = () => {
    const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
    const [tempPass, setTempPass] = useAtom(tempPassAtom);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (performance.navigation.type === 1) {
            // Redirect to initial page but is deprecated
            navigate("/", { replace: true }); // Replace with your initial route (e.g., "/")
        }
        if(tempPass === userDetails.password){
            setError(false);
        }else{
            setError(true);
        }
    },[tempPass, location])

    const handlepassword = (e : any ) => {
        // e.preventDefault();
        setTempPass(e.target.value);
    };
    console.log(userDetails.password);
    console.log(tempPass);
    console.log(error);
    
    return (
        <div>
            <h1>User Email</h1><br/>
            <input
            type="email"
            value={userDetails.email}
            placeholder="Email"
            onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
            /><br/>
            <input
            type="password"
            value={userDetails.password}
            placeholder="Password"
            onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
            /><br/>
            <input
            type="text"
            value={tempPass}
            placeholder="confirm password"
            onChange={(e) => handlepassword(e)}
            /><br/>
            {error? <p style={{color: 'red', marginTop: '5px'}}>Password should be same</p>: ''}<br/>
            <button onClick={() => navigate('/Career')}>Next</button><br/>
        </div>
    )
}

export default userEmail;
