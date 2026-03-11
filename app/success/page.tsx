'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="text-center">
      <div className="text-6xl mb-4">✅</div>
      <h1 className="text-4xl font-bold text-[#8B4513] mb-4">
        ¡Pedido Confirmado!
      </h1>
      <p className="text-lg text-gray-700 mb-2">
        Gracias por tu compra
      </p>
      <p className="text-sm text-gray-600 mb-8">
        Session: {sessionId || 'N/A'}
      </p>
      <Link
        href="/"
        className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition"
      >
        Volver a Inicio
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <Suspense fallback={<div>Cargando...</div>}>
          <SuccessContent />
        </Suspense>
      </div>
    </div>
  );
}
