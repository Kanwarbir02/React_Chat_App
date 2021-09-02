import { Input,Button } from "@material-ui/core";
import { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../firebase";

const SendMesaage = ({scroll}) => {

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

        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return ( 

        <div>

            <form action="" onSubmit={sendMsg}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }}  type="text" placeholder="Type a Message..." value={textMsg} onChange={(e) => setTextMsg(e.target.value)}></Input>

                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}}  type="Submit">Send</Button>

                </div>
                
            </form>
            
        </div>
     );
}
 
export default SendMesaage;
