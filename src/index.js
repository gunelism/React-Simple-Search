import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//components
import Header from './components/header.js';
import NewsList from './components/news_list';

class App extends Component {
    state = {
        news: JSON,
        filtered: []
        // active:'',
    }
    inputChangeHandler = (event) => {
        // const activeVal = event.target.value === '' ? '' : 'active' ;
        // this.setState({
            //     active: activeVal,
            // });
        let keyword=event.target.value;
        let filtered=this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });    
        this.setState({
            filtered
        });
    }
    render(){
        let newsWhole = this.state.news;
        let newsFiltered = this.state.filtered;
        return (
            <div> 
                <Header keyword={this.inputChangeHandler} />
                <NewsList news={this.state.filtered.length === 0 ? newsWhole : newsFiltered} >
                    <p className="red">The news are bellow:</p>
                </NewsList>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));