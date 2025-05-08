import { chatWidgetVariants } from "@/lib/motion";
import { cn, formatAIResponse } from "@/lib/utils";
import { generateGeminiResponse } from "@/services/gemini";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, ChevronDown, MessageSquare, Send, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const INITIAL_BOT_MESSAGE =
  "Hello! I'm your SoftSell Assistant. How can I help you today?";

const SUGGESTED_QUESTIONS = [
  "How do I sell my license?",
  "What types of licenses do you buy?",
  "How long does the process take?",
  "How much can I get for my licenses?",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      content: INITIAL_BOT_MESSAGE,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus the input when chat is opened
      setTimeout(focusInput, 0);
    }
  }, [messages, isOpen]);

  const handleToggleChat = () => {
    if (isOpen) {
      // Just toggle the state, AnimatePresence will handle the exit animation
      setIsOpen(false);
    } else {
      // Opening the chat
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // Get response from Gemini
      const botResponse = await generateGeminiResponse(content);

      // Format the response for better readability
      const formattedResponse = formatAIResponse(botResponse);

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: formattedResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast.error("Failed to get a response. Please try again later.");
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
      setTimeout(focusInput, 0);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessage(question);
    handleSendMessage(question);
    // Focus will be handled in handleSendMessage
  };

  return (
    <div className="fixed z-50 right-6 bottom-6">
      {/* Chat toggle button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={handleToggleChat}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
            isOpen
              ? "bg-accent/90 hover:bg-accent/80 text-white"
              : "bg-accent hover:bg-accent/90 text-white"
          )}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-300",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <X size={22} />
          </span>
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          >
            <MessageSquare size={22} />
          </span>
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              "bg-card w-80 sm:w-96 absolute bottom-16 right-0 shadow-xl rounded-lg border border-border/60 overflow-hidden",
              { "h-[589px]": !isMinimized }
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatWidgetVariants}
          >
            {/* Chat header */}
            <div className="bg-accent p-3 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-white/20">
                  <AvatarFallback className="text-white">
                    <Bot size={16} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-medium text-sm">
                    SoftSell Assistant
                  </div>
                  {isLoading && (
                    <div className="text-xs text-white/80 flex items-center gap-1.5">
                      <span>Typing</span>
                      <span className="flex gap-0.5">
                        <motion.span
                          className="h-1.5 w-1.5 bg-white/80 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            delay: 0,
                          }}
                        />
                        <motion.span
                          className="h-1.5 w-1.5 bg-white/80 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            delay: 0.2,
                          }}
                        />
                        <motion.span
                          className="h-1.5 w-1.5 bg-white/80 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            delay: 0.4,
                          }}
                        />
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 hover:bg-white/10 text-white"
                  onClick={handleMinimize}
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  <motion.span
                    animate={{ rotate: isMinimized ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </Button>
              </div>
            </div>

            {/* Chat body */}
            <motion.div
              animate={{
                height: isMinimized ? 0 : "auto",
                opacity: isMinimized ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Messages container - using ScrollArea to prevent propagation */}
              <ScrollArea
                className={cn("p-4", {
                  "h-72": messages.length === 1,
                  "h-[470px]": messages.length > 1,
                })}
              >
                <motion.div
                  className="flex flex-col gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      className={cn(
                        "flex gap-2 max-w-[90%] group",
                        msg.isUser ? "self-end flex-row-reverse" : "self-start"
                      )}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 10,
                          x: msg.isUser ? 10 : -10,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: {
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      {/* Avatar */}
                      <Avatar
                        className={cn(
                          "h-8 w-8 shrink-0",
                          msg.isUser ? "bg-accent/20" : "bg-secondary"
                        )}
                      >
                        <AvatarFallback>
                          {msg.isUser ? <User size={14} /> : <Bot size={14} />}
                        </AvatarFallback>
                      </Avatar>

                      {/* Message content */}
                      <div className="flex flex-col gap-1">
                        <div
                          className={cn(
                            "p-3 rounded-2xl text-sm",
                            msg.isUser
                              ? "bg-accent text-accent-foreground rounded-tr-none"
                              : "bg-secondary text-secondary-foreground rounded-tl-none"
                          )}
                        >
                          {msg.isUser ? (
                            msg.content
                          ) : (
                            <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5">
                              <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </div>
                          )}
                        </div>

                        {/* Timestamp */}
                        <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity px-2">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      className="flex gap-2 self-start"
                      initial={{ opacity: 0, y: 10, x: -10 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Avatar className="h-8 w-8 bg-secondary">
                        <AvatarFallback>
                          <Bot size={14} />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-secondary p-3 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1">
                          <motion.div
                            className="h-2 w-2 bg-muted-foreground rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                              times: [0, 0.5, 1],
                              delay: 0,
                            }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-muted-foreground rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                              times: [0, 0.5, 1],
                              delay: 0.2,
                            }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-muted-foreground rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                              times: [0, 0.5, 1],
                              delay: 0.4,
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Auto scroll anchor */}
                  <div ref={messagesEndRef} />
                </motion.div>
              </ScrollArea>

              {/* Suggested questions */}
              {messages.length === 1 && (
                <div className="px-4 py-3 border-t border-border bg-muted/30">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Suggested questions:
                  </p>
                  <motion.div
                    className="flex flex-col gap-1.5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <motion.div
                        key={q}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start text-xs h-auto py-1.5 px-3 rounded-full bg-background hover:bg-accent hover:text-accent-foreground transition-colors w-full"
                          onClick={() => handleSuggestedQuestion(q)}
                        >
                          {q}
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Input area */}
              <motion.div
                className="p-3 border-t border-border bg-background"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(message);
                  }}
                  className="flex gap-2 items-center"
                >
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-sm rounded-full bg-muted/50 focus-visible:ring-accent/50 border-muted shadow-sm"
                    disabled={isLoading}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      size="icon"
                      className="rounded-full h-9 w-9 bg-accent hover:bg-accent/90 text-white flex items-center justify-center shadow-sm"
                      disabled={!message.trim() || isLoading}
                    >
                      <Send size={16} className="text-white" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
