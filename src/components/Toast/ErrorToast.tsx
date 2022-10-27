import styled from 'styled-components';

const StyledToast = styled.div`
  min-width: 250px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  top: 30px;
  left: 30px;
  .notification {
    position: relative;
    padding: 15px;
  }

  button {
    top: -5px;
    right: -5px;
    position: absolute;
  }

  -webkit-animation: fadein 0.5s;
  animation: fadein 0.5s;

  @-webkit-keyframes fadein {
    from {
      left: 0;
      opacity: 0;
    }
    to {
      left: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      left: 0;
      opacity: 0;
    }
    to {
      left: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      left: 30px;
      opacity: 1;
    }
    to {
      left: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      left: 30px;
      opacity: 1;
    }
    to {
      left: 0;
      opacity: 0;
    }
  }
`;

const ErrorToast = () => {
  return (
    <StyledToast id="toast">
      <div className="notification toast">
        <p className="notification-title">Error with API</p>
        <p className="notification-message">Please, reload the page</p>
      </div>
    </StyledToast>
  );
};

export default ErrorToast;
