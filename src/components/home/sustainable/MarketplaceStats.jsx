export default function MarketplaceStats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Marketplace Statistics
        </h2>

        <p className="text-blue-100 mt-3">
          Real-time growth of ReSell Hub platform
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <div>
            <h3 className="text-4xl font-bold">25K+</h3>
            <p className="text-blue-100 mt-1">Total Users</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">18K+</h3>
            <p className="text-blue-100 mt-1">Products Listed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">12K+</h3>
            <p className="text-blue-100 mt-1">Successful Deals</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-blue-100 mt-1">User Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}