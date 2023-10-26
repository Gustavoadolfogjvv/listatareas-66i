import React from 'react';
import { Alert } from 'react-bootstrap';

const Status = ({ classroon, enable }) => {
    return (
        <div>
            <Alert variant='info'>
                La comision {classroon} esta habilitada
            </Alert>
        </div>
    );
};

export default Status;