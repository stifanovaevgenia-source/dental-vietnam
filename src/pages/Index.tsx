import heroImage from "@/assets/hero-coordinator.jpg";
import ulianaPhoto from "@/assets/uliana.jpg";
import evgeniaPhoto from "@/assets/evgenia.jpg";
import veneersImg from "@/assets/veneers.jpg";
import crownsImg from "@/assets/crowns.jpg";
import implantImg from "@/assets/implant.jpg";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car, Hotel, Languages, Ship, Star, Phone, Plane, UserCheck,
  MessageCircle, Send, ChevronLeft, ChevronRight, Settings, Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// All Telegram CTAs go to the bot — language switcher does NOT open Telegram.
const TELEGRAM_BOT = "https://t.me/dental_vietnam_bot?start=consult";
const TELEGRAM_CONTACT = "https://t.me/dental_vietnam_bot";
const WHATSAPP_LINK = "https://wa.me/79041274825";

type LangCode = "ru" | "en" | "fr" | "de";

const LANGUAGES: { code: LangCode; label: string; short: string }[] = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
];

type Dict = {
  settings: string;
  language: string;
  nav: { home: string; services: string; logistics: string; team: string; testimonials: string };
  hero: {
    title1: string; title2: string; subtitle: string;
    discount: string; cta: string;
  };
  services: {
    heading: string; subheading: string; discountBadge: string;
    veneers: { title: string; desc: string; oldPrice: string; price: string; per: string };
    crowns: { title: string; desc: string; priceNote: string; cta: string };
    implants: { title: string; desc: string; oldPrice: string; price: string; per: string };
    cta: string;
  };
  logistics: {
    heading: string; subheading: string;
    meet: { title: string; text: string };
    guide: { title: string; text: string };
    farewell: { title: string; text: string };
  };
  concierge: {
    heading: string;
    stay: { title: string; text: string };
    clinic: { title: string; text: string };
    leisure: { title: string; text: string };
  };
  team: {
    heading: string;
    uliana: { name: string; role: string; desc: string };
    evgenia: { name: string; role: string; desc: string };
  };
  testimonials: {
    heading: string; swipeHint: string; leaveReview: string;
  };
  footer: {
    telegram: string; whatsapp: string;
  };
};

