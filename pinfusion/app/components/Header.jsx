"use client"

import Image from "next/image";
import { HiSearch, HiBell, HiChat  } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from '../Shared/firebaseConfig'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {

    const { data: session } = useSession();

    const router = useRouter();

    //  Firebase Add data  ----------------------
    const db = getFirestore(app)

    useEffect(()=>{
        saveUserInfo()
    },[session])

    const saveUserInfo = async() => {

        if(session?.user){
        await setDoc(doc(db, "user", session.user.email), {
            userName: session?.user.name,
            email: session?.user.email,
            userImage: session?.user.image
          });
        }  
    }
 //------------------------------------ 

    console.log(session)
    return (
        <div 
        className="flex gap-3 md:gap-2 p-6 items-center">
            <Image src='/logo.png' alt='logo' width={50} height={50}
            className="hover:bg-gray-500 p-2 rounded-full cursor-pointer"/>

            <button 
            className="bg-red-600 text-white p-2 px-4 rounded-full hidden md:block">Home</button>

            <button 
            className="bg-violet-600 p-2 px-4 rounded-full font-semibold">Create</button>

            <div 
            className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
                <HiSearch className='text-[25px] text-red-600 md:hidden'/>
                <input type="text" placeholder="Search"
                className="bg-transparent outline-none text-black" />
                
            </div>
                <HiBell className='md:text-[40px] text-[25px] text-gray-400 cursor-pointer'/>
                <HiChat className='md:text-[40px] text-[25px] text-gray-400 cursor-pointer' />
                { session?.user? <Image src={session?.user?.image} 
                onClick={()=>router.push("/"+ session?.user?.email)}
                alt="user-image" width={50} height={50}
                className="hover:bg-gray-500 p-2 rounded-full cursor-pointer"/>   :

           <button  className=" p-2 px-4 rounded-full font-semibold" onClick={() => signIn()}>Login</button>}
            </div>
    )
}
