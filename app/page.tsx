export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF6EC] to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-cinnamon mb-4">
          CandelaRolls
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Artisan Cinnamon Rolls - Coming Soon
        </p>
        <button className="bg-cinnamon text-white px-6 py-3 rounded-lg hover:bg-opacity-90">
          Order Now
        </button>
      </div>
    </main>
  );
}