const DICTIONARIES: Record<LangCode, Dict> = {
  ru: {
    settings: "Настройки",
    language: "Язык",
    nav: { home: "Главная", services: "Услуги", logistics: "Сопровождение", team: "Команда", testimonials: "Отзывы" },
    hero: {
      title1: "Новая улыбка в Халонге:",
      title2: "в 3 раза доступнее, чем в России",
      subtitle: "Профессиональный трансфер из аэропорта и полное русскоязычное сопровождение от наших координаторов.",
      discount: "СКИДКА 40% ДЛЯ ВСЕХ ОТ 35 ЛЕТ",
      cta: "ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ",
    },
    services: {
      heading: "Услуги и Цены",
      subheading: "Стоматология мирового уровня по доступным ценам",
      discountBadge: "СКИДКА 40% ДЛЯ ВСЕХ ПАЦИЕНТОВ ОТ 35 ЛЕТ",
      veneers: { title: "Виниры (эстетика зоны улыбки)", desc: "Тончайшие керамические виниры для безупречного естественного результата.", oldPrice: "от 167 000 000 VND", price: "от 100 000 000 VND", per: "(за зону улыбки)" },
      crowns: { title: "Коронки (восстановление зуба)", desc: "Высокопрочные циркониевые и цельнокерамические коронки.", priceNote: "Цена рассчитывается после бесплатной консультации", cta: "Записаться на консультацию" },
      implants: { title: "Имплантация (восстановление утраченных зубов)", desc: "Имплантаты премиум-класса от ведущих мировых производителей.", oldPrice: "от 20 000 000 VND", price: "от 12 000 000 VND", per: "(за один имплантат)" },
      cta: "ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ",
    },
    logistics: {
      heading: "Ваш путь к улыбке организован до мелочей",
      subheading: "Забота на каждом этапе",
      meet: { title: "Встреча", text: "В аэропорту вас ждет профессиональный водитель с именной табличкой. Комфортный трансфер доставит вас прямо к отелю." },
      guide: { title: "Ваш проводник", text: "В Халонге вас встречает координатор Ульяна. Она поможет с заселением, подключит местную связь, станет переводчиком в клинике и поможет с подбором экскурсий." },
      farewell: { title: "Проводы", text: "В день вылета водитель вовремя отвезет вас обратно в аэропорт." },
    },
    concierge: {
      heading: "Полное сопровождение вашего тура",
      stay: { title: "Размещение", text: "Подбор и помощь с бронированием отеля или апартаментов под ваш бюджет." },
      clinic: { title: "В клинике", text: "Персональное ведение в клинике, услуги профессионального переводчика." },
      leisure: { title: "Досуг", text: "Помощь с организацией экскурсий по бухте Халонг и окрестностям." },
    },
    team: {
      heading: "Наши координаторы",
      uliana: { name: "Ульяна", role: "Ведущий координатор и переводчик", desc: "Управляющая вашим пребыванием, логистикой и переводом в клинике." },
      evgenia: { name: "Евгения", role: "Координатор", desc: "Поддержка и комфорт на каждом этапе вашего лечения." },
    },
    testimonials: { heading: "Отзывы наших пациентов", swipeHint: "Свайпайте для просмотра", leaveReview: "ОСТАВИТЬ ОТЗЫВ" },
    footer: { telegram: "СВЯЗАТЬСЯ В TELEGRAM", whatsapp: "СВЯЗАТЬСЯ В WHATSAPP" },
  },
  en: {
    settings: "Settings",
    language: "Language",
    nav: { home: "Home", services: "Services", logistics: "Concierge", team: "Team", testimonials: "Reviews" },
    hero: {
      title1: "A new smile in Ha Long:",
      title2: "3× more affordable than in Europe",
      subtitle: "Professional airport transfer and full English-speaking support from our coordinators.",
      discount: "40% OFF FOR EVERYONE AGED 35+",
      cta: "BOOK A CONSULTATION",
    },
    services: {
      heading: "Services & Pricing",
      subheading: "World-class dentistry at affordable prices",
      discountBadge: "40% DISCOUNT FOR ALL PATIENTS AGED 35+",
      veneers: { title: "Veneers (smile zone aesthetics)", desc: "Ultra-thin ceramic veneers for a flawless, natural result.", oldPrice: "from 167,000,000 VND", price: "from 100,000,000 VND", per: "(for the smile zone)" },
      crowns: { title: "Crowns (tooth restoration)", desc: "High-strength zirconia and full-ceramic crowns.", priceNote: "Final price quoted after a free consultation", cta: "Book a consultation" },
      implants: { title: "Implants (replacement of missing teeth)", desc: "Premium implants from leading global manufacturers.", oldPrice: "from 20,000,000 VND", price: "from 12,000,000 VND", per: "(per single implant)" },
      cta: "BOOK A CONSULTATION",
    },
    logistics: {
      heading: "Your journey to a new smile, organized end-to-end",
      subheading: "Care at every step",
      meet: { title: "Arrival", text: "A professional driver with a name sign meets you at the airport and transfers you directly to your hotel." },
      guide: { title: "Your guide", text: "In Ha Long, coordinator Ulyana welcomes you. She helps with check-in, local SIM, clinic translation and excursion planning." },
      farewell: { title: "Departure", text: "On your flight day the driver brings you back to the airport on time." },
    },
    concierge: {
      heading: "Full support throughout your trip",
      stay: { title: "Accommodation", text: "Help selecting and booking a hotel or apartment that fits your budget." },
      clinic: { title: "At the clinic", text: "Personal assistance and professional interpreter services in the clinic." },
      leisure: { title: "Leisure", text: "Help organizing tours around Ha Long Bay and the surrounding area." },
    },
    team: {
      heading: "Our coordinators",
      uliana: { name: "Ulyana", role: "Lead coordinator & interpreter", desc: "Manages your stay, logistics and clinic translation." },
      evgenia: { name: "Evgenia", role: "Coordinator", desc: "Comfort and support at every stage of your treatment." },
    },
    testimonials: { heading: "What our patients say", swipeHint: "Swipe to browse", leaveReview: "LEAVE A REVIEW" },
    footer: { telegram: "CONTACT VIA TELEGRAM", whatsapp: "CONTACT VIA WHATSAPP" },
  },
  fr: {
    settings: "Paramètres",
    language: "Langue",
    nav: { home: "Accueil", services: "Services", logistics: "Accompagnement", team: "Équipe", testimonials: "Avis" },
    hero: {
      title1: "Un nouveau sourire à Ha Long :",
      title2: "3 fois plus abordable qu'en Europe",
      subtitle: "Transfert professionnel depuis l'aéroport et accompagnement francophone complet par nos coordinatrices.",
      discount: "40 % DE RÉDUCTION POUR TOUS DÈS 35 ANS",
      cta: "PRENDRE RENDEZ-VOUS",
    },
    services: {
      heading: "Services et tarifs",
      subheading: "Une dentisterie de classe mondiale à prix abordable",
      discountBadge: "40 % DE RÉDUCTION POUR TOUS LES PATIENTS DÈS 35 ANS",
      veneers: { title: "Facettes (esthétique de la zone du sourire)", desc: "Facettes en céramique ultra-fines pour un résultat naturel impeccable.", oldPrice: "à partir de 167 000 000 VND", price: "à partir de 100 000 000 VND", per: "(zone du sourire)" },
      crowns: { title: "Couronnes (restauration dentaire)", desc: "Couronnes haute résistance en zircone et céramique intégrale.", priceNote: "Tarif établi après une consultation gratuite", cta: "Prendre rendez-vous" },
      implants: { title: "Implants (remplacement des dents manquantes)", desc: "Implants premium des plus grands fabricants mondiaux.", oldPrice: "à partir de 20 000 000 VND", price: "à partir de 12 000 000 VND", per: "(par implant)" },
      cta: "PRENDRE RENDEZ-VOUS",
    },
    logistics: {
      heading: "Votre parcours vers un nouveau sourire, organisé de A à Z",
      subheading: "Une attention à chaque étape",
      meet: { title: "Arrivée", text: "Un chauffeur professionnel vous attend à l'aéroport avec une pancarte et vous conduit directement à votre hôtel." },
      guide: { title: "Votre guide", text: "À Ha Long, la coordinatrice Ulyana vous accueille : check-in, SIM locale, traduction à la clinique et conseils excursions." },
      farewell: { title: "Départ", text: "Le jour du vol, le chauffeur vous ramène à l'aéroport à l'heure." },
    },
    concierge: {
      heading: "Un accompagnement complet pendant votre séjour",
      stay: { title: "Hébergement", text: "Sélection et réservation d'un hôtel ou appartement adapté à votre budget." },
      clinic: { title: "À la clinique", text: "Accompagnement personnel et services d'interprète professionnel." },
      leisure: { title: "Loisirs", text: "Organisation d'excursions dans la baie d'Ha Long et ses environs." },
    },
    team: {
      heading: "Nos coordinatrices",
      uliana: { name: "Ulyana", role: "Coordinatrice principale et interprète", desc: "Gère votre séjour, la logistique et la traduction en clinique." },
      evgenia: { name: "Evgenia", role: "Coordinatrice", desc: "Confort et soutien à chaque étape de votre traitement." },
    },
    testimonials: { heading: "Avis de nos patients", swipeHint: "Glissez pour voir plus", leaveReview: "LAISSER UN AVIS" },
    footer: { telegram: "CONTACTER SUR TELEGRAM", whatsapp: "CONTACTER SUR WHATSAPP" },
  },
  de: {
    settings: "Einstellungen",
    language: "Sprache",
    nav: { home: "Startseite", services: "Leistungen", logistics: "Begleitung", team: "Team", testimonials: "Bewertungen" },
    hero: {
      title1: "Ein neues Lächeln in der Halong-Bucht:",
      title2: "3× günstiger als in Deutschland",
      subtitle: "Professioneller Flughafentransfer und vollständige deutschsprachige Betreuung durch unsere Koordinatoren.",
      discount: "40% RABATT FÜR ALLE AB 35 JAHREN",
      cta: "BERATUNG VEREINBAREN",
    },
    services: {
      heading: "Leistungen & Preise",
      subheading: "Zahnmedizin auf Weltniveau zu erschwinglichen Preisen",
      discountBadge: "40% RABATT FÜR ALLE PATIENTEN AB 35 JAHREN",
      veneers: { title: "Veneers (Ästhetik der Lächelzone)", desc: "Hauchdünne Keramik-Veneers für ein makellos natürliches Ergebnis.", oldPrice: "ab 167.000.000 VND", price: "ab 100.000.000 VND", per: "(für die Lächelzone)" },
      crowns: { title: "Kronen (Zahnrestauration)", desc: "Hochfeste Zirkon- und Vollkeramikkronen.", priceNote: "Preis nach kostenloser Beratung", cta: "Beratung vereinbaren" },
      implants: { title: "Implantate (Ersatz fehlender Zähne)", desc: "Premium-Implantate führender internationaler Hersteller.", oldPrice: "ab 20.000.000 VND", price: "ab 12.000.000 VND", per: "(pro Implantat)" },
      cta: "BERATUNG VEREINBAREN",
    },
    logistics: {
      heading: "Ihr Weg zum neuen Lächeln — bis ins Detail organisiert",
      subheading: "Betreuung in jeder Phase",
      meet: { title: "Ankunft", text: "Am Flughafen erwartet Sie ein professioneller Fahrer mit Namensschild und bringt Sie direkt zum Hotel." },
      guide: { title: "Ihre Begleitung", text: "In Halong empfängt Sie Koordinatorin Ulyana — Hilfe beim Check-in, lokale SIM, Übersetzung in der Klinik und Ausflugstipps." },
      farewell: { title: "Abreise", text: "Am Abflugtag bringt der Fahrer Sie pünktlich zurück zum Flughafen." },
    },
    concierge: {
      heading: "Vollständige Betreuung Ihrer Reise",
      stay: { title: "Unterkunft", text: "Auswahl und Buchung von Hotel oder Apartment passend zu Ihrem Budget." },
      clinic: { title: "In der Klinik", text: "Persönliche Begleitung und professioneller Dolmetscherdienst in der Klinik." },
      leisure: { title: "Freizeit", text: "Hilfe bei der Organisation von Ausflügen rund um die Halong-Bucht." },
    },
    team: {
      heading: "Unsere Koordinatorinnen",
      uliana: { name: "Ulyana", role: "Leitende Koordinatorin & Dolmetscherin", desc: "Verwaltet Ihren Aufenthalt, die Logistik und die Übersetzung in der Klinik." },
      evgenia: { name: "Evgenia", role: "Koordinatorin", desc: "Komfort und Unterstützung in jeder Behandlungsphase." },
    },
    testimonials: { heading: "Was unsere Patienten sagen", swipeHint: "Wischen zum Blättern", leaveReview: "BEWERTUNG ABGEBEN" },
    footer: { telegram: "AUF TELEGRAM KONTAKTIEREN", whatsapp: "AUF WHATSAPP KONTAKTIEREN" },
  },
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < Math.floor(rating)
              ? "fill-primary text-primary"
              : i < rating
              ? "fill-primary/50 text-primary"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
    <span className="text-[11px] font-bold text-foreground ml-0.5">{rating}</span>
  </div>
);

