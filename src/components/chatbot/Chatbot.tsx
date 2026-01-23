"use client";

import { useState, useRef, useEffect } from 'react';
import { leadQualificationChatbot, type LeadQualificationChatbotInput } from '@/ai/flows/lead-qualification-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, Bot, User, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';


type Message = {
  role: 'user' | 'bot';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "مرحباً! أنا هنا لإرشادك. للبدء، هل يمكنك إخباري بنوع الخدمات التي تهتم بها؟ على سبيل المثال: تطوير الويب، إنتاج الفيديو، أو العلامات التجارية.",
    },
  ]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const scrollableView = scrollAreaRef.current.children[1] as HTMLDivElement;
        if(scrollableView) {
            scrollableView.scrollTop = scrollableView.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await leadQualificationChatbot({ userInput: input, conversationHistory: chatHistory });

      const botMessage: Message = { role: 'bot', content: response.response };
      setMessages((prev) => [...prev, botMessage]);

      if (response.isQualified && response.team) {
        const qualifiedMessage: Message = { role: 'bot', content: `رائع، يبدو أن فريق ${response.team} هو الأنسب لك. لقد دونت ذلك. يرجى التوجه إلى صفحة الاتصال لإرسال رسالة مباشرة إليهم!` };
        setMessages((prev) => [...prev, qualifiedMessage]);
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = { role: 'bot', content: "أنا آسف، لكنني أواجه مشكلة في الاتصال الآن. يرجى المحاولة مرة أخرى لاحقًا." };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        variant: "destructive",
        title: "خطأ في المحادثة",
        description: "تعذر الحصول على رد من المساعد الذكي.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 left-6 h-16 w-16 rounded-full shadow-lg bg-gradient-to-r from-accent to-primary text-primary-foreground border-none hover:opacity-90 transition-opacity"
          aria-label="افتح المحادثة"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0" side="left">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="font-headline">بوت تأهيل العملاء المحتملين</SheetTitle>
          <SheetDescription>دعني أساعدك في العثور على الفريق المناسب لاحتياجاتك.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="p-6 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'bot' && (
                  <Avatar className="w-8 h-8 bg-primary text-primary-foreground">
                    <AvatarFallback><Bot className="w-5 h-5" /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[75%] rounded-lg px-4 py-2 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <Avatar className="w-8 h-8 bg-secondary text-secondary-foreground">
                     <AvatarFallback><User className="w-5 h-5" /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <Avatar className="w-8 h-8 bg-primary text-primary-foreground">
                    <AvatarFallback><Bot className="w-5 h-5" /></AvatarFallback>
                </Avatar>
                <div className="bg-muted text-muted-foreground rounded-lg px-4 py-3 text-sm flex items-center">
                  <Loader className="w-4 h-4 ml-2 animate-spin" />
                  <span>أفكر...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <SheetFooter className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="أخبرني عن مشروعك..."
              disabled={isLoading}
              autoComplete="off"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
