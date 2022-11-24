import React from 'react';
import Star from './Star';

const Stars = (props) => {
    
    const count = props.count; 
    console.log(count);
    var data = [];
    for (var i=0;i<count;i++)
        data.push(i);
    return(   
        <ul className="card-body-stars u-clearfix">   
            {
                count>=1 &&
                count<=5  &&  
                data.map((item)=><Star/>)                
            }   
        </ul>
    )    
}
export default Stars;