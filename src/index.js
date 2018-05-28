import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//components
import Header from './components/header.js';
import NewsList from './components/news_list';

class App extends Component {
    state = {
        news: JSON
    }
    render(){
        return (
            <div> 
                <Header/>
                <NewsList news={this.state.news}>
                    <p className="red">The news are bellow:</p>
                </NewsList>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));