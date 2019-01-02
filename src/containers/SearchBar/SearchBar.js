import React, {Component} from 'react';
import ResultPane from '../../components/ResultPane/ResultPane'


class SearchBar extends Component {
    state = {
        series: [],
        value: "",
        isFetching: false,
    }    

    onSeriesInputChange = e => {
        this.setState({isFetching: true, value: e.target.value});
        console.log(e.target.value);
        //console.log(this.state);

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({series: json, isFetching: false}))   
        
    };

    render() {        
        const {series, value, isFetching} = this.state;
        //console.log(series.length);
        console.log(this.state);
        return (
            <div id="search-bar-div">
                <input 
                    type="text" 
                    value={value} 
                    onChange={this.onSeriesInputChange}/>
                {
                    !isFetching && series.length > 0
                    &&
                    <ResultPane list={series} value={value}/>
                }
                {
                    isFetching
                    &&
                    <p>Loading...</p>
                }
            </div>        
        );
    };
}


export default SearchBar
