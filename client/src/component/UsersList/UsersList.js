import React from 'react';
import PropTypes from 'prop-types';
import './userslist.scss';

function UsersList({
  firstname,
  lastname,
}) {
  return (
    <ul>
      <li>
        {lastname}
        {' '}
        {firstname}
      </li>
    </ul>
  );
}

UsersList.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
UsersList.defaultProps = {
};
export default React.memo(UsersList);
