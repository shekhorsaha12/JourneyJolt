import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './views/login'
import Register from './views/register'
import Home from './views/home'
import Places from './views/places'
import PlaceDetails from './views/place-details'
import Profile from './views/profile'
import CreatePlace from './views/create-place'
import EditPlace from './views/edit-place'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="place-details" element={<PlaceDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="create-place" element={<CreatePlace />} />
        <Route path="edit-place" element={<EditPlace />} />

        {/* url.com/test/subtest */}
        {/* <Route path="test" element={<TouristHome />}>
          <Route path="subsectopm" element={<TouristHome />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
