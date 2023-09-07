import { useEffect } from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { getTokenFromUrl } from './spotify';
import PlayerComponent from './components/PlayerComponent';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }

    console.log(user)
    console.log(token)
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      {
        token
          ? <PlayerComponent />
          : <LoginComponent />
      }
    </div>
  );
}

export default App;
