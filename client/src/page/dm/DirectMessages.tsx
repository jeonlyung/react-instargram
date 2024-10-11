import React, { useState } from 'react';
import ChatWindow from '../../components/ui/ChatWindow';
import MessageInput from '../../components/ui/MessageInput';
import ChatList from '../../components/ui/ChatList';

const DirectMessages: React.FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [messages, setMessages] = useState<{ [key: number]: { id: number; sender: string; content: string }[] }>({
    1: [{ id: 1, sender: 'me', content: 'Hello!' }, { id: 2, sender: 'friend', content: 'Hey there!' }],
  });

  const handleSelectChat = (id: number) => {
    setSelectedChatId(id);
  };

  const handleSendMessage = (content: string) => {
    if (selectedChatId !== null) {
      setMessages((prev) => ({
        ...prev,
        [selectedChatId]: [
          ...(prev[selectedChatId] || []),
          { id: prev[selectedChatId]?.length + 1 || 1, sender: 'me', content },
        ],
      }));
    }
  };

  return (
    <div className="direct-messages">
      <ChatList
        chats={[
          { id: 1, username: 'friend', lastMessage: 'Hey there!' },
          { id: 2, username: 'colleague', lastMessage: 'See you at 3 PM.' },
        ]}
        onSelectChat={handleSelectChat}
      />
      {selectedChatId !== null && (
        <div className="chat-section">
          <ChatWindow messages={messages[selectedChatId] || []} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
};

export default DirectMessages;
