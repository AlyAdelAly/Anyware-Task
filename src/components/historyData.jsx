import React from 'react';
import moment from 'moment';

function HistoryData(props) {
    return (
        <div>
            <h1 className='m-2'>number : {props.item.number} </h1>
            <h1 className='m-2'>local_format : {props.item.local_format} </h1>
            <h1 className='m-2'>international_format : {props.item.international_format} </h1>
            <h1 className='m-2'>country_code : {props.item.country_code} </h1>
            <h1 className='m-2'>country_prefix : {props.item.country_prefix} </h1>
            <h1 className='m-2'>location : {props.item.location} </h1>
            <h1 className='m-2'>line_type : {props.item.line_type} </h1>
            <h1 className='m-2'>valid : {props.item.valid} </h1>
            <h1 className='m-2'>created_at : {moment(props.item.createdAt).format('L hh:mm:ss')} </h1>
        </div>
    )
}

export default HistoryData