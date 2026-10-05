"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { ShieldCheck, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="large"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Atelier", id: "about" },
              { name: "Collezione", id: "products" },
              { name: "Recensioni", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Prenota", id: "contact" },
            ]}
            brandName="Elegantia Romana"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardRotatedCarousel
            title="L'Arte della Sartoria Italiana"
            description="Il tuo dominio è ora sbloccato. Il codice EPP/Authorization Code è: AUTH-9928-XJ09. Grazie per aver scelto Elegantia Romana per il tuo percorso sartoriale."
            background={{ variant: "plain" }}
            buttons={[
              { text: "Scopri la Nostra Artigianalità", href: "#products" },
              { text: "Prenota la Tua Prova in Atelier", href: "#contact" }
            ]}
            carouselItems={[
              { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-fashion-designer-s-hand-taking-measurement-blue-fabric-with-yellow-measuring-tape_23-2148180373.jpg" },
              { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/close-up-groom-getting-dressed-his-wedding-day-putting-decoration-brooch-lapel-his-jacket_637285-954.jpg" },
              { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/tailor-sewing-blue-suit_329181-13646.jpg?_wi=1" },
              { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/young-fashion-designer-checking-quality-custom-made-elegant-men-s-suit-dark-tailor-studio_613910-20246.jpg?_wi=1" },
              { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/hands-assembling-advent-wreath_23-2150820769.jpg?_wi=1" },
              { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Sartoria"
            title="Tradizione ed Esclusività"
            description="La nostra sartoria nasce nel cuore di Roma per ridare vita ai canoni dell'eleganza classica."
            subdescription="Ogni capo che realizziamo rispetta la tradizione sartoriale italiana, con una vestibilità che accarezza la silhouette."
            icon={ShieldCheck}
            imageSrc="http://img.b2bpic.net/free-photo/hands-assembling-advent-wreath_23-2150820769.jpg?_wi=2"
            useInvertedBackground={false}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardSix
            title="Perché sceglierci"
            description="Dettagli unici per una vestibilità impeccabile."
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: 1, title: "Cucito a mano", description: "Hand-finished details that ensure lifelong durability and superior aesthetics", imageSrc: "http://img.b2bpic.net/free-photo/tailor-sewing-blue-suit_329181-13646.jpg?_wi=2" },
              { id: 2, title: "Tessuti Premium", description: "Selezioniamo solo le fibre più nobili", imageSrc: "http://img.b2bpic.net/free-photo/young-fashion-designer-checking-quality-custom-made-elegant-men-s-suit-dark-tailor-studio_613910-20246.jpg?_wi=2" }
            ]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            title="La nostra collezione"
            description="Scopri l'esclusività dei nostri capi su misura."
            gridVariant="asymmetric-60-wide-40-narrow"
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            buttons={[{ text: "Prenota Appuntamento", href: "#contact" }]}
            products={[
              { id: "1", name: "Abito cerimonia uomo", price: "€1.200", imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-beige-checkered-suit-posing-street-background_158538-2633.jpg" }
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardTen
            title="Numeri di stile"
            description="I nostri numeri parlano di qualità"
            textboxLayout="default"
            useInvertedBackground={false}
            metrics={[
              { id: "1", title: "Anni di storia", subtitle: "Passione italiana", category: "Tradizione", value: "50+" },
              { id: "2", title: "Capi realizzati", subtitle: "Su misura", category: "Produzione", value: "10k+" }
            ]}
            animationType="slide-up"
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwo
            title="La voce dei clienti"
            description="Cosa dicono i nostri gentiluomini"
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Alessandro V.", role: "Imprenditore", testimonial: "Eccellenza pura, ogni capo è un capolavoro.", icon: Star }
            ]}
            animationType="slide-up"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            faqs={[
              { id: "1", title: "Come prenoto una prova?", content: "Puoi prenotare direttamente tramite il nostro form online o chiamandoci."},
              { id: "2", title: "Quali sono i tempi?", content: "Solitamente 4-6 settimane per un abito completo su misura."}
            ]}
            sideTitle="Domande frequenti"
            faqsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Contatti"
            title="Entra nel nostro atelier"
            description="Siamo pronti a dare vita al tuo stile unico. Prenota oggi la tua consulenza."
            buttons={[{ text: "Richiedi Supporto", href: "mailto:support@elegantia.it" }]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Elegantia", items: [{ label: "Chi Siamo", href: "#about" }, { label: "Contatti", href: "#contact" }] }
            ]}
            bottomLeftText="© 2025 Elegantia Romana"
            bottomRightText="I18n Supported"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}