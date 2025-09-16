function App() {
  return (
    <div className="min-h-screen bg-background-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-text-900">
          Modern Color System Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primary-500 text-primary-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Primary Colors</h2>
            <p className="text-primary-100">
              This uses primary-500 background with primary-50 text
            </p>
          </div>

          <div className="bg-secondary-600 text-secondary-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Secondary Colors</h2>
            <p className="text-secondary-100">
              This uses secondary-600 background with secondary-50 text
            </p>
          </div>

          <div className="bg-accent-500 text-accent-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Accent Colors</h2>
            <p className="text-accent-100">
              This uses accent-500 background with accent-50 text
            </p>
          </div>
        </div>

        <div className="bg-background-100 border border-background-200 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-text-800 mb-4">
            Text Variations
          </h2>
          <p className="text-text-700 mb-2">Regular text in text-700</p>
          <p className="text-text-500 mb-2">Lighter text in text-500</p>
          <p className="text-text-400">Even lighter text in text-400</p>
        </div>

        <button className="bg-primary-600 hover:bg-primary-700 text-primary-50 px-6 py-3 rounded-lg font-medium transition-colors">
          Primary Button
        </button>
      </div>
    </div>
  );
}

export default App;
