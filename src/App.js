import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Loader from './Components/Loader/Loader';

const Home = lazy(() => import('./Components/Home'))
const Layout = lazy(() => import('./Components/Layout'))
const AddMovie = lazy(() => import('./Components/AddMovie'))
const NotFound = lazy(() => import('./Components/NotFound'))
const MovieDetails = lazy(() => import('./Components/MovieDetails'))
const MovieUpdate = lazy(() => import('./Components/MovieUpdate'))

function App() {

    const routers = createBrowserRouter([
        {
            path: '', element: <Layout />, children: [
                { index: true, element: <Home /> },
                { path: 'addmovie', element: <AddMovie /> },
                { path: 'moviedetails/:id', element: <MovieDetails /> },
                { path: 'movieupdate/:id', element: <MovieUpdate /> },
                { path: '*', element: <NotFound /> },
            ]
        }
    ])

    return (<>
        <Suspense fallback={<Loader/>}>
            <Provider store={store}>
                <RouterProvider router={routers}></RouterProvider>
            </Provider>
        </Suspense>
    </>)
}

export default App;
