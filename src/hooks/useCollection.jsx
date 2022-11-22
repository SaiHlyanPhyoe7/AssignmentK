import {useEffect, useRef, useState} from "react";
import {collection,onSnapshot, query, where} from "firebase/firestore";
import {db} from "../firebase/config";

// getdata from firebase
export const useCollection = (c)=>{
    const [documents,setDocuments]= useState(null)

    // set up query
    // const q = useRef(_q).current

    useEffect(()=>{
        let ref = collection(db,c)

        // if(q){
        //     ref = query(ref, where(...q))
        // }

        const unsub = onSnapshot(ref, (snapshot)=>{
            let results =[]
            snapshot.docs.forEach(doc=> {
                results.push({id: doc.id, ...doc.data()})
            })
            setDocuments(results)
        })
        return ()=> unsub()
    },[c])
    return {documents}
}
