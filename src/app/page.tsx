"use client";

import { useState } from "react";
import QuoteForm from "@/components/ui/quoteForm";
import QuoteList from "@/components/ui/quotesDisplay";
import { quotes } from "@/data/quotes";

export default function HomePage() {
  const [topic, setTopic] = useState("");

  // Filter quotes based on the entered topic
  const filteredQuotes = quotes
    .filter((quote) => quote.topic.toLowerCase() === topic.toLowerCase())
    .slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Quote Generator</h1>

      {/* Form for topic input */}
      <QuoteForm onSubmit={setTopic} />

      {/* Show matching quotes (if any) */}
      <QuoteList quotes={filteredQuotes} topic={topic} />
    </main>
  );
}
