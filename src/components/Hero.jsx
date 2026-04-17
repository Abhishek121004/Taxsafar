const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="bg-blue-100 text-accent px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
          Trusted by 10k+ Businesses
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight leading-tight">
          Simplifying Taxes, <br />
          <span className="text-accent">Amplifying Growth.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Expert-led GST filing, ITR resolution, and business compliance—all in one place. 
          Focus on your business, we handle the paperwork.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition">
            Start Filing Now
          </button>
          <button className="border border-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;