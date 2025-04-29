import { useAtomValue } from "jotai"
import { userDetailsAtom } from "../jotai/Jotai"

const userSummary = () => {
    const userDetails = useAtomValue(userDetailsAtom);
    return(
        <div>
            <h1>User Summary</h1>
            {Object.values(userDetails).map((userDetail, index) => (
            <p key={index}>{userDetail}</p>
            ))} 
        </div>
    )
}

export default userSummary;