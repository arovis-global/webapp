import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutArovis from '@/components/AboutArovis';
import FeatureSections from '@/components/FeatureSections';
import WhyChoose from '@/components/WhyChoose';
import Footer from '@/components/Footer';

const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutArovis />
      <FeatureSections />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  );
}
