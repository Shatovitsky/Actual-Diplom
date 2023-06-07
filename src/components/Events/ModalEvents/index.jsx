import { today } from '@constants';
import formatTime from '@formatTime';
import dateFormat from 'dateformat';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

function ModalEvents({ onClose }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [showScheduledEvents, setShowScheduledEvents] = useState(false);
  const scheduledEvents = useSelector(
    (state) => state.googleCalendar.scheduledEvents,
  );
  const events = useSelector((state) => state.googleCalendar.allEvents);

  const buttonText = showScheduledEvents ? 'All Events' : 'Scheduled Events';
  const displayedEvents = showScheduledEvents ? scheduledEvents : events;
  let eventsPerPage = 6;
  if (window.innerWidth <= 1740) {
    eventsPerPage = 4;
  }
  if (window.innerWidth <= 1185) {
    eventsPerPage = 2;
  }
  const offset = currentPage * eventsPerPage;
  const currentEvents = displayedEvents.slice(offset, offset + eventsPerPage);
  const totalPages = Math.ceil(displayedEvents.length / eventsPerPage);

  const handleShowAllEventsClick = () => {
    setShowScheduledEvents(false);
  };

  const handleShowScheduledEventsClick = () => {
    setShowScheduledEvents(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleExitClick = () => {
    onClose();
  };

  return (
    <div
      className={`modal-overlay ${showModal ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modal-content ${showModal ? 'open' : ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        <svg
          onClick={handleExitClick}
          className='modal-content__close'
          width='20'
          height='20'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41L8.59 0Z'
            fill='#2E3A59'
          />
        </svg>

        <div className='modal-content__facilities'>
          <h3 className='modal-content__facilities_time'>
            {dateFormat(today, 'fullDate')}
          </h3>
          <div
            className='modal-content__facilities_sort-events'
            onClick={
              showScheduledEvents
                ? handleShowAllEventsClick
                : handleShowScheduledEventsClick
            }
          >
            {buttonText}
          </div>
        </div>
        <ul className='modal-content__events'>
          {currentEvents.map((item) => (
            <article key={item.id} className='events'>
              <h2 className='events__title'>{item.summary}</h2>
              <div className='events__time'>
                {formatTime(item.start.dateTime)} -{' '}
                {formatTime(item.end.dateTime)}
              </div>
              <p className='events__description'>{item.description}</p>
              <p className='events__organizer'>{item.organizer.email}</p>
            </article>
          ))}
        </ul>
        <div id='pagination-container'>
          <ReactPaginate
            previousLabel='←'
            nextLabel='→'
            breakLabel='...'
            breakClassName='break-me'
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName='pagination'
            activeClassName='active'
          />
        </div>
      </div>
    </div>
  );
}
export default ModalEvents;
