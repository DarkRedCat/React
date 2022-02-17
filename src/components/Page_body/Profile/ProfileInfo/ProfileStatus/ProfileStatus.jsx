// import classes from './ProfileStatus.module.css';
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status : this.props.status
    }
    activeEditMode = () => {this.setState({editMode :true})}
    disActiveEditMode = () => {
        this.setState({editMode :false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) =>{this.setState({status : e.currentTarget.value})}

    render() {
        return (
          <div>
            {this.state.editMode
                ?   <div >
                        <input 
                        onChange={this.onStatusChange}
                        autoFocus={true} onBlur={this.disActiveEditMode}
                        onDoubleClick={this.disActiveEditMode}
                        value={this.state.status} />  
                    </div>
                :   <div >
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || '----'}</span>
                    </div>
            }
          </div>
        )
    }
}
export default ProfileStatus;