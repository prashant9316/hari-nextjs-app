export default function ProductGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Electronics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
              alt={`Product ${index + 1}`}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">
              Product {index + 1}
            </h3>
            <p className="text-gray-600">High-quality product.</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-blue-600 font-semibold">₹1439/-</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
