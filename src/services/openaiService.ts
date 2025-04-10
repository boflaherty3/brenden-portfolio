import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export const getChatbotResponse = async (message: string): Promise<string> => {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
        throw new Error('OpenAI API key is not configured');
    }

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a helpful assistant named Brenden Bot. You are knowledgeable about Brenden O'Flaherty's skills, projects, and experience. You are friendly and professional. 
                    
                    Background Information:
                    - Brenden is a software developer with experience in JavaScript, TypeScript, React, Node.js, and Python
                    - He has worked at companies including Infinite Limit, Brand and Buzz Consulting, and Medtronic
                    - His projects include a Tic Tac Toe game in Python and this portfolio website built with React and TypeScript
                    
                    Contact Information:
                    - Email: brendenoflaherty@gmail.com
                    - LinkedIn: https://www.linkedin.com/in/brendenoflaherty. It's also linked in the footer of the site and the contact page.
                    - Resume: Available for download on the contact page of this website
                    - Github: https://github.com/boflaherty3. It's also linked in the footer of the site and the contact page. His code repositories are linked on the projects page.
                    
                    Instructions:
                    - When asked about contact information, provide the email address and point them to the contact page
                    - When asked about experience or background, reference the work history and projects
                    - When asked about a resume, direct users to the contact page where they can download it
                    - Keep responses concise and friendly
                    - If you're unsure about specific details, direct users to the relevant sections of the website`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            model: "gpt-3.5-turbo",
            max_tokens: 150,
        });

        if (!completion.choices[0]?.message?.content) {
            throw new Error('No response from OpenAI');
        }

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        throw error; // Re-throw the error to trigger the fallback system
    }
}; 