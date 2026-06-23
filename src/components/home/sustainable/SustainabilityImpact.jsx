export default function SustainabilityImpact() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Sustainability Impact
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Every purchase on ReSell Hub helps reduce waste and supports a greener future.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-green-600">12K+</h3>
            <p className="text-gray-600 mt-2">Items Reused</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-green-600">8.5 Tons</h3>
            <p className="text-gray-600 mt-2">Waste Reduced</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-green-600">5K+</h3>
            <p className="text-gray-600 mt-2">CO₂ Saved</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-green-600">100%</h3>
            <p className="text-gray-600 mt-2">Eco Friendly Goal</p>
          </div>

        </div>
      </div>
    </section>
  );
}