import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 border border-indigo-400/30 animate-bounce">
      <CheckCircle2 className="w-4 h-4 shrink-0" />
      <span className="text-xs sm:text-sm font-bold">{message}</span>
    </div>
  );
}
