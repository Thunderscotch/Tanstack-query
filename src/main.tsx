import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()
// import UserPersonalDetails from './components/UserPersonalDetails.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
    {/* <UserPersonalDetails /> */}
    </QueryClientProvider>
  </StrictMode>,
)
