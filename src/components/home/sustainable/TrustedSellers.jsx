const sellers = [
  { name: "Rahim Electronics", rating: "4.9", sales: "1.2K" },
  { name: "Chattogram Store", rating: "4.8", sales: "980" },
  { name: "Dhaka Deals", rating: "4.7", sales: "2.1K" },
  { name: "Tech World BD", rating: "5.0", sales: "3.4K" },
];

export default function TrustedSellers() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl sm:px-6 mx-auto px-4">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Trusted Sellers
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Verified sellers with high ratings and successful transactions
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {sellers.map((seller, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                {seller.name[0]}
              </div>

              <h3 className="mt-4 font-semibold">{seller.name}</h3>

              <p className="text-yellow-500 mt-1">
                ⭐ {seller.rating}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {seller.sales} Sales
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}