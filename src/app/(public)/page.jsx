import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import PopularCategories from "@/components/home/PopularCategories";
import MarketplaceStats from "@/components/home/sustainable/MarketplaceStats";
import SuccessStories from "@/components/home/sustainable/SuccessStories";
import SustainabilityImpact from "@/components/home/sustainable/SustainabilityImpact";
import TrustedSellers from "@/components/home/sustainable/TrustedSellers";

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

      {/* popular categories */}
      <div>
        <PopularCategories />
      </div>

      <div>
        {/* new products */}
        {/* popular sellers */}
        {/* trusted sellers */}
        {/* success stories */}
        {/* sustainability impact */}
        {/* marketplace stats */}
        <div className="grid grid-cols-6 md:grid-cols-1 gap-4">
          <div className=""><SustainabilityImpact /></div>
          <div><TrustedSellers /></div>
          <div><SuccessStories /></div>
          <div><MarketplaceStats /></div>
        </div>
      </div>
    </div>

  );
}
