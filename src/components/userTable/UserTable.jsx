import React, { useEffect, useState } from 'react';
import {useCollection} from '../../hooks/useCollection'


import {db} from "../../firebase/config"
import {collection,getDocs} from "firebase/firestore"
import ChildUserTable from './tableChild/ChildUserTable';

const UserTable = () => {
    const {documents: formValues} = useCollection('formData')
    console.log(formValues)
    return (
        <ChildUserTable formValues={formValues}/>
    );
};

export default UserTable;

