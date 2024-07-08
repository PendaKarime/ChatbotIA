'use client'

import { useEffect, useState } from 'react'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Bot, X, Send, Trash2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from './ui/input'

export function AlertDialogDemo() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  const [conversa, setConversa] = useState(messages)

  const limparConversa = () => {
    messages.length = 0
    setConversa([])
  }

  useEffect(() => {
    setConversa(messages)
  }, [messages])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent border-none hover:bg-transparent hover:border-white hover:text-white text-sm"
        >
          <Bot className="h-4 w-4" />
          <span className="text-sm px-1">Assistente</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex items-center flex-row mb-2 justify-between">
          <div className="flex flex-row">
            <Avatar>
              <AvatarFallback>DB</AvatarFallback>
              <AvatarImage src="https://media.licdn.com/dms/image/C5612AQH_gB37UNbNVA/article-cover_image-shrink_600_2000/0/1570499408105?e=2147483647&v=beta&t=pjnUTZZ5MLdAKvh_VqTDVei3Uem7UFK0CWTuNPrcjPc" />
            </Avatar>
            <CardTitle className="mx-3 text-slate-800">DripBot</CardTitle>

            <CardDescription>está disponivel durante 24h</CardDescription>
          </div>

          <AlertDialogFooter className="">
            <AlertDialogAction className="bg-white text-red-400 hover:bg-rose-500 hover:text-white right-0">
              <X className="h-4 w-4" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>

        <Card className="">
          <CardHeader></CardHeader>

          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md pr-6">
              {conversa.map((message) => {
                return (
                  <div
                    key={message.id}
                    className="flex gap-3 text-slate-600 text-sm mb-8"
                  >
                    {message.role === 'user' && (
                      <Avatar>
                        <AvatarFallback>AF</AvatarFallback>
                        <AvatarImage src="https://www.clipartmax.com/png/middle/255-2557878_businessman-icon-avatar-illustration-euclidean-vector.png" />
                      </Avatar>
                    )}
                    {message.role === 'assistant' && (
                      <Avatar>
                        <AvatarFallback>RS</AvatarFallback>
                        <AvatarImage src="https://media.licdn.com/dms/image/C5612AQH_gB37UNbNVA/article-cover_image-shrink_600_2000/0/1570499408105?e=2147483647&v=beta&t=pjnUTZZ5MLdAKvh_VqTDVei3Uem7UFK0CWTuNPrcjPc" />
                      </Avatar>
                    )}
                    <p className="leading-relaxed">
                      <span className="block font-bold text-slate-600 text-sm">
                        {message.role === 'user' ? 'Cliente' : 'DripBot'}
                      </span>
                      {message.content}
                    </p>
                  </div>
                )
              })}
            </ScrollArea>
          </CardContent>

          <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
              <Input
                placeholder="Como podemos ajudar?"
                value={input}
                onChange={handleInputChange}
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                onClick={limparConversa}
                className="bg-rose-500"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </AlertDialogContent>
    </AlertDialog>
  )
}
