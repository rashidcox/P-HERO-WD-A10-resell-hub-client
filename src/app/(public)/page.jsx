import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <div className="max-w-7xl px-4 mx-auto sm:px-6">
        <HeroSection />
      </div>
      {/* featured products */}
      <div>
        <FeaturedProducts />
      </div>
    </div>
  );
}
