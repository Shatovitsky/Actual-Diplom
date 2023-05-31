import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch } from 'react-redux';

export default function Calendar() {
  const dispatch = useDispatch();
  const cliendId =
    '922043152403-mdibionvoljcih5a2eeh7aaidjbo87le.apps.googleusercontent.com';
  useEffect(() => {
    // При загрузке компонента устанавливаем обработчик на изменение состояния авторизации
    ApiCalendar.onLoad(() => {
      ApiCalendar.listenSign(signUpdate);
    });
    gapi.load('client: auth2', () => {
      gapi.auth2.init({ cliendId });
    });

    // Очищаем обработчик при размонтировании компонента
    return () => {
      ApiCalendar.stopListeningSign(signUpdate);
    };
  }, []);

  const signUpdate = (sign) => {
    console.log(sign);
  };

  const getUserInfo = async () => {
    try {
      if (ApiCalendar.sign) {
        const response = await ApiCalendar.getBasicUserProfile();
        return response;
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleItemClick = (event, name) => {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick().catch((error) => {
        if (error.error === 'user_signed_out') {
          console.log('Authorization window closed');
        } else {
          console.error('Authorization error:', error);
        }
      });
      console.log('logged in');
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
      console.log('logged out');
    }
  };

  const listUpcomingEvents = () => {
    if (ApiCalendar.sign) {
      ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
        console.log('upcoming events', result.items);
      });
    }
  };

  const updateEvent = () => {
    const eId = '1sgfm3eh7o9e6r6n5h73kq6su4';
    const event = {
      summary: 'changed name to meet30june for demo purposes',
    };
    ApiCalendar.updateEvent(event, eId).then((res) => {
      console.log(res);
    });

    ApiCalendar.getEvent(eId).then(console.log);
  };

  const createEventFromNow = () => {
    const eventFromNow = {
      summary: 'Poc Dev From Now',
      time: 180,
    };

    ApiCalendar.createEventFromNow(eventFromNow)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const createEvent = () => {
    const stDate = '2021-07-01T12:00:00+05:30';
    const endDate = '2021-07-01T15:00:00+05:30';
    const event = {
      summary: 'new event created',
      description: 'demo of create event function',
      start: {
        dateTime: stDate,
      },
      end: {
        dateTime: endDate,
      },
    };

    ApiCalendar.createEvent(event)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <div />;
}
