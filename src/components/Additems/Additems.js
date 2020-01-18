import React , {Component} from 'react';
import './Additems.css';


class AddItem extends Component {
    state = {
        name : '',
        age : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === ''){
            alert("Please Enter Name")
        return false
        } else if (e.target.age.value === '') {
            alert("Please Enter Age")
            return false
        }else  {
            this.props.addItem(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
    }



    render(){
        return(
        <div id='add'>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter name ..." id="name" onChange={this.handleChange} value={this.state.name} required/>
                <input type="number" placeholder="Enter age ..." id="age" onChange={this.handleChange} value={this.state.age} required/>
                <input type="submit" value="Add" />
            </form>
        </div>
        )
    }
}

export default AddItem