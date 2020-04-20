import React from 'react'
import DayList from "./DayList"
function DateBar() {
    return (
        <div className="date-bar">
        <div className="date-bar_date">Today, 19 April</div>
            <DayList/>
        </div>
    )
}

export default DateBar
