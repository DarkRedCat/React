// import classes from './ProfileStatus.module.css';
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title : 'you'
    }
    activeEditMode () {
        (!this.state.editMode)
        ? this.setState({editMode :true})
        : this.setState({editMode :false}) 
    }
    render() {
        return (
          <div>
            {this.state.editMode
                ?   <div >
                        <input 
                        autoFocus={true} onBlur={this.activeEditMode.bind(this)}
                         onDoubleClick={this.activeEditMode.bind(this)}
                            /* value={this.state.title} *//>  
                    </div>
                :   <div >
                        <span onDoubleClick={this.activeEditMode.bind(this)}>
                            {this.state.title}</span>
                    </div>
            }
          </div>
        )
    }
}
export default ProfileStatus;