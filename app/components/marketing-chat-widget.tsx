"use client"

import * as React from "react"
import { MessageCircle, X, Send, Bot, User, UserCircle, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./molecules/avatar"
import { Button } from "./atoms/button"
import { cn } from "~/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "agent" | "ai"
  timestamp: Date
  agentName?: string
  agentImage?: string
  isSystemMessage?: boolean
  isSchedulingPrompt?: boolean
}

type ChatMode = "ai" | "human"

type ChatWidgetProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  companyName?: string
  companyLogo?: string
  primaryColor?: string
  welcomeMessage?: string
  placeholder?: string
  onSendMessage?: (message: string, mode: ChatMode) => Promise<void>
  onModeChange?: (mode: ChatMode) => void
}

const AI_RESPONSES = [
  "I understand you're looking for information. Let me help you with that!",
  "That's a great question! Based on what you're asking, I can provide some insights.",
  "I'm here to help! Let me share what I know about this.",
  "Thanks for sharing that. Here's what I can tell you...",
  "I appreciate your question. Let me provide you with some details.",
]

const shouldShowScheduling = (userMessage: string): boolean => {
  const message = userMessage.toLowerCase()
  return (
    message.includes("schedule") ||
    message.includes("call") ||
    message.includes("meeting") ||
    message.includes("appointment") ||
    message.includes("book") ||
    message.includes("demo")
  )
}

const getAIResponse = (userMessage: string): { content: string; showScheduling?: boolean } => {
  const message = userMessage.toLowerCase()

  if (
    message.includes("schedule") ||
    message.includes("call") ||
    message.includes("meeting") ||
    message.includes("appointment") ||
    message.includes("book")
  ) {
    return {
      content: "I'd be happy to help you schedule a call with our team! Please select a date and time that works best for you.",
      showScheduling: true,
    }
  }

  if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
    return {
      content: "Our pricing varies based on your needs. I can give you general information, but would you like to speak with our sales team for a detailed quote?",
    }
  }

  if (message.includes("demo") || message.includes("trial")) {
    return {
      content: "We offer personalized demos! Would you like to schedule a call with our sales team?",
      showScheduling: true,
    }
  }

  if (message.includes("feature") || message.includes("what does") || message.includes("how does")) {
    return {
      content: "Great question! Our platform offers comprehensive analytics, campaign management, and communication tools. For a detailed walkthrough, our sales team would be happy to help. Would you like to chat with them?",
    }
  }

  if (message.includes("help") || message.includes("support")) {
    return {
      content: "I'm here to help! I can answer general questions, or if you need specific assistance, I can connect you with our team.",
    }
  }

  return {
    content: AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)],
  }
}

