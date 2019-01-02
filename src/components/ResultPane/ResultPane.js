import React from 'react';
import {Link} from 'react-router-dom';

const SeriesItem = (show) => {
     console.log(show);
    // //console.log(series.show.name)
    // console.log(item.series.show.url);
    // //console.log(series.series.show.image.medium);

    let isImageSrcNull = 
        (show.series.image === null) ? "" 
        : show.series.image.medium;
    return (
    <li>
        <Link to={`/series/${show.series.id}`}>            
            <h4>{show.series.name}</h4>
            <img alt='not available' src={isImageSrcNull} />
        </Link>
        
    </li>);
};

const ResultPane = (props) => (
    <div id='result-pane'>
        <ul>
            {
                props.list.map(function(item) {                    
                    return (
                        <SeriesItem 
                            series={item.show}                             
                            key={item.show.id}/>)
                })             
            }
        </ul>
    </div>
);

export default ResultPane;