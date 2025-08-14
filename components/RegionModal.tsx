"use client";

interface RegionModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

export function RegionModal({ title, description, onClose }: RegionModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="max-w-sm rounded bg-white p-4 shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="mb-4">{description}</p>
        <button
          type="button"
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