export function MarketingChatWidget({
  open: controlledOpen,
  onOpenChange,
  companyName = "Support Team",
  companyLogo,
  primaryColor = "violet",
  welcomeMessage = "Hi! I'm an AI assistant. How can I help you today?",
  placeholder = "Type your message...",
  onSendMessage,
  onModeChange,
}: ChatWidgetProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [mode, setMode] = React.useState<ChatMode>("ai")
  const [userMessageCount, setUserMessageCount] = React.useState(0)
  const [showHandoffButton, setShowHandoffButton] = React.useState(false)
  const [showScheduling, setShowScheduling] = React.useState(false)
  const [schedulingData, setSchedulingData] = React.useState({
    name: "",
    email: "",
    date: "",
    time: "",
  })
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: welcomeMessage,
      sender: "ai",
      timestamp: new Date(),
      agentName: "AI Assistant",
    },
  ])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const widgetRef = React.useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const setOpen = isControlled ? (onOpenChange ?? (() => {})) : setInternalOpen

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  React.useEffect(() => {
    if (userMessageCount >= 2 && mode === "ai") {
      setShowHandoffButton(true)
    }
  }, [userMessageCount, mode])

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    setOpen(newOpen)
    if (typeof window !== "undefined" && window.parent !== window) {
      window.parent.postMessage(
        {
          type: newOpen ? "salientic-chat-open" : "salientic-chat-close",
        },
        "*"
      )
    }
  }, [setOpen])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        handleOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, handleOpenChange])

  const handleHandoffToHuman = () => {
    setMode("human")
    setShowHandoffButton(false)

    onModeChange?.("human")

    const systemMessage: Message = {
      id: Date.now().toString(),
      content: "Connecting you to a sales representative...",
      sender: "ai",
      timestamp: new Date(),
      isSystemMessage: true,
    }

    setMessages((prev) => [...prev, systemMessage])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Hi! I'm Sarah from the sales team. I see you were chatting with our AI assistant. How can I help you today?",
        sender: "agent",
        timestamp: new Date(),
        agentName: "Sarah Johnson",
        agentImage: undefined,
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 2000)
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setUserMessageCount((prev) => prev + 1)

    // Send message to parent window
    if (typeof window !== "undefined" && window.parent !== window) {
      window.parent.postMessage(
        {
          type: "salientic-chat-message",
          payload: {
            message: userMessage.content,
            timestamp: userMessage.timestamp.toISOString(),
            mode,
          },
        },
        "*"
      )
    }

    // Call custom handler if provided
    if (onSendMessage) {
      try {
        await onSendMessage(userMessage.content, mode)
      } catch (error) {
        console.error("Error sending message:", error)
      }
    }

    // Simulate response
    const delay = mode === "ai" ? 1000 + Math.random() * 1000 : 2000

    setTimeout(() => {
      setIsTyping(false)

      let responseContent = ""
      let responseSender: "ai" | "agent" = "ai"
      let agentName = "AI Assistant"

      if (mode === "ai") {
        const aiResponse = getAIResponse(userMessage.content)
        responseContent = aiResponse.content
        responseSender = "ai"

        if (aiResponse.showScheduling) {
          setShowScheduling(true)
        }
      } else {
        const humanResponses = [
          "That's a great question! Let me provide you with more details.",
          "I'd be happy to help with that. Here's what I can share...",
          "Thanks for asking! Based on your needs, I'd recommend...",
        ]
        responseContent = humanResponses[Math.floor(Math.random() * humanResponses.length)]
        responseSender = "agent"
        agentName = "Sarah Johnson"
      }

      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        sender: responseSender,
        timestamp: new Date(),
        agentName,
      }
      setMessages((prev) => [...prev, responseMessage])
    }, delay)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleScheduleSubmit = () => {
    if (!schedulingData.name || !schedulingData.email || !schedulingData.date || !schedulingData.time) {
      return
    }

    const confirmationMessage: Message = {
      id: Date.now().toString(),
      content: `Perfect! I've scheduled a call for ${schedulingData.name} on ${new Date(schedulingData.date).toLocaleDateString()} at ${schedulingData.time}. We'll send a confirmation to ${schedulingData.email}. Looking forward to speaking with you!`,
      sender: "ai",
      timestamp: new Date(),
      agentName: "AI Assistant",
    }

    setMessages((prev) => [...prev, confirmationMessage])
    setShowScheduling(false)
    setSchedulingData({ name: "", email: "", date: "", time: "" })
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => handleOpenChange(true)}
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "size-14 rounded-full bg-violet-600 text-white",
            "flex items-center justify-center shadow-lg",
            "hover:bg-violet-700 transition-all hover:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          )}
          aria-label="Open chat"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {open && (
        <div
          ref={widgetRef}
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl",
            "border border-gray-200 overflow-hidden flex flex-col",
            "animate-in slide-in-from-bottom-4 fade-in duration-200"
          )}
        >
          {/* Header */}
          <div className={cn(
            "relative p-4 text-white",
            mode === "ai" ? "bg-violet-600" : "bg-blue-600"
          )}>
            <button
              onClick={() => handleOpenChange(false)}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 right-3 p-1 rounded-full",
                mode === "ai" ? "hover:bg-violet-700" : "hover:bg-blue-700",
                "transition-colors"
              )}
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-center gap-3">
              <Avatar className="size-10 border-2 border-white">
                {mode === "ai" ? (
                  <AvatarFallback className="bg-violet-100 text-violet-600">
                    <Bot className="size-5" />
                  </AvatarFallback>
                ) : (
                  <>
                    <AvatarImage src={companyLogo} alt={companyName} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      <UserCircle className="size-5" />
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">
                  {mode === "ai" ? "AI Assistant" : "Sarah Johnson"}
                </h3>
                <p className="text-xs opacity-90">
                  {mode === "ai" ? "Instant responses" : "Sales Team • Online"}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                {message.isSystemMessage ? (
                  <div className="flex justify-center">
                    <div className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200">
                      {message.content}
                    </div>
                  </div>
                ) : (
                  <div
                    className={cn(
                      "flex gap-2",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.sender !== "user" && (
                      <Avatar className="size-8 flex-shrink-0">
                        <AvatarImage src={message.agentImage} alt={message.agentName} />
                        <AvatarFallback className={cn(
                          "text-xs",
                          message.sender === "ai"
                            ? "bg-violet-100 text-violet-600"
                            : "bg-blue-100 text-blue-600"
                        )}>
                          {message.sender === "ai" ? (
                            <Bot className="size-4" />
                          ) : (
                            message.agentName?.charAt(0)
                          )}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={cn(
                        "max-w-[70%] rounded-2xl px-4 py-2",
                        message.sender === "user"
                          ? "bg-violet-600 text-white"
                          : "bg-white text-gray-900 border border-gray-200"
                      )}
                    >
                      {message.sender !== "user" && message.agentName && (
                        <p className={cn(
                          "text-xs font-medium mb-1",
                          message.sender === "ai" ? "text-violet-600" : "text-blue-600"
                        )}>
                          {message.agentName}
                        </p>
                      )}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>

                    {message.sender === "user" && (
                      <Avatar className="size-8 flex-shrink-0">
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                          <User className="size-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                )}
              </div>
            ))}

            {showHandoffButton && (
              <div className="flex justify-center">
                <Button
                  onClick={handleHandoffToHuman}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full shadow-md"
                >
                  <UserCircle className="size-4 mr-2" />
                  Talk to a Sales Person
                </Button>
              </div>
            )}

            {showScheduling && (
              <div className="bg-white border-2 border-violet-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-violet-100 p-2 rounded-lg">
                    <Calendar className="size-4 text-violet-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Schedule a Call</h4>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={schedulingData.name}
                    onChange={(e) =>
                      setSchedulingData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={schedulingData.email}
                    onChange={(e) =>
                      setSchedulingData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <input
                    type="date"
                    value={schedulingData.date}
                    onChange={(e) =>
                      setSchedulingData((prev) => ({ ...prev, date: e.target.value }))
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <select
                    value={schedulingData.time}
                    onChange={(e) =>
                      setSchedulingData((prev) => ({ ...prev, time: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">1:00 PM</option>
                    <option value="02:00 PM">2:00 PM</option>
                    <option value="03:00 PM">3:00 PM</option>
                    <option value="04:00 PM">4:00 PM</option>
                    <option value="05:00 PM">5:00 PM</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowScheduling(false)}
                    variant="outline"
                    className="flex-1 text-sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleScheduleSubmit}
                    disabled={
                      !schedulingData.name ||
                      !schedulingData.email ||
                      !schedulingData.date ||
                      !schedulingData.time
                    }
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white text-sm"
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex gap-2 items-center">
                <Avatar className="size-8 flex-shrink-0">
                  <AvatarFallback className={cn(
                    "text-xs",
                    mode === "ai"
                      ? "bg-violet-100 text-violet-600"
                      : "bg-blue-100 text-blue-600"
                  )}>
                    {mode === "ai" ? (
                      <Bot className="size-4" />
                    ) : (
                      "S"
                    )}
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
                  <div className="flex gap-1">
                    <div className="size-2 bg-gray-400 rounded-full animate-bounce" />
                    <div
                      className="size-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="size-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className={cn(
                  "flex-1 px-4 py-2 rounded-full border border-gray-300",
                  "focus:outline-none focus:ring-2",
                  mode === "ai" ? "focus:ring-violet-500" : "focus:ring-blue-500",
                  "text-sm"
                )}
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={cn(
                  "rounded-full size-10 p-0 flex items-center justify-center",
                  mode === "ai"
                    ? "bg-violet-600 hover:bg-violet-700"
                    : "bg-blue-600 hover:bg-blue-700",
                  "text-white disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                aria-label="Send message"
              >
                <Send className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
