import React, {Component} from 'react';

class Header extends Component {
    state = {
        active:'',
        keyword: ''
    }
    inputChangeHandler = (event) => {
        const activeVal = event.target.value === '' ? '' : 'active' ;
        this.setState({
            active: activeVal,
            keyword:event.target.value
        });
    }

    render(){
        return (
            <header className={this.state.active}>
                <p className='logo'>Logo</p> 
                <input onChange={this.inputChangeHandler} type='text' />
            </header>
        );
    }
}

export default Header;