const SettingsLanguageMenu = ({
  lang, setLang, t,
}: { lang: LangCode; setLang: (l: LangCode) => void; t: Dict }) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      aria-label={t.settings}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 hover:border-white/60 transition-colors text-white text-[12px] md:text-[13px] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <Settings className="w-3.5 h-3.5" />
      <span>{t.settings}</span>
      <span className="text-white/70 font-bold tracking-wider">
        · {LANGUAGES.find((l) => l.code === lang)?.short}
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56 z-50 bg-popover">
      <DropdownMenuLabel className="flex items-center gap-2 text-foreground">
        <Languages className="w-4 h-4 text-primary" />
        {t.language}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {LANGUAGES.map((l) => (
        <DropdownMenuItem
          key={l.code}
          onSelect={() => setLang(l.code)}
          className="cursor-pointer text-[14px] font-medium flex items-center justify-between"
        >
          <span>{l.label}</span>
          {lang === l.code && <Check className="w-4 h-4 text-primary" />}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [lang, setLangState] = useState<LangCode>(() => {
    if (typeof window === "undefined") return "ru";
    const saved = window.localStorage.getItem("dv_lang") as LangCode | null;
    return saved && DICTIONARIES[saved] ? saved : "ru";
  });

  const setLang = (l: LangCode) => {
    setLangState(l);
    try { window.localStorage.setItem("dv_lang", l); } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = DICTIONARIES[lang];

  // Localized testimonials
  const testimonialsByLang: Record<LangCode, { name: string; text: string; date: string }[]> = {
    ru: [
      { name: "Марина К.", text: "Невероятный сервис! Ульяна помогла с заселением и сопровождала в клинике. Виниры выглядят потрясающе.", date: "Март 2026" },
      { name: "Алексей Д.", text: "Имплантация прошла безболезненно. Сэкономил более 60% по сравнению с московскими клиниками.", date: "Февраль 2026" },
      { name: "Ольга С.", text: "Совместили отдых и лечение. Бухта Халонг — невероятная красота, а зубы теперь идеальные.", date: "Январь 2026" },
      { name: "Дмитрий Л.", text: "Коронки поставили за два визита. Качество на уровне лучших европейских клиник, а цена в разы ниже.", date: "Март 2026" },
      { name: "Наталья В.", text: "Координатор Евгения была рядом на каждом этапе. Чувствовала себя как дома, несмотря на другую страну.", date: "Декабрь 2025" },
      { name: "Игорь М.", text: "Приехал на имплантацию четырех зубов. Все прошло идеально, врачи — настоящие профессионалы.", date: "Февраль 2026" },
      { name: "Елена Р.", text: "Виниры мечты! Улыбаюсь теперь без стеснения. Спасибо команде Dental Vietnam за новую жизнь.", date: "Январь 2026" },
      { name: "Сергей Т.", text: "Отличная организация от трансфера до клиники. Рекомендую всем, кто думает о лечении за рубежом.", date: "Март 2026" },
    ],
    en: [
      { name: "Marina K.", text: "Incredible service! Ulyana helped with check-in and escorted me to the clinic. The veneers look amazing.", date: "March 2026" },
      { name: "Alexey D.", text: "The implant procedure was painless. I saved over 60% compared to clinics back home.", date: "February 2026" },
      { name: "Olga S.", text: "We combined a holiday with treatment. Ha Long Bay is breathtaking, and my teeth are now perfect.", date: "January 2026" },
      { name: "Dmitry L.", text: "Crowns done in two visits. Quality on par with top European clinics, at a fraction of the price.", date: "March 2026" },
      { name: "Natalia V.", text: "Coordinator Evgenia was with me every step. I felt at home despite being abroad.", date: "December 2025" },
      { name: "Igor M.", text: "Came for four implants. Everything went perfectly — the doctors are true professionals.", date: "February 2026" },
      { name: "Elena R.", text: "Dream veneers! I smile freely again. Thanks to the Dental Vietnam team for a new life.", date: "January 2026" },
      { name: "Sergey T.", text: "Excellent organization from transfer to clinic. Highly recommend for treatment abroad.", date: "March 2026" },
    ],
    fr: [
      { name: "Marina K.", text: "Service incroyable ! Ulyana m'a aidée pour le check-in et m'a accompagnée à la clinique. Les facettes sont superbes.", date: "Mars 2026" },
      { name: "Alexey D.", text: "L'implant s'est passé sans douleur. J'ai économisé plus de 60 % par rapport aux cliniques en Europe.", date: "Février 2026" },
      { name: "Olga S.", text: "Vacances et soins combinés. La baie d'Ha Long est magnifique, et mes dents sont parfaites.", date: "Janvier 2026" },
      { name: "Dmitry L.", text: "Couronnes posées en deux visites. Qualité équivalente aux meilleures cliniques européennes, à prix réduit.", date: "Mars 2026" },
      { name: "Natalia V.", text: "La coordinatrice Evgenia a été présente à chaque étape. Je me suis sentie chez moi, malgré l'étranger.", date: "Décembre 2025" },
      { name: "Igor M.", text: "Venu pour quatre implants. Tout s'est parfaitement passé — les médecins sont de vrais professionnels.", date: "Février 2026" },
      { name: "Elena R.", text: "Facettes de rêve ! Je souris sans gêne. Merci à l'équipe Dental Vietnam pour cette nouvelle vie.", date: "Janvier 2026" },
      { name: "Sergey T.", text: "Organisation parfaite, du transfert à la clinique. Je recommande vivement.", date: "Mars 2026" },
    ],
    de: [
      { name: "Anna M., Berlin", text: "Hervorragender Service! Ulyana hat mir beim Check-in geholfen und mich zu jedem Termin begleitet. Die Veneers sehen fantastisch aus.", date: "März 2026" },
      { name: "Lukas W., München", text: "Die Implantation verlief schmerzfrei. Über 60% gespart im Vergleich zu Angeboten in Deutschland.", date: "Februar 2026" },
      { name: "Sophie R., Hamburg", text: "Urlaub und Behandlung kombiniert. Die Halong-Bucht ist atemberaubend, meine Zähne sind perfekt.", date: "Januar 2026" },
      { name: "Tobias L., Köln", text: "Kronen in zwei Terminen erledigt. Qualität wie in den besten europäischen Kliniken — zu einem Bruchteil des Preises.", date: "März 2026" },
      { name: "Julia V., Frankfurt", text: "Koordinatorin Evgenia war in jeder Phase an meiner Seite. Habe mich wie zu Hause gefühlt.", date: "Dezember 2025" },
      { name: "Markus H., Stuttgart", text: "Vier Implantate gesetzt — alles perfekt. Die Ärzte sind echte Profis.", date: "Februar 2026" },
      { name: "Lisa K., Wien", text: "Traum-Veneers! Ich lächle wieder ohne Hemmungen. Danke an das Dental-Vietnam-Team.", date: "Januar 2026" },
      { name: "Sebastian T., Zürich", text: "Top organisiert vom Transfer bis zur Klinik. Klare Empfehlung für alle, die eine Behandlung im Ausland erwägen.", date: "März 2026" },
    ],
  };
  const testimonials = testimonialsByLang[lang];

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen w-full font-['Inter',sans-serif] overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[hsl(210,55%,18%)] text-white">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
              <img src={logoImg} alt="Dental Vietnam" className="w-8 h-8 rounded-full object-contain" width={32} height={32} />
            </div>
            <span className="text-base md:text-lg font-extrabold tracking-tight uppercase truncate">
              DENTAL VIETNAM
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="opacity-90 hover:opacity-100 transition-opacity">{t.nav.home}</a>
            <button onClick={scrollToServices} className="opacity-90 hover:opacity-100 transition-opacity">{t.nav.services}</button>
            <a href="#logistics" className="opacity-90 hover:opacity-100 transition-opacity">{t.nav.logistics}</a>
            <a href="#team" className="opacity-90 hover:opacity-100 transition-opacity">{t.nav.team}</a>
            <a href="#testimonials" className="opacity-90 hover:opacity-100 transition-opacity">{t.nav.testimonials}</a>
          </div>

          {/* Settings (language) — top-right corner */}
          <div className="shrink-0">
            <SettingsLanguageMenu lang={lang} setLang={setLang} t={t} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={t.hero.title1}
          className="absolute inset-0 w-full h-full object-cover object-[70%_15%] md:object-[center_15%]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[hsl(210,40%,18%,0.92)] via-[hsl(210,35%,22%,0.82)] to-[hsl(210,20%,30%,0.35)] md:from-[hsl(210,40%,18%,0.94)] md:via-[hsl(210,35%,22%,0.78)] md:to-transparent" />

        <div className="relative z-10 min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end md:justify-center px-5 md:px-12 pb-8 md:pb-0 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h1 className="font-['Playfair_Display',serif] text-[26px] sm:text-3xl md:text-[44px] font-extrabold leading-[1.15] text-white mb-3 md:mb-5 tracking-tight">
              {t.hero.title1}
              <br />
              <span className="text-[hsl(38,65%,60%)]">{t.hero.title2}</span>
            </h1>

            <p className="text-[17px] md:text-lg text-white/80 mb-5 leading-relaxed max-w-md">
              {t.hero.subtitle}
            </p>

            <div className="border border-[hsl(38,65%,55%,0.6)] bg-[hsl(38,60%,50%,0.12)] backdrop-blur-sm rounded-lg px-5 py-3 mb-5 max-w-md">
              <p className="text-[16px] md:text-lg font-extrabold text-[hsl(38,65%,70%)] uppercase tracking-wide">
                {t.hero.discount}
              </p>
            </div>

            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] md:text-lg font-bold px-8 py-7 rounded-xl w-full md:w-fit uppercase tracking-wide transition-colors"
            >
              <Send className="w-5 h-5" />
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} id="services" className="py-12 md:py-20 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-['Playfair_Display',serif] text-[24px] md:text-4xl font-bold text-foreground mb-2">
              {t.services.heading}
            </h2>
            <p className="text-[16px] text-muted-foreground max-w-lg mx-auto mb-4">
              {t.services.subheading}
            </p>
            <div className="inline-block border border-primary/40 bg-primary/10 rounded-lg px-5 py-2.5">
              <p className="text-[15px] md:text-base font-extrabold text-primary uppercase tracking-wide">
                {t.services.discountBadge}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Veneers */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={veneersImg} alt={t.services.veneers.title} className="w-full h-full object-cover" loading="lazy" width={768} height={512} />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="font-['Playfair_Display',serif] text-[18px] font-bold text-foreground mb-1">
                  {t.services.veneers.title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  {t.services.veneers.desc}
                </p>
                <div className="bg-muted/60 rounded-lg p-4 mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">{t.services.veneers.oldPrice}</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-40%</span>
                  </div>
                  <p className="text-[18px] font-bold text-primary">{t.services.veneers.price}</p>
                  <p className="text-xs text-muted-foreground">{t.services.veneers.per}</p>
                </div>
              </CardContent>
            </Card>

            {/* Crowns */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={crownsImg} alt={t.services.crowns.title} className="w-full h-full object-cover" loading="lazy" width={768} height={512} />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="font-['Playfair_Display',serif] text-[18px] font-bold text-foreground mb-1">
                  {t.services.crowns.title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  {t.services.crowns.desc}
                </p>
                <div className="bg-muted/60 rounded-lg p-4 mb-3">
                  <p className="text-[15px] text-foreground font-medium">
                    {t.services.crowns.priceNote}
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full gap-2 text-primary border-primary/30 hover:bg-primary/5 py-5 text-[15px] font-semibold">
                  <a href={TELEGRAM_BOT} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4" />
                    {t.services.crowns.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Implants */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden bg-[hsl(210,10%,96%)] flex items-center justify-center">
                <img src={implantImg} alt={t.services.implants.title} className="w-full h-full object-contain" loading="lazy" width={768} height={512} />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="font-['Playfair_Display',serif] text-[18px] font-bold text-foreground mb-1">
                  {t.services.implants.title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  {t.services.implants.desc}
                </p>
                <div className="bg-muted/60 rounded-lg p-4 mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">{t.services.implants.oldPrice}</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-40%</span>
                  </div>
                  <p className="text-[18px] font-bold text-primary">{t.services.implants.price}</p>
                  <p className="text-xs text-muted-foreground">{t.services.implants.per}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] md:text-lg font-bold px-8 py-7 rounded-xl w-full md:w-auto uppercase tracking-wide transition-colors"
            >
              <Send className="w-5 h-5" />
              {t.services.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="py-12 md:py-20 px-4 md:px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[22px] md:text-3xl font-bold text-foreground mb-2 text-center">
            {t.logistics.heading}
          </h2>
          <p className="text-center text-muted-foreground text-[15px] mb-8 md:mb-10">{t.logistics.subheading}</p>

          <div className="flex flex-col gap-4">
            {[
              { icon: Plane, ...t.logistics.meet },
              { icon: UserCheck, ...t.logistics.guide },
              { icon: Car, ...t.logistics.farewell },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[16px] mb-1">{step.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[22px] md:text-3xl font-bold text-foreground mb-8 text-center">
            {t.concierge.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Hotel, ...t.concierge.stay },
              { icon: Languages, ...t.concierge.clinic },
              { icon: Ship, ...t.concierge.leisure },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-[15px] mb-1">{item.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-8 md:py-12 px-4 md:px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[18px] md:text-xl font-bold text-foreground mb-5 text-center">
            {t.team.heading}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-card border-border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden max-h-[140px] md:max-h-[170px]">
                  <img src={ulianaPhoto} alt={t.team.uliana.name} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-2.5 md:p-3">
                  <h3 className="font-['Playfair_Display',serif] text-[13px] md:text-[14px] font-bold text-foreground leading-tight mb-0.5">
                    {t.team.uliana.name}
                  </h3>
                  <StarRating rating={5.0} />
                  <p className="text-[11px] text-primary font-medium mb-1 mt-1">{t.team.uliana.role}</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">{t.team.uliana.desc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden max-h-[140px] md:max-h-[170px]">
                  <img src={evgeniaPhoto} alt={t.team.evgenia.name} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-2.5 md:p-3">
                  <h3 className="font-['Playfair_Display',serif] text-[13px] md:text-[14px] font-bold text-foreground leading-tight mb-0.5">
                    {t.team.evgenia.name}
                  </h3>
                  <StarRating rating={4.9} />
                  <p className="text-[11px] text-primary font-medium mb-1 mt-1">{t.team.evgenia.role}</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">{t.team.evgenia.desc}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-10 md:py-16 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[22px] md:text-3xl font-bold text-foreground mb-8 text-center">
            {t.testimonials.heading}
          </h2>

          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
              aria-label="prev"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
              aria-label="next"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((review, i) => (
                <Card key={i} className="bg-card border-border shadow-sm shrink-0 w-[280px] md:w-[320px] snap-start">
                  <CardContent className="p-5">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-[14px] text-muted-foreground mb-3 leading-relaxed italic">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-bold text-foreground">{review.name}</p>
                      <p className="text-[12px] text-muted-foreground">{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-[12px] text-muted-foreground mt-2 md:hidden">{t.testimonials.swipeHint}</p>
          </div>

          <div className="mt-6 text-center">
            <Button asChild variant="outline" size="lg" className="text-[15px] font-bold px-8 py-5 rounded-xl border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-wide">
              <a href={TELEGRAM_CONTACT} target="_blank" rel="noopener noreferrer">
                {t.testimonials.leaveReview}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 bg-[hsl(210,55%,15%)] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <img src={logoImg} alt="Dental Vietnam" className="w-7 h-7 rounded-full object-contain" width={28} height={28} loading="lazy" />
              </div>
              <p className="text-lg font-bold uppercase tracking-wide">Dental Vietnam</p>
            </div>
            <div className="flex items-center gap-4 text-sm opacity-70">
              <a href="#services" className="hover:opacity-100">{t.nav.services}</a>
              <a href="#logistics" className="hover:opacity-100">{t.nav.logistics}</a>
              <a href="#team" className="hover:opacity-100">{t.nav.team}</a>
              <a href="#testimonials" className="hover:opacity-100">{t.nav.testimonials}</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a href={TELEGRAM_CONTACT} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,45%)] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto justify-center uppercase tracking-wide">
              <Send className="w-5 h-5" /> {t.footer.telegram}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto justify-center uppercase tracking-wide">
              <MessageCircle className="w-5 h-5" /> {t.footer.whatsapp}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
