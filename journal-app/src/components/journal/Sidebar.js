
import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = ()=>{
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-nabvar mt-1">
                <h3 className="mt-1 mb-1">
                    <i className="far fa-moon"></i>
                    <span> Ricardo</span>
                </h3>
                    
                <button className="btn">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>
                    New entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
