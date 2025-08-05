import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import IsAuthNav from './components/layout/navbar/isAuthNav/IsAuthNav'
import NotAuthNav from './components/layout/navbar/notAuthNav/NotAuthNav'
import Sidebar from './components/layout/sidebar'
import { useSelector } from 'react-redux'

export default function App() {

  const { isAuthenticated } = useSelector((state) => state.auth);


  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <IsAuthNav />
          <div className='h-full w-full p-10 font-sans'>
            <div className='inline-flex w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-gray-400'>
              <div className='h-fit w-1/4 bg-none p-6'>
                <Sidebar />
              </div>

              <div className='w-3/4 h-fit bg-white shadow-lg p-6'>
                <AppRoutes />
              </div>
            </div>
          </div>
        </>
      ): (
        <>
        <NotAuthNav />
        <AppRoutes/>
        </>
      )}
    </BrowserRouter>
  )
}