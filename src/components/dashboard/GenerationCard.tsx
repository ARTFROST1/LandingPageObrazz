import { cn } from '@/lib/utils';
import Image from 'next/image';

type GenerationCardProps = {
  id: string;
  type: string;
  status: string;
  outputImages: string[];
  createdAt: string;
  tokensCost: number;
};

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'В очереди' },
  processing: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'В процессе' },
  completed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Готово' },
  failed: { bg: 'bg-red-100', text: 'text-red-700', label: 'Ошибка' },
  cancelled: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Отменено' },
};

export function GenerationCard({
  id,
  type,
  status,
  outputImages,
  createdAt,
  tokensCost,
}: GenerationCardProps) {
  const s = statusStyles[status] || statusStyles.pending;
  const previewImage = outputImages?.[0];

  return (
    <div className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
      {/* Image preview */}
      <div className="aspect-[3/4] relative bg-brand-light">
        {previewImage ? (
          <Image
            src={previewImage}
            alt={type}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl">
              {status === 'processing' ? '⏳' : status === 'failed' ? '❌' : '✨'}
            </span>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={cn(
              'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
              s.bg,
              s.text,
            )}
          >
            {s.label}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-dark">{type}</span>
          <span className="text-xs text-brand-muted">{tokensCost} ток.</span>
        </div>
        <p className="text-xs text-brand-text-secondary mt-1">{createdAt}</p>
      </div>
    </div>
  );
}
