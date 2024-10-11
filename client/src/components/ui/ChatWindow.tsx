import React from 'react';

interface Message {
  id: number;
  sender: string;
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => (
  <div className="chat-window">
    {messages.map((message) => (
      <div key={message.id} className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}>
        <p>{message.content}</p>
      </div>
    ))}
  </div>
);

export default ChatWindow;
