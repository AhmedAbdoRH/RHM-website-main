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
    <a
      href="https://wa.me/201008116452"
      className="fixed bottom-6 left-6 h-16 w-16 rounded-full shadow-lg bg-gradient-to-r from-accent to-primary text-primary-foreground border-none hover:opacity-90 transition-opacity z-[9999] flex items-center justify-center"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
