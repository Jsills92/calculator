import React from 'react';

const Button = ({ label, onClick }) => (
    <button className="button" id={label} onClick={() => onClick(label)} >{label}
    </button>
);

export default Button;