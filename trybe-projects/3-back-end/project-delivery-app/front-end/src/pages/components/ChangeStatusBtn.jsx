import React from 'react';
import PropTypes from 'prop-types';

function ChangeStatusBtn({ content, func, testId, setChecked, disable }) {
  console.log(func);
  return (
    <button
      type="submit"
      disabled={ disable }
      onClick={ () => setChecked(true) }
      data-testid={ testId }
    >
      { content }
    </button>
  );
}

export default ChangeStatusBtn;

ChangeStatusBtn.propTypes = {
  content: PropTypes.string,
  func: PropTypes.func,
  testId: PropTypes.string,
}.isRequired;
