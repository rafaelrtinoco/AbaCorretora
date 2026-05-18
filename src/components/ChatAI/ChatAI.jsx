import React, { useState, useRef, useEffect } from "react";
import Ana from "../../assets/icons/ana.png"; 
import styled from "styled-components";

const ChatContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 9999;
  font-family: sans-serif;
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary || "#0046b5"};
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
`;

const AnaImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
`;

const IABadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.colors.secondary || "#333"};
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 10px;
  z-index: 10;
`;

// Estilo para o avatar dentro das mensagens
const MessageAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  margin-right: 8px;
  border: 1px solid #ccc;
`;

// Container para alinhar Avatar + Balão
const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: ${props => (props.isUser ? "flex-end" : "flex-start")};
  max-width: 85%;
`;

const Message = styled.div`
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.4;
  background: ${props => (props.isUser ? '#001f3D' : "#e0e0e0")};
  color: ${props => (props.isUser ? "white" : "black")};
`;

const ChatWindow = styled.div`
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  display: ${props => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  bottom: 75px;
  right: 0;
`;

const ChatHeader = styled.div`
  background: ${props => props.theme.colors.primary || "#0046b5"};
  color: white;
  padding: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const MessageList = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f7f7f7;
`;

const InputArea = styled.form`
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 5px;
  outline: none;
`;

const SendButton = styled.button`
  background: #001f3D;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { 
      text: "Olá! Sou a Ana, sua assistente virtual da Aba Seguros. Como posso te ajudar?", 
      isUser: false 
    }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5678/webhook/chat-aba-seguros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.output || "Desculpe, tive um problema.", isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Desculpe, não consigo responder agora. Tente novamente daqui a pouco.", isUser: false }]);
    }
  };

  return (
    <ChatContainer>
      <ChatWindow isOpen={isOpen}>
        <ChatHeader>
          Aba Seguros AI
          <span style={{cursor: 'pointer'}} onClick={() => setIsOpen(false)}>×</span>
        </ChatHeader>
        <MessageList ref={scrollRef}>
          {messages.map((msg, i) => (
            <MessageWrapper key={i} isUser={msg.isUser}>
              {/* Se a mensagem não for do usuário, mostra o avatar da Ana */}
              {!msg.isUser && <MessageAvatar src={Ana} alt="Ana" />}
              <Message isUser={msg.isUser}>{msg.text}</Message>
            </MessageWrapper>
          ))}
        </MessageList>
        <InputArea onSubmit={handleSend}>
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Digite sua dúvida..." 
          />
          <SendButton type="submit">Enviar</SendButton>
        </InputArea>
      </ChatWindow>
      
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <IABadge>ANA</IABadge>}
        {isOpen ? "↓" : <AnaImage src={Ana} alt="Chat" />}
      </ChatButton>
    </ChatContainer>
  );
};

export default ChatAI;