"use client"

import { useEffect, useState } from "react"
import app from "../Shared/firebaseConfig"
import { collection, getDocs,getDoc,doc, getFirestore, query, where } from "firebase/firestore";
import UserInfo from './../components/UserInfo'


export default function Profile({params}) {

    const [ userInfo, setUserInfo ] = useState()
    const db = getFirestore(app)


    useEffect(()=>{
       // console.log(params.userId.replace('%40',"@"))

        if(params){
            getUserInfo(params.userId.replace('%40',"@"))
        }
    },[params])

    const getUserInfo = async(email) =>{
        const docRef = doc(db, "user", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
       // console.log("Document data:", docSnap.data());
        setUserInfo(docSnap.data())
        } else {
        // docSnap.data() will be undefined in this case
        //console.log("No such document!");
}

    }

    return (
        <div className="">
            {userInfo?
            <UserInfo userInfo={userInfo}/>
            : 
            null
            }
        </div>
    )
};
