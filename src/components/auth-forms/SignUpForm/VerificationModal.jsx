import { createPortal } from 'react-dom';
import css from './Verification-modal.module.css';
import { RiMailSendLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

const VerificationModal = () => {
  const [isVerificationError, setVerificationError] = useState(false);
  const [isEmailResend, setResendStatus] = useState(true);
  const navigate = useNavigate();

  const email = useSelector(state => state.auth.user.email);

  // const onClose = () => {
  //   closeModal(false);
  // };

  const isEmailVerified = async () => {
    try {
      const sendData = {
        email,
      };

      const data = await axios.post(
        'http://localhost:3001/api/users/verification/check',
        sendData
      );

      if (data.status !== 200) {
        throw new Error();
      }

      console.log('data', data);
      navigate('/login');
      return true;
    } catch (error) {
      setVerificationError(true);
      console.log('Error: ', error);
      throw error;
    }
  };

  const resendEmail = async () => {
    try {
      const sendData = {
        email: 'asdad@gmail.com',
      };

      const response = await axios.post(
        'http://localhost:3001/api/users/verify',
        sendData
      );

      if (response.status !== 200) {
        throw new Error();
      }
      console.log('data', response);
    } catch (error) {
      setResendStatus(false);
      console.log('Error: ', error);
      throw error;
    }
  };

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        {/* <button className={css.modal__closeButton} onClick={onClose}>
          <AiOutlineCloseCircle className={css.modal__closeIcon} />
        </button> */}
        <h2 className={css.modal__text}>Verify your email</h2>
        <div className={css.verification}>
          <button
            className={css.verification__button}
            onClick={isEmailVerified}
          >
            {' '}
            I have verified my email
          </button>
          {isVerificationError && (
            <p className={css.verification__text}>You are not verified</p>
          )}
        </div>
        <div className={css.resendEmail}>
          <p className={css.resendEmail__text}>
            Do not see the email?{' '}
            {!isEmailResend ? (
              <span className={css.text}>Try again</span>
            ) : (
              'Resend'
            )}{' '}
            --&gt;
          </p>
          <button className={css.resendEmail__button} onClick={resendEmail}>
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
