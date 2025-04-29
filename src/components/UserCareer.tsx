import { useAtom } from 'jotai';
import { userDetailsAtom } from '../jotai/Jotai';
import { useNavigate } from 'react-router-dom';

const userCareer = () => {
    
    const [userDetails, setUserDetails] =useAtom(userDetailsAtom)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Summary')
        console.log(userDetails)
    }

    return (
        <div>
            <h1>User Career</h1>
            <input
            type="text"
            value={userDetails.college}
            placeholder="College/University"
            onChange={(e) => setUserDetails({...userDetails, college: e.target.value})}
            /><br/>
            <input 
            type="text" 
            value={userDetails.department}
            placeholder="Department"
            onChange={(e) => setUserDetails({...userDetails, department: e.target.value})}
            /><br/>
            <input 
            type="text" 
            value={userDetails.district}
            placeholder="District"
            onChange={(e) => setUserDetails({...userDetails, district: e.target.value})}
            /><br/>
            <input 
            type="text" 
            value={userDetails.domain}
            placeholder="Domain"
            onChange={(e) => setUserDetails({...userDetails, domain: e.target.value})}
            /><br/>
            <input 
            type="text" 
            value={userDetails.degree}
            placeholder="Degree"
            onChange={(e) => setUserDetails({...userDetails, degree: e.target.value})}
            /><br/>
            <button onClick={handleClick}>Next</button><br/>
        </div>
    )
}

export default userCareer;