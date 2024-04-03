import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AnnouncementForm = ({ data, setData, showForm, updateAnnouncements, cancelAnnouncement }) => {
  return (
    showForm && (
      <form onSubmit={updateAnnouncements} key={uuidv4()} className="announcement-container">
        <input type="text" placeholder="Title Text..." value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        <textarea
          key="text"
          placeholder="text goes here..."
          value={data.text} className="new-announcement-textarea"
          onChange={(e) => setData({ ...data, text: e.target.value })} />
        <div className="announcement-options">
          <button className="announcement-option cancel" onClick={cancelAnnouncement}>Cancel</button>
          <button type="submit" className="announcement-option submit">Submit</button>
        </div>
      </form>
    )
  );
}

export default function useAnnouncementForm(oldData, showForm, updateAnnouncements, cancelAnnouncement) {
    const [data, setData] = useState(oldData)

    return [
        <AnnouncementForm
        data={data}
        setData={setData}
        showForm={showForm}
        updateAnnouncements={updateAnnouncements}
        cancelAnnouncement={cancelAnnouncement}/>
    ]
}
