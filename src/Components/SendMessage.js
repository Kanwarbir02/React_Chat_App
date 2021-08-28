import { Input,Button } from "@material-ui/core";
import { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../firebase";

const SendMesaage = () => {

    const [textMsg, setTextMsg] = useState("");
    
    async function sendMsg(e){
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: textMsg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTextMsg('')
    }

    return ( 

        <div>

            <form action="" onSubmit={sendMsg}>
                <Input type="text" placeholder="Type a Message..." value={textMsg} onChange={(e) => setTextMsg(e.target.value)}></Input>
                <Button type="Submit">Send</Button>
            </form>
            
        </div>
     );
}
 
export default SendMesaage;
