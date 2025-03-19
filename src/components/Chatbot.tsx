import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import React, { useState } from 'react';
import '../chatbot.css';

interface Message {
    id: number;
    message: string;
    type: 'bot' | 'user';
}
  
interface Config {
    initialMessages: Message[];
    botName: string;
    customStyles?: {
      botMessageBox?: { backgroundColor: string };
      chatButton?: { backgroundColor: string };
    };
    chatContainerStyle?: { width: string; height: string };
}
  
interface Action {
    handleSkills: () => void;
    handleProjects: () => void;
    handleContact: () => void;
    handleDefault: () => void;
    handleAbout: () => void;
    handleExperience: () => void;
    handleResume: () => void;
}

const config: Config = {
initialMessages: [{id: 1, message: "Hi! how can I help you?", type: "bot"}],
    botName: "Brenden Bot",
    customStyles: {
        botMessageBox: { backgroundColor: "#3b82f6" },
        chatButton: { backgroundColor: "#3b82f6" },
      },
      chatContainerStyle: {
        width: "300px",
        height: "400px",
      },
};

interface MessageParserProps {
    actions: Action;
    children: React.ReactNode;
}

interface ChildProps {
    parse: (message: string) => void;
}

const MessageParser: React.FC<MessageParserProps> = ({children, actions}) => {
    const parse = (message: string) => {
        if (message.toLowerCase().includes("skills")) {
            actions.handleSkills();
        }
        else if (message.toLowerCase().includes("projects")) {
            actions.handleProjects();
        }
        else if (message.toLowerCase().includes("contact")) {
            actions.handleContact();
        }
        else if (message.toLowerCase().includes("about")) {
            actions.handleAbout();
        }
        else if (message.toLowerCase().includes("experience")) {
            actions.handleExperience();
        }
        else if (message.toLowerCase().includes("resume")) {
            actions.handleResume();
        }
        else {
            actions.handleDefault();
        }
    }

    return(
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child as React.ReactElement<ChildProps>, { parse });
                })}
        </div>
    );
};

interface ActionProviderProps {
    createChatBotMessage: (message: string) => Message;
    setState: React.Dispatch<React.SetStateAction<any>>;
    children: React.ReactNode;
}

interface ActionChildProps {
    actions: Action;
}

const ActionProvider:React.FC<ActionProviderProps> = ( {createChatBotMessage, setState, children }) => {
    const handleSkills = () => {
        const botMessage = createChatBotMessage("I specialize in JavaScript, TypeScript, React, Node.js, and Python!");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleProjects = () => {
        const botMessage = createChatBotMessage("I've worked on several projects, including a Tic Tac Toe game in Python and this portfolio page using React and TypeScript. Check out my projects page to learn more!");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleContact = () => {
        const botMessage = createChatBotMessage("Contact me at brendenoflaherty@gmail.com, (845) 772-2795, or https://www.linkedin.com/in/brendenoflaherty/");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleAbout = () => {
        const botMessage = createChatBotMessage("Visit my about page to learn more about me!");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleExperience = () => {
        const botMessage = createChatBotMessage("My most recent experiences are at Infinite Limit, Brand and Buzz Consulting, and Medtronic!");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDefault = () => {
        const botMessage = createChatBotMessage("I’m not sure about that, but feel free to ask about my skills, projects, or how to contact me!");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleResume = () => {
        const botMessage = createChatBotMessage("Visit my about page to download my resume!");
        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child as React.ReactElement<ActionChildProps>, { 
                    actions: { handleSkills, handleProjects, handleContact, handleAbout, handleExperience, handleDefault, handleResume },
            });
            })}
        </div>
    );
};

const ChatbotComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen && (
                <button onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
                aria-label="Open chatbot">
                    Chat with me!
                </button>
            )}
            {isOpen && (
                <div className="relative bg-gray-900 rounded-lg shadow-lg">
                    <button onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-300 z-50">
                        Close
                    </button>
                    <Chatbot 
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}/>
                </div>
            )}
        </div>
    )
}

export default ChatbotComponent;