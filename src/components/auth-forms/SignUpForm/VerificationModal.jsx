import { createPortal } from 'react-dom';
import css from './Verification-modal.module.css';
import { RiMailSendLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resendEmail } from 'redux/ApiOperations';
import Loader from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

const VerificationModal = () => {
  const dispatch = useDispatch();
  const [isVerificationError, setVerificationError] = useState(false);
  const navigate = useNavigate();

  const email = useSelector(state => state.auth.user.email);
  const isEmailResend = useSelector(
    state => state.auth.isAuthProblem.isEmailSent
  );
  const isEmailSending = useSelector(state => state.auth.isInnerLoader);

  const isEmailVerified = async () => {
    try {
      const sendData = {
        email,
      };

      const data = await axios.post(
        'https://phonebook-6iw6.onrender.com/api/users/verification/check',
        sendData
      );

      if (data.status !== 200) {
        throw new Error();
      }

      navigate('/login');
      return true;
    } catch (error) {
      setVerificationError(true);
      console.log('Error: ', error);
      throw error;
    }
  };

  const resendMail = async () => {
    dispatch(resendEmail(email));
  };

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <h2 className={css.modal__text}>Verify your email</h2>
        <div className={css.verification}>
          <button
            className={css.verification__button}
            onClick={isEmailVerified}
          >
            I have verified my email
          </button>

          {isVerificationError && (
            <p className={css.verification__text}>You are not verified</p>
          )}
        </div>
        <div className={css.resendEmail}>
          {isEmailSending ? (
            <Loader width={50} height={50} marginTop={0} />
          ) : (
            <p className={css.resendEmail__text}>
              Do not see the email?{' '}
              {!isEmailResend ? (
                <span className={css.text}>Try again</span>
              ) : (
                'Resend'
              )}{' '}
              --&gt;
            </p>
          )}
          <button className={css.resendEmail__button} onClick={resendMail}>
            <RiMailSendLine
              className={`${css.resendEmail__icon} ${
                !isEmailResend ? css.resendError : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default VerificationModal;
