import React from 'react';

const New = (props) => {

    return(
        <il className='new'>
            <div className='img'>

            </div>
            <div className='content'>
                <div className='title'>
                    <p>{props.new.Title}</p>
                </div>
                <div className='text'>
                    <p>{props.new.News}</p>
                </div>
                <div className='data'>
                    <div className='date'>{props.new.Date}</div>
                    <div className='section'>{props.new.Section}</div>
                </div>
            </div>
        </il>
    )

}
export default New