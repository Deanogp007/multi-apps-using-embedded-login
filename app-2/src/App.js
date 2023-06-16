import './App.css';
import { useAuth } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();

  const redirectToLogin = () => {
    window.location.href = `http://localhost:3000?redirectUrl=${window.location}`;
  }

  return (
      <div className='App'>
        {isAuthenticated ? (
                <div>
                  <img src={user.profilePictureUrl} alt={user.name} />
                  <span>{user.name}</span>
                </div>
            ) :
            <div>
              <button onClick={() => redirectToLogin()}>Click to authenticate</button>
            </div>
        }
      </div>
  );
}

export default App;
