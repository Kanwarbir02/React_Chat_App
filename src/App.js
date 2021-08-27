import './App.css';
import SignIn from './Components/SignIn';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";
import Chat from "./Components/Chat.js";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Chat /> : <SignIn />}
    </div>
    
    
  );
}

export default App;
