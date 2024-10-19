import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useSelector} from 'react-redux';
import ChatWindow from '../../components/ui/ChatWindow';
import MessageInput from '../../components/ui/MessageInput';
import ChatList from '../../components/ui/ChatList';
import { response } from 'express';


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

  //한번만 실행
  useEffect(() => {
    const variable = {};
    
    Axios.post('/api/users/register', variable).then(response => {
      if(response.data.success){
        console.log(response.data.result);
      }else{
        console.log(response.data);
      }
    })
  }, []);  


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
