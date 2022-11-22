import React, {useEffect, useRef, useState} from 'react';
import CreateUserForm from './createUserForm/CreateUserForm';

//firebase import
import {db} from '../../firebase/config'
import {collection,addDoc} from 'firebase/firestore'

const CreateUser = () => {
    const formRef = useRef()
    const fileClick = useRef()
    const [img,setImg] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
          await addDoc(collection(db,'formData'),{
            photo: img,
            email: formRef.current[2].value,
            password: formRef.current[3].value,
            confirmPassword: formRef.current[4].value,
            name: formRef.current[5].value,
            phNumber: formRef.current[6].value,
            birthday: formRef.current[7].value,
            nrc_num: formRef.current[8].value,
            nrc_state: formRef.current[9].value,
            nrc_national: formRef.current[10].value,
            nrc_numbers: formRef.current[11].value,
            gender: formRef.current[12].value,
          })

    }

    const imageHandler = () => {
        const reader = new FileReader();
        reader.readAsDataURL(formRef.current[0].files[0])
        reader.onload = (e) => {
            setImg(e.target.result)
        }
    }

    return (
        <div className='main-box'>
            <div className='real-box'>
                <div className='con-form'>
                    <CreateUserForm submitHandler={submitHandler} fileClick={fileClick} formRef={formRef} imageHandler={imageHandler}/>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;