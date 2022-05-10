import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './message.scss';

function Message({
  classname,
  message,
  stopShowMessage,
  content,
}) {
  useEffect(() => {
    stopShowMessage(message);
  }, []);

  return (
    <p className={classname}>
      {content}
    </p>
  );
}

Message.propTypes = {
  classname: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  stopShowMessage: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
Message.defaultProps = {
};
export default React.memo(Message);
