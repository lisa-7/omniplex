'use client';

export default function SuccessPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center font-sans">
            <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
            <p className="text-gray-700 mb-6">Thank you for purchasing the Pro Plan.</p>
            <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
    );
}
