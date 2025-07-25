'use client';

export default function CancelPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center font-sans">
            <h1 className="text-3xl font-bold text-red-700 mb-4">❌ Payment Cancelled</h1>
            <p className="text-gray-700 mb-6">Your payment was not completed.</p>
            <a href="/" className="text-blue-600 hover:underline">← Try again</a>
        </div>
    );
}
