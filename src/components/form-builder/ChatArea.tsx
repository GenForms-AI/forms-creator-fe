import { MessageCircle, Send } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const ChatArea = () => {
  return (
    <div className="h-64 bg-secondary p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <MessageCircle className="mr-2 h-5 w-5" /> Chat with AI
        </h2>
        <ScrollArea className="flex-1 mb-4">
          <div className="space-y-4">
            <Card className="w-3/4">
              <CardContent className="p-3">
                <p className="text-sm">How can I add a new field to my form?</p>
              </CardContent>
            </Card>
            <Card className="w-3/4 ml-auto bg-primary text-primary-foreground">
              <CardContent className="p-3">
                <p className="text-sm">
                  To add a new field, simply drag the desired field type from the left sidebar and drop it into the form
                  preview area in the center.
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
        <div className="flex items-center space-x-2">
          <Input placeholder="Type your message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
  )
}

export default ChatArea