import React from 'react'
import { useState } from 'react'
const eventform = () => {
    const[eventName,setEventName]=useState('');
    const[conditionName,setConditionName]=useState('');
    const updateEvent = (e) => {
        setEventName(e.target.value);
    }
    const updateConditionName = (e) => {
      setConditionName(e.target.value);
  }
  return (
    <div>
      <div>
        <label htmlFor="eventname">Enter the Event</label>
        <input type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={updateEvent}required
        id='eventname'
        />
      </div>

      <div>
      <label htmlFor="conditionname">Enter the Condition</label>
        <input type="text"
        placeholder="Condition Name"
        value={conditionName}
        onChange={updateConditionName}required
        id='conditionName'
        />
      </div>

      <button>submit</button>
    </div>
  )
}

export default eventform
