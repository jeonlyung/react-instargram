import React from 'react';

interface ChatListItemProps {
  id: number;
  username: string;
  lastMessage: string;
  onClick: (id: number) => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ id, username, lastMessage, onClick }) => (
  <div className="chat-list-item" onClick={() => onClick(id)}>
    <h4>{username}</h4>
    <p>{lastMessage}</p>
  </div>
);

interface ChatListProps {
  chats: { id: number; username: string; lastMessage: string }[];
  onSelectChat: (id: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onSelectChat }) => (
  <div className="chat-list">
    {chats.map((chat) => (
      <ChatListItem key={chat.id} {...chat} onClick={onSelectChat} />
    ))}
  </div>
);

export default ChatList;
