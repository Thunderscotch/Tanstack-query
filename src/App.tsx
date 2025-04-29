import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPersonalDetails from './components/UserPersonalDetails';
import UserEmail from './components/UserEmail'
import UserCareer from './components/UserCareer'
import UserSummary from './components/UserSummary';

// import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

// const queryClient = new QueryClient()

function App() {

  return (
   
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<UserPersonalDetails />}/>
        {/* <Route index element={<UserPersonalDetails />} /> */}
        <Route path="/Email" element={<UserEmail/>} />
        <Route path="/Career" element={<UserCareer />} />
        <Route path="/Summary" element={<UserSummary />} />
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
