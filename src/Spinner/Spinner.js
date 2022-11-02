import React from 'react';
import { Circles } from 'react-loader-spinner';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='blur blur-from-1'></div>
            <div className='blur blur-from-2'></div>
            <Circles
                height="80"
                width="80"
                color="var(--orange)"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;