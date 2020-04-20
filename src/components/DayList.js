import React from 'react'

function DayList() {
    return (
        <div className="day-list">
            <div className="day-list_item">
                <div>M</div>
                <div>2:00</div>
            </div>
            <div className="day-list_item">
                <div>T</div>
                <div>2:00</div>
            </div>
            <div className="day-list_item">
                <div>W</div>
                <div>2:00</div>
            </div>
            <div className="day-list_item">
                <div>T</div>
                <div>2:00</div>
            </div>
            <div className="day-list_item active">
                <div>F</div>
                <div>2:00</div>
            </div>
            <div className="day-list_item">
                <div>S</div>
                <div>0:00</div>
            </div>
            <div className="day-list_item">
                <div>S</div>
                <div>0:00</div>
            </div>
        </div>
    )
}

export default DayList
