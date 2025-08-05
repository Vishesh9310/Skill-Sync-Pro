import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import IsAuthNav from './components/layout/navbar/isAuthNav/IsAuthNav'
import NotAuthNav from './components/layout/navbar/notAuthNav/NotAuthNav'
import Sidebar from './components/layout/sidebar'
import Footer from './components/layout/footer'
import { useSelector } from 'react-redux'


export default function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <div className="flex flex-col min-h-screen">
          <IsAuthNav />
          
          {/* Content area should grow to push footer */}
          <div className="flex-grow">
            <div className='h-full w-full p-10 font-sans'>
              <div className='inline-flex w-full rounded-2xl overflow-hidden shadow-lg shadow-gray-400'>
                <div className='w-1/4 bg-none p-6'>
                  <Sidebar />
                </div>

                <div className='w-3/4 bg-white shadow-lg p-6'>
                  <AppRoutes />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <NotAuthNav />

          {/* Content grow */}
          <div className="flex-grow">
            <AppRoutes />
          </div>

          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}
