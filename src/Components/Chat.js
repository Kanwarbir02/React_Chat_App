import SignOut from "./SignOut.js";
import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import "firebase/firestore";
import SendMesaage from "./SendMessage.js";



const Chat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('messages').orderBy("createdAt").limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })  
        
    }, [])

    return ( 
        <div>
            <SignOut />
    
            <div className="msgs">
                {messages.map(({id,text, photoURL}) => (

                    <div>
                        <div key={id}>

                            <img src={photoURL} alt="" />
                            <p>{text}</p>

                        </div>
                    </div>
    
                ))}
            </div>

            <SendMesaage />

        
        </div>
     );
}
 
export default Chat;


