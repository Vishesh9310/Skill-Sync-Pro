import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Nav from './components/layout/navbar'
import Sidebar from './components/layout/sidebar'

export default function App() {

  return (
    <BrowserRouter>
      <Nav />
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
    </BrowserRouter>
  )
}