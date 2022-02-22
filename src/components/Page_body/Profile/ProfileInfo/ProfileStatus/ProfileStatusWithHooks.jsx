// import classes from './ProfileStatus.module.css';
import React, { useState } from "react";

const ProfileStatusWithHooks = (props) =>  {
    let [a,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)


    const activeEditMode =  () =>{setEditMode(true)}
    const deactivateEditMode = () => {setEditMode(false);props.updateStatus(status)} 
    const onStatusChange =  (e) =>{setStatus(e.currentTarget.value + '1')}


    return (
        <div>{a
            ?   <div >
                    <input onBlur={deactivateEditMode}  autoFocus={true}  
                    onChange={onStatusChange}  value={status}/>  
                </div>
            :   <div >
                    <span onDoubleClick={activeEditMode} >{props.status || '----'}</span>
                </div>    
        }</div>
        )
    
}
export default ProfileStatusWithHooks;