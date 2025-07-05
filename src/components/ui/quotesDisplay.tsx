"use client"
import { Card, CardContent } from "@/components/ui/card"

interface Quote {
    topic: string;
    text: string;
}

interface QuoteListProps {
    quotes: Quote[];
    topic: string;
}

export default function QuoteDisplay({ quotes, topic }: QuoteListProps) {
    if (!topic) {
        return null;
    }

    else if (quotes.length === 0) {
        return (
            <p className="mt-6 text-red-600 font-medium">
                No quotes found for <strong>{topic}</strong>
            </p>
        );
    }

     return (
    <div className="mt-6 grid gap-4">
      {quotes.map((quote, index) => (
        <Card key={index}>
          <CardContent className="p-4 text-gray-800">
            “{quote.text}”
          </CardContent>
        </Card>
      ))}
    </div>
  );
}