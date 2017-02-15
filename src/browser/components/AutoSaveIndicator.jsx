const React = require('react');
const {Alert} = require('react-bootstrap');

function AutoSaveIndicator(props) {
  const {savingState, errorMessage, ...rest} = props;
  return (
    <Alert
      className='AutoSaveIndicator'
      {...rest}
      bsStyle={savingState === 'error' ? 'danger' : 'info'}
    >
      {(() => {
        switch (savingState) {
        case 'saving':
          return 'Saving...';
        case 'saved':
          return 'Saved!';
        case 'error':
          return errorMessage;
        default:
          return '';
        }
      })()}
    </Alert>
  );
}

AutoSaveIndicator.propTypes = {
  savingState: React.PropTypes.string.isRequired,
  errorMessage: React.PropTypes.string
};

module.exports = AutoSaveIndicator;
