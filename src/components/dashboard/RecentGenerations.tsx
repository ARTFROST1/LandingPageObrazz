'use client';

import Link from 'next/link';
import { GenerationCard } from './GenerationCard';

type Generation = {
  id: string;
  generation_type: string;
  status: string;
  output_image_urls: string[] | null;
  created_at: string;
  tokens_cost: number;
};

function formatDateTime(dateStr: string): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

const typeLabels: Record<string, string> = {
  virtual_try_on: 'Virtual Try-On',
  fashion_model: 'Fashion Model',
  variation: 'Вариации',
};

export function RecentGenerations({ generations }: { generations: Generation[] }) {
  if (!generations || generations.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-brand-border p-8 text-center">
        <span className="text-4xl block mb-3">✨</span>
        <h3 className="text-lg font-semibold text-brand-dark mb-1">Нет генераций</h3>
        <p className="text-sm text-brand-text-secondary">
          Создайте первую AI-генерацию в мобильном приложении
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-brand-dark">Последние генерации</h2>
        <Link
          href="/dashboard/generations"
          className="text-sm text-brand-primary hover:underline"
        >
          Все генерации →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {generations.slice(0, 8).map((gen) => (
          <GenerationCard
            key={gen.id}
            id={gen.id}
            type={typeLabels[gen.generation_type] || gen.generation_type}
            status={gen.status}
            outputImages={gen.output_image_urls || []}
            createdAt={formatDateTime(gen.created_at)}
            tokensCost={gen.tokens_cost}
          />
        ))}
      </div>
    </div>
  );
}
