import {Button} from "@material-ui/core"
import {auth} from "../firebase.js";
import firebase from "firebase"

const SignIn = () => {

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);


    }

    return ( 
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
     );
}
 
export default SignIn;