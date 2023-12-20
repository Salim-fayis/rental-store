import React from 'react'
import ImageAttachmentSection from './ImageAttachmentSection';
import './WorkingHours.css'
function WorkingHoursSection() {
  const openHour = '9:30';
  const openPeriod = 'AM';

  const closeHour = '9:30';
  const closePeriod = 'PM';
  return (
    <>
      <div className="working-hours">
        <h2>Working Hours</h2>
        <div className="time-box">
          <div className="box open-hour-box">
            <span className="time">{openHour}</span>
          </div>
          <div className="box open-period-box">
            <span className="time">{openPeriod}</span>
          </div>
          <div className="to">
            to
          </div>

          <div className="box close-hour-box">
            <span className="time">{closeHour}</span>
          </div>
          <div className="box close-period-box">
            <span className="time">{closePeriod}</span>
          </div>
        </div>
        <ImageAttachmentSection />
      </div>

    </>

  )
}

export default WorkingHoursSection