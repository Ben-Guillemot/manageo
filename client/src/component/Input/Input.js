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
    <>
      <label htmlFor={idValue}>{labelValue}</label>
      <input
        required={required}
        type={type}
        value={value}
        id={idValue}
        nameValue={nameValue}
        placeholder={placeholder}
        variant="outlined"
        onChange={(event) => handleChange(nameValue, event.target.value)}
      />
    </>
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
