import {db} from '../../../firebase/config'
import {doc, deleteDoc} from "firebase/firestore"
import HandleManipulation from '../handleManipulation/HandleManipulation'


const ChildUserTable = ({formValues}) => {

    const handleDelete = async (id)=>{
        const ref = doc(db,'formData',id)
        await deleteDoc(ref)
    }
    
  return (
    <div className='main-box'>
            <div className='real-box'>
                <h1 className='box-title'>Customers</h1>
                <form className='form-box'>
                    <input type="text" className='form-input' placeholder='Start Date' />
                    <input type="text" className='form-input ml' placeholder='End Date' />
                    <input type="submit" className='submit-btn ml' />
                </form>
                <button className='export-btn'>Export CSV</button>
                <div className='second-flex'>
                        <div className='select-box'>
                            <select name="" id="" className='select'>
                                <option value="5">5</option>
                            </select>
                        <label>entries per page</label>
                    </div>
                        <input type="text" className='responsive_br' placeholder='Search...' />
                    </div>
                <table className='table'>
                    <thead className='theader'>
                        <tr>
                            <td className='thead responsive_h' width='50px'>PHOTO</td>
                            <td className='thead' width='200px'>NAME</td>
                            <td className='thead' width='170px'>EMAIL</td>
                            <td className='thead' width='120px'>PHONE</td>
                            <td className='thead responsive-table' width='150px'>BIRTHDAY</td>
                            <td className='thead responsive-table' width='100px'>GENDER</td>
                            <td className='thead responsive-table' width='150px'>NRC</td>
                            <td className='thead responsive-table' width='250px'>Created At</td>
                            <td className='thead responsive_h' width='200px'>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                    {formValues &&
                        formValues.map((data,index)=>{  
                            return(
                                <tr key={index} className='tdata'>
                                    <td className='responsive_h' width='100px'>
                                        <img style={{width:'50px',height:'50px',objectFit:"cover"}} 
                                        src={data.photo} alt="" />
                                    </td>
                                    <td className='tdata'>{data.name}</td>
                                    <td className='tdata' width='250px'>{data.email}</td>
                                    <td className='tdata'>{data.phNumber}</td>
                                    <td className='tdata responsive-table'>{data.birthday}</td>
                                    <td className='tdata responsive-table'>{data.gender}</td>
                                    <td className='tdata responsive-table'>{data.nrc_num}/{data.nrc_state}{data.nrc_national}/{data.nrc_numbers}</td>
                                    <td className='tdata responsive-table'>{data.time} {data.hour} H</td>
                                    <HandleManipulation data={data} handleDelete={handleDelete}/>
                                </tr>
                            )
                        })
                    }
        
                    </tbody>
                </table>
                <div className='second-flex'>
                    <p className='except'>Showing 1 to 15 of 14 entries</p>
                    <div className='btn-box'>
                        <button className='active'>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ChildUserTable