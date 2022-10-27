import styled from 'styled-components';

const StyledToast = styled.div`
  min-width: 250px;
  background-color: #fbda4c;
  color: #000000;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  top: 30px;
  right: 30px;
  font-weight: 500;
  border-radius: 25px;
  opacity: 0.9;
  .notification {
    position: relative;
    padding: 15px;
  }

  button {
    top: -5px;
    right: -5px;
    position: absolute;
  }

  -webkit-animation: 0.5s linear fadein, 0.5s linear 5s fadeout;
  animation: 0.5s linear fadein, 0.5s linear 5s fadeout;

  @-webkit-keyframes fadein {
    from {
      right: 0;
      opacity: 0.9;
    }
    to {
      right: 30px;
      opacity: 0.9;
    }
  }

  @keyframes fadein {
    from {
      right: 0;
      opacity: 0.9;
    }
    to {
      right: 30px;
      opacity: 0.9;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      right: 30px;
      opacity: 0.9;
    }
    to {
      right: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      right: 30px;
      opacity: 0.9;
    }
    to {
      right: 0;
      opacity: 0;
    }
  }
  @media (max-width: 420px) {
    top: auto;
    bottom: 30px;
    @-webkit-keyframes fadein {
      from {
        bottom: 0;
        opacity: 0.9;
      }
      to {
        bottom: 30px;
        opacity: 0.9;
      }
    }

    @keyframes fadein {
      from {
        bottom: 0;
        opacity: 0.9;
      }
      to {
        bottom: 30px;
        opacity: 0.9;
      }
    }

    @-webkit-keyframes fadeout {
      from {
        bottom: 30px;
        opacity: 0.9;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }

    @keyframes fadeout {
      from {
        bottom: 30px;
        opacity: 0.9;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
  }
`;

const NoCityMatch = () => {
  return (
    <StyledToast id="toast">
      <div className="notification toast">
        <p className="notification-title">No matches</p>
        <p className="notification-message">Make sure itʼs correct</p>
      </div>
    </StyledToast>
  );
};

export default NoCityMatch;
