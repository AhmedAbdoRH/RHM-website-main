'use server';

/**
 * @fileOverview A lead qualification chatbot flow.
 *
 * - leadQualificationChatbot - A function that handles the chatbot interaction and qualifies leads.
 * - LeadQualificationChatbotInput - The input type for the leadQualificationChatbot function.
 * - LeadQualificationChatbotOutput - The return type for the leadQualificationChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LeadQualificationChatbotInputSchema = z.object({
  userInput: z.string().describe('The user input to the chatbot.'),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'bot']),
    content: z.string(),
  })).optional().describe('The conversation history between the user and the bot.'),
});

export type LeadQualificationChatbotInput = z.infer<typeof LeadQualificationChatbotInputSchema>;

const LeadQualificationChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user input.'),
  team: z.string().optional().describe('The team the user should be directed to (e.g., فريق الخدمات التقنية).'),
  isQualified: z.boolean().describe('Whether the lead is qualified or not.'),
});

export type LeadQualificationChatbotOutput = z.infer<typeof LeadQualificationChatbotOutputSchema>;

export async function leadQualificationChatbot(input: LeadQualificationChatbotInput): Promise<LeadQualificationChatbotOutput> {
  return leadQualificationChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'leadQualificationChatbotPrompt',
  input: {
    schema: LeadQualificationChatbotInputSchema,
  },
  output: {
    schema: LeadQualificationChatbotOutputSchema,
  },
  prompt: `أنت روبوت محادثة مصمم لتأهيل العملاء المحتملين من الشركات وتوجيههم إلى فريقنا.
  هدفك هو فهم احتياجات المستخدم وتحديد ما إذا كان يجب توجيههم إلى فريق الخدمات التقنية.
  إذا لم تتمكن من تأهيل المستخدم، فقم بتعيين الفريق إلى null و isQualified إلى false. بمجرد تأهيل المستخدم، قم بتعيين isQualified إلى true وحدد الفريق. يمكنك تأهيل المستخدم في جولة واحدة أو عدة جولات.
  يجب أن تكون جميع الردود باللغة العربية.

  هذا هو سجل المحادثة:
  {{#each conversationHistory}}
    {{#if (eq role \"user\")}}
      المستخدم: {{{content}}}
    {{else}}
      البوت: {{{content}}}
    {{/if}}
  {{/each}}

  المستخدم: {{{userInput}}}

  قم بالرد بصفتك روبوت المحادثة، واطرح أسئلة توضيحية إذا لزم الأمر، وقدم ردًا نهائيًا بناءً على احتياجات المستخدم.
  تذكر أن تقوم بالإخراج بتنسيق JSON.
  `,
});

const leadQualificationChatbotFlow = ai.defineFlow(
  {
    name: 'leadQualificationChatbotFlow',
    inputSchema: LeadQualificationChatbotInputSchema,
    outputSchema: LeadQualificationChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
