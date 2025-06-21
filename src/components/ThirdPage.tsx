const ThirdSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left content (could be an image or decorative element) */}
          <div className="hidden md:block md:w-1/2"></div>
          
          {/* Right content - text section */}
          <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-12 text-blue-600">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              ペットや動物が大好きなあなたへ
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              囲まれた暮らしの中で、私たちは動物たちと共に生きています。
              彼らは家族であり、友達であり、かけがえのない存在です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;