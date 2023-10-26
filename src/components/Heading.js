import React from 'react';
import Status from './Status';

const Heading = (props) => {
    // console.log(props);
    //const { classroon, enable } = props
    //console.log(classroon, enable);
    return (
        <div>
            <h1 className='display-4 text center'>Lista de Tareas{props.classroon}</h1>
            <Status classroon={props.classroom} enable={props.enable}></Status>
            <hr />

        </div>
    );
};

export default Heading;