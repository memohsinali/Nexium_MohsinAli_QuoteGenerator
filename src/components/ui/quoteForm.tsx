
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function QuoteForm({ onSubmit }: { onSubmit: (topic: string) => void }) {
    const [topic, setTopic] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(topic);
    };

    return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center">
      <Input
        type="text"
        placeholder="Enter a topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-[250px]"
      />
      <Button type="submit">Generate</Button>
    </form>
  );

}