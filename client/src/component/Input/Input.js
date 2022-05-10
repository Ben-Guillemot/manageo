/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

function Input({
  type,
  labelValue,
  nameValue,
  value,
  handleChange,
  placeholder,
  required,
  idValue,
}) {
  return (
    <div className="input__container">
      <label className="input__container-label" htmlFor={idValue}>{labelValue}</label>
      <input
        className="input__container-input"
        required={required}
        type={type}
        value={value}
        id={idValue}
        name={nameValue}
        placeholder={placeholder}
        onChange={(event) => handleChange(nameValue, event.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  nameValue: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
};
Input.defaultProps = {
  handleChange: null,
  placeholder: '',
  required: false,
};
export default React.memo(Input);
