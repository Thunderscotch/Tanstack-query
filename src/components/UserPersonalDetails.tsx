import {useAtom} from "jotai";
import { userDetailsAtom } from "../jotai/Jotai";
import { useNavigate } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"

type Country = {
    name: {
        common: string,
    }
}
const userPersonalDetails = () => {

    const {isLoading: isLoading1, error: error1, data: data1} = useQuery<Country[], Error>({
        queryKey: ['userCountry'],
        queryFn: () =>
            fetch('https://restcountries.com/v3.1/all').then((res) => res.json(),),
    })

    const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
    const navigate = useNavigate();

    if (isLoading1 ) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>
    if (error1 ) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>An error has occurred: {error1?.message}</div>
    const handleClick = () => {
        navigate('/Email')
    }

    // console.log(data1)
    return(
        <div>
        <h1>User Personal Details</h1>
        <input 
        type="text" 
        value={userDetails.firstName}
        placeholder="First Name"
        onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
        /><br/>
        <input 
        type="text" 
        value={userDetails.lastName}
        placeholder="Last Name"
        onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
        /><br/>
        <input 
        type="date" 
        value={userDetails.dob}
        placeholder="Date of Birth"
        onChange={(e) => setUserDetails({...userDetails, dob: e.target.value})}
        /><br/>
        <input 
        type="text" 
        value={userDetails.occupation}
        placeholder="Occupation"
        onChange={(e)=> setUserDetails({...userDetails, occupation: e.target.value})}
        /><br/>
        <select value={userDetails.country} onChange={(e) => setUserDetails({...userDetails, country: e.target.value})}>
            {data1?.map((country) => {
                return <option key={country?.name.common} value={country?.name.common}>{country?.name.common}</option>
            })}
        </select>
        <button onClick={handleClick}>Next</button><br/>
        </div>
    )
}

export default userPersonalDetails;