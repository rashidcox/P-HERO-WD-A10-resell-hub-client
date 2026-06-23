import { LuShoppingBag } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
            <LuShoppingBag size={17} className="text-white" />
          </div>
          <span className="text-xl font-bold text-red-600">
            ReSell<span className="text-teal-400">Hub</span>
          </span>
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