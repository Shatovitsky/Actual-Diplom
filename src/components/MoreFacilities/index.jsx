import ModalEvents from '@components/Events/ModalEvents';
import { config } from '@constants';
import eventIcon from '@statics/icons/event.svg';
import signIcon from '@statics/icons/sign.svg';
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch, useSelector } from 'react-redux';

import {
  setUser,
  clearUser,
  clearAllEvents,
  clearScheduledEvents,
  setAllEvents,
  setScheduledEvents,
} from '../../redux/actions/googleCalendar';

import './index.scss';

function MoreFacilities() {
  const userData = useSelector((state) => state.googleCalendar.user);
  const googleImage = userData && userData.hK;
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const listAllEvents = () => {
    if (ApiCalendar.sign) {
      ApiCalendar.listEvents({
        orderBy: 'updated',
      }).then(({ result }) => {
        dispatch(setAllEvents(result.items));
      });
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const listUpcomingEvents = () => {
    if (ApiCalendar.sign) {
      ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
        dispatch(setScheduledEvents(result.items));
      });
    }
  };
  useEffect(() => {
    ApiCalendar.onLoad(() => {
      ApiCalendar.listenSign(signUpdate);
    });
    gapi.load('client: auth2', () => {
      gapi.auth2.init(config.clientId);
    });

    return () => {
      ApiCalendar.stopListeningSign(signUpdate);
    };
  }, []);
  const signUpdate = (sign) => {};

  const handleShowEventsClick = () => {
    if (isSignedIn) {
      handleOpenModal();
    } else if (!isSignedIn) {
      alert('Внимание! Для просмотра событий необходимо авторизоваться!');
    }
  };

  const handleItemClick = async (event, name) => {
    if (name === 'sign-in') {
      try {
        await ApiCalendar.handleAuthClick();

        setIsSignedIn(true);
        const userInfo = await ApiCalendar.getBasicUserProfile();

        dispatch(setUser(userInfo));
        listAllEvents();
        listUpcomingEvents();
      } catch (error) {
        if (error.error === 'user_signed_out') {
          console.log('Authorization window closed');
        } else {
          console.error('Authorization error:', error);
        }
      }
    } else if (name === 'sign-out') {
      dispatch(clearUser());
      dispatch(clearAllEvents());
      dispatch(clearScheduledEvents());
      setIsSignedIn(false);
    }
  };
  return (
    <div className='more-facilities'>
      <ul className='more-facilities-container'>
        <li
          className='more-facilities__item'
          onClick={(event) => handleItemClick(event, 'sign-out')}
        >
          {isSignedIn ? (
            <>
              <img
                style={{ paddingBottom: '6.5px', borderRadius: '50%' }}
                src={googleImage}
                alt='Avatar'
              />
              <h4>Sign Out</h4>
            </>
          ) : (
            <>
              <img
                onClick={(event) => handleItemClick(event, 'sign-in')}
                src={signIcon}
                alt=''
              />
              <h4>Sign In</h4>
            </>
          )}
        </li>

        <li className='more-facilities__item' onClick={handleShowEventsClick}>
          <img src={eventIcon} alt='' />
          <h4>Show Events</h4>
        </li>
      </ul>
      {showModal && <ModalEvents onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default MoreFacilities;
