import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { treinamento, modelo } from './treinamento'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const initialMessages = [{ role: 'assistant', content: treinamento }]

  // const initialMessages = messages.slice(0, -1)
  const currentMessage = messages[messages.length - 1]

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      ...initialMessages,
      {
        ...currentMessage,
        content: [
          {
            type: 'text',
            text: `O dripBot é um assistente virtual da loja virtua casa do Drip, ${modelo}...Quero que todas as questões que eu levantar, respondas como um assistente da casa do drip  as respostas não podem fugir do contexto de um assistente virtaul da loja online casa do drip,antes de responder verifica o idioma na qual a pergunta foi e da a resposta de acordo este idioma, exemplo se a pergunta for feita em Ingles responde em Ingles...Responde a seguinte questão : ${currentMessage.content}`,
          },
        ],
      },
    ],
  })

  initialMessages[messages.length - 1] = {
    role: 'assistant',
    content: treinamento,
  }

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
