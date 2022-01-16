import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awasome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happend today"
                    className="notes__textarea"
                />

                <div className="notes__image">
                    <img 
                        src="https://wi.wallpapertip.com/wsimgs/80-807071_black-and-white-crystals-wallpaper-18783-black-and.png"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    )
}
