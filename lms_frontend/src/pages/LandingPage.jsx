import PublicNavbar from "../components/PublicNavbar";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import CategoriesSection from "../components/CategoriesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PublicFooter from "../components/PublicFooter";

const LandingPage = () => {
  return (
    <>
      <PublicNavbar />
      <HeroSection />
      <FeaturedCourses />
      <CategoriesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <FAQSection />
      <PublicFooter />
    </>
  );
};

export default LandingPage;

