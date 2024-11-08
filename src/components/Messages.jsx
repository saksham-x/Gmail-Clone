import React, { useEffect } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from './redux/appSlice'

function Messages() {
    const dispatch = useDispatch();
    const { emails } = useSelector(store => store.appSlice)
    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dispatch(setEmails(allEmails))
        })
        //cleanup
        return () => {
            unsubscribe()
        }

    }, [])
    return (
        <div>
            {
                emails && emails?.map((email) => (
                    <Message key={email.id} email={email} /> // email ={email } bhaneko email as a prop message component ma ma pass gareko 
                ))
            }


        </div>
    )
}

export default Messages
