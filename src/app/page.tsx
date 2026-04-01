"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Instagram } from "lucide-react";

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
        {
          name: "Home",          id: "hero"},
        {
          name: "Sartoria",          id: "about"},
        {
          name: "Servizi",          id: "services"},
        {
          name: "Recensioni",          id: "testimonials"},
        {
          name: "Prenota",          id: "contact"},
      ]}
      brandName="Elegantia Romana"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "plain"}}
      title="L'Arte della Sartoria Italiana"
      description="Elegantia Romana: l'eccellenza del su misura, dove ogni dettaglio è un'opera d'arte cucita a mano."
      buttons={[
        {
          text: "Configura Camicia",          href: "#shop"},
        {
          text: "Prenota Appuntamento",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-fashion-designer-s-hand-taking-measurement-blue-fabric-with-yellow-measuring-tape_23-2148180373.jpg",          imageAlt: "Atelier artigianale"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-groom-getting-dressed-his-wedding-day-putting-decoration-brooch-lapel-his-jacket_637285-954.jpg?_wi=1",          imageAlt: "Abito su misura"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tailor-sewing-blue-suit_329181-13646.jpg?_wi=1",          imageAlt: "Camicia seta donna"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-fashion-designer-checking-quality-custom-made-elegant-men-s-suit-dark-tailor-studio_613910-20246.jpg?_wi=1",          imageAlt: "Servizio wedding"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hands-assembling-advent-wreath_23-2150820769.jpg?_wi=1",          imageAlt: "Dettaglio cuciture"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg?_wi=1",          imageAlt: "Cliente soddisfatto"},
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Tradizione ed Esclusività"
      description="Elegantia Romana nasce nel cuore di Roma per ridare vita ai canoni dell'eleganza classica. Ogni capo che realizziamo rispetta la tradizione sartoriale italiana: asole ribattute a mano, tele interamente lavorate, e una vestibilità che accarezza la silhouette."
      bulletPoints={[
        {
          title: "Artigianalità Pura",          description: "Lavorazioni manuali d'eccellenza, senza compromessi industriali."},
        {
          title: "Tessuti Nobili",          description: "Collaborazioni con le migliori manifatture mondiali: Scabal, Zegna, Cariaggi."},
        {
          title: "Esperienza Unica",          description: "Un servizio di consulenza dedicato nel nostro atelier di Via Corsica."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hands-assembling-advent-wreath_23-2150820769.jpg?_wi=2"
      imageAlt="Sartoria artigianale"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Abiti su Misura Uomo",          description: "L'apice dell'eleganza maschile, lavorato con tele sartoriali autentiche.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-groom-getting-dressed-his-wedding-day-putting-decoration-brooch-lapel-his-jacket_637285-954.jpg?_wi=2",          imageAlt: "Abito su misura"},
        {
          id: 2,
          title: "Servizio Wedding Premium",          description: "Consulenza esclusiva per il giorno più importante, con finiture sartoriali uniche.",          imageSrc: "http://img.b2bpic.net/free-photo/young-fashion-designer-checking-quality-custom-made-elegant-men-s-suit-dark-tailor-studio_613910-20246.jpg?_wi=2",          imageAlt: "Servizio matrimonio"},
        {
          id: 3,
          title: "Camiceria Donna & Uomo",          description: "Lino, seta e cotoni premium. Ogni camicia è un pezzo unico.",          imageSrc: "http://img.b2bpic.net/free-photo/tailor-sewing-blue-suit_329181-13646.jpg?_wi=2",          imageAlt: "Camiceria sartoriale"},
      ]}
      title="I Nostri Servizi"
      description="Dall'abito cerimonia uomo alla camiceria sartoriale donna, ogni creazione è su misura per il tuo stile unico."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Eleganza impeccabile",          quote: "La qualità dei tessuti e la maestria nel taglio sono semplicemente fuori dal comune. Un servizio di altissimo livello.",          name: "Alessandro V.",          role: "Imprenditore",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg?_wi=2"},
        {
          id: "2",          title: "Camicia perfetta",          quote: "Ho scelto una camicia in seta ed è diventata il capo preferito del mio guardaroba. Cura del dettaglio ossessiva.",          name: "Giulia R.",          role: "Avvocato",          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-choosing-clothes-shop_1303-19714.jpg"},
        {
          id: "3",          title: "Servizio Premium",          quote: "Per il mio matrimonio volevo qualcosa di unico. Hanno capito esattamente cosa cercavo e il risultato è stato superiore alle aspettative.",          name: "Marco S.",          role: "Manager",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-beige-checkered-suit-posing-street-background_158538-2633.jpg"},
        {
          id: "4",          title: "Un'esperienza sartoriale",          quote: "La differenza tra un capo industriale e uno artigianale di Elegantia Romana si vede e si sente. Esperienza unica.",          name: "Roberto D.",          role: "Architetto",          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-talking-phone-while-sitting-cafe_637285-8834.jpg"},
        {
          id: "5",          title: "Eccellenza Romana",          quote: "Un atelier che rispecchia la vera maestria italiana. Attenzione al cliente di altissimo livello.",          name: "Francesca L.",          role: "Designer",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg?_wi=3"},
      ]}
      title="La Voce dei Clienti"
      description="L'eleganza è un'esperienza che i nostri clienti scelgono di vivere e condividere."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Siamo pronti ad accoglierti nella nostra sartoria. Prenota una consulenza privata o richiedi informazioni su un progetto sartoriale personalizzato."
      buttons={[
        {
          text: "WhatsApp: +39 06 6948 9370",          href: "https://wa.me/390669489370"},
        {
          text: "Prenota la Tua Prova in Atelier",          href: "https://maps.app.goo.gl/placeholder"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
        columns={[
          { title: "Elegantia", items: [{ label: "Chi Siamo", href: "#about" }, { label: "Contatti", href: "#contact" }] },
          { title: "Servizi", items: [{ label: "Abiti", href: "#services" }, { label: "Camiceria", href: "#services" }] }
        ]}
        bottomLeftText="© 2025 Elegantia Romana"
        bottomRightText="I18n Supported"
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}