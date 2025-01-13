import React, { useState } from 'react'

const NotifEffect = () => {

    const [messages, setMessages] = useState([]);


    const delay = (index, nextMessage) => {

        setTimeout(function () {
            setMessages(prev => [...prev, nextMessage]);
        }, 300 * index)

    }

    const handleClick = () => {
        const notifications = [
            'You have a new message!',
            'Your profile was updated.',
            'Someone liked your post.',
            'Check out our latest offers!',
        ];

        notifications.forEach((notification , index) => {
            delay(index, notification);
        })
    }
  return (
    <div>
        <button onClick={handleClick}>Show notifications</button>

        <div>
            {messages.map((message, index) => (
                <div key={index} className='message'>{message}</div>
            ))}
        </div>
    </div>
  )
}

export default NotifEffect