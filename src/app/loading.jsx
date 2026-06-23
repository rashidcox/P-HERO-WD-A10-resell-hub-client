export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
            R
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          ReSell Hub
        </h2>

        <p className="text-gray-500 mt-2">
          Finding the best products for you...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-blue-600 animate-pulse w-2/3"></div>
        </div>
      </div>
    </div>
  );
}