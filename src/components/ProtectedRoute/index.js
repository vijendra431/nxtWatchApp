import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

// Centralizes the auth-check logic exactly once, instead of repeating
// "check for jwt_token, else redirect to /login" inside every single
// route component (Home, Trending, Gaming, SavedVideos, VideoItemDetails).
const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
