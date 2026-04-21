import heroImage from "@/assets/hero-coordinator.jpg";
import ulianaPhoto from "@/assets/uliana.jpg";
import evgeniaPhoto from "@/assets/evgenia.jpg";
import veneersImg from "@/assets/veneers.jpg";
import crownsImg from "@/assets/crowns.jpg";
import implantImg from "@/assets/implant.jpg";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Hotel, Languages, Ship, Star, Phone, Plane, UserCheck, MessageCircle, Send, ChevronLeft, ChevronRight, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRef, useState } from "react";

// Use ?start= so the bot opens with a "START" button (Telegram bot deep-link).
// Param value is passed to the bot once user taps START.
const TELEGRAM_LINK = "https://t.me/dental_vietnam_bot?start=consult";

const LANGUAGES = [
  { code: "ru", label: "Русский", botParam: "lang_ru" },
  { code: "en", label: "English", botParam: "lang_en" },
  { code: "fr", label: "Français", botParam: "lang_fr" },
  { code: "vi", label: "Tiếng Việt", botParam: "lang_vi" },
];

const testimonials = [
  { name: "Марина К.", text: "Невероятный сервис! Ульяна помогла с заселением и сопровождала в клинике. Виниры выглядят потрясающе.", date: "Март 2026" },
  { name: "Алексей Д.", text: "Имплантация прошла безболезненно. Сэкономил более 60% по сравнению с московскими клиниками.", date: "Февраль 2026" },
  { name: "Ольга С.", text: "Совместили отдых и лечение. Бухта Халонг — невероятная красота, а зубы теперь идеальные.", date: "Январь 2026" },
  { name: "Дмитрий Л.", text: "Коронки поставили за два визита. Качество на уровне лучших европейских клиник, а цена в разы ниже.", date: "Март 2026" },
  { name: "Наталья В.", text: "Координатор Евгения была рядом на каждом этапе. Чувствовала себя как дома, несмотря на другую страну.", date: "Декабрь 2025" },
  { name: "Игорь М.", text: "Приехал на имплантацию четырех зубов. Все прошло идеально, врачи — настоящие профессионалы.", date: "Февраль 2026" },
  { name: "Елена Р.", text: "Виниры мечты! Улыбаюсь теперь без стеснения. Спасибо команде Dental Vietnam за новую жизнь.", date: "Январь 2026" },
  { name: "Сергей Т.", text: "Отличная организация от трансфера до клиники. Рекомендую всем, кто думает о лечении за рубежом.", date: "Март 2026" },
];

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

const LanguageMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger
      aria-label="Выбор языка / Settings"
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 hover:border-white/50 transition-colors text-white text-[12px] md:text-[13px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <Settings className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">Язык</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-52">
      <DropdownMenuLabel className="flex items-center gap-2 text-foreground">
        <Languages className="w-4 h-4 text-primary" />
        Выберите язык
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {LANGUAGES.map((lang) => (
        <DropdownMenuItem key={lang.code} asChild>
          <a
            href={`https://t.me/dental_vietnam_bot?start=${lang.botParam}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[14px] font-medium"
          >
            {lang.label}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
              <img src={logoImg} alt="Dental Vietnam" className="w-8 h-8 rounded-full object-contain" width={32} height={32} />
            </div>
            <span className="text-base md:text-lg font-extrabold tracking-tight uppercase">
              DENTAL VIETNAM
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="opacity-90 hover:opacity-100 transition-opacity">Главная</a>
            <button onClick={scrollToServices} className="opacity-90 hover:opacity-100 transition-opacity">Услуги</button>
            <a href="#logistics" className="opacity-90 hover:opacity-100 transition-opacity">Сопровождение</a>
            <a href="#team" className="opacity-90 hover:opacity-100 transition-opacity">Команда</a>
            <a href="#testimonials" className="opacity-90 hover:opacity-100 transition-opacity">Отзывы</a>
            <LanguageMenu />
          </div>
          <div className="md:hidden flex items-center gap-3 text-xs font-medium">
            <button onClick={scrollToServices} className="opacity-90 hover:opacity-100">Услуги</button>
            <a href="#team" className="opacity-90 hover:opacity-100">Команда</a>
            <a href="#testimonials" className="opacity-90 hover:opacity-100">Отзывы</a>
            <LanguageMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Координатор клиники на фоне бухты Халонг"
          className="absolute inset-0 w-full h-full object-cover object-[70%_15%] md:object-[center_15%]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[hsl(210,40%,18%,0.92)] via-[hsl(210,35%,22%,0.82)] to-[hsl(210,20%,30%,0.35)] md:from-[hsl(210,40%,18%,0.94)] md:via-[hsl(210,35%,22%,0.78)] md:to-transparent" />

        <div className="relative z-10 min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end md:justify-center px-5 md:px-12 pb-8 md:pb-0 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h1 className="font-['Playfair_Display',serif] text-[26px] sm:text-3xl md:text-[44px] font-extrabold leading-[1.15] text-white mb-3 md:mb-5 tracking-tight">
              Новая улыбка в Халонге:
              <br />
              <span className="text-[hsl(38,65%,60%)]">в 3 раза доступнее, чем в России</span>
            </h1>

            <p className="text-[17px] md:text-lg text-white/80 mb-5 leading-relaxed max-w-md">
              Профессиональный трансфер из аэропорта и полное русскоязычное сопровождение от наших координаторов.
            </p>

            {/* Discount — semi-transparent gold frame */}
            <div className="border border-[hsl(38,65%,55%,0.6)] bg-[hsl(38,60%,50%,0.12)] backdrop-blur-sm rounded-lg px-5 py-3 mb-5 max-w-md">
              <p className="text-[16px] md:text-lg font-extrabold text-[hsl(38,65%,70%)] uppercase tracking-wide">
                СКИДКА 40% ДЛЯ ВСЕХ ОТ 35 ЛЕТ
              </p>
            </div>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] md:text-lg font-bold px-8 py-7 rounded-xl w-full md:w-fit uppercase tracking-wide transition-colors"
            >
              <Send className="w-5 h-5" />
              ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section ref={servicesRef} id="services" className="py-12 md:py-20 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-['Playfair_Display',serif] text-[24px] md:text-4xl font-bold text-foreground mb-2">
              Услуги и Цены
            </h2>
            <p className="text-[16px] text-muted-foreground max-w-lg mx-auto mb-4">
              Стоматология мирового уровня по доступным ценам
            </p>
            <div className="inline-block border border-primary/40 bg-primary/10 rounded-lg px-5 py-2.5 mb-5">
              <p className="text-[15px] md:text-base font-extrabold text-primary uppercase tracking-wide">
                СКИДКА 40% ДЛЯ ВСЕХ ПАЦИЕНТОВ ОТ 35 ЛЕТ
              </p>
            </div>

            {/* Language selector — each opens the bot with chosen language */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Languages className="w-4 h-4" />
                <span className="text-[12px] md:text-[13px] uppercase tracking-wider font-medium">
                  Консультация на вашем языке
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {LANGUAGES.map((lang) => (
                  <a
                    key={lang.code}
                    href={`https://t.me/dental_vietnam_bot?start=${lang.botParam}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors text-[14px] font-medium text-foreground"
                  >
                    {lang.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Veneers */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={veneersImg} alt="Виниры — эстетика зоны улыбки" className="w-full h-full object-cover" loading="lazy" width={768} height={512} />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="font-['Playfair_Display',serif] text-[18px] font-bold text-foreground mb-1">
                  Виниры (эстетика зоны улыбки)
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  Тончайшие керамические виниры для безупречного естественного результата.
                </p>
                <div className="bg-muted/60 rounded-lg p-4 mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">от 167 000 000 VND</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-40%</span>
                  </div>
                  <p className="text-[18px] font-bold text-primary">от 100 000 000 VND</p>
                  <p className="text-xs text-muted-foreground">(за зону улыбки)</p>
                </div>
              </CardContent>
            </Card>

            {/* Crowns */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={crownsImg} alt="Коронки — восстановление зуба" className="w-full h-full object-cover" loading="lazy" width={768} height={512} />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="font-['Playfair_Display',serif] text-[18px] font-bold text-foreground mb-1">
                  Коронки (восстановление зуба)
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  Высокопрочные циркониевые и цельнокерамические коронки.
                </p>
                <div className="bg-muted/60 rounded-lg p-4 mb-3">
                  <p className="text-[15px] text-foreground font-medium">
                    Цена рассчитывается после бесплатной консультации
                  </p>
                </div>
                <Button variant="outline" className="w-full gap-2 text-primary border-primary/30 hover:bg-primary/5 py-5 text-[15px] font-semibold">
                  <Phone className="w-4 h-4" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>

            {/* Implants */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden bg-[hsl(210,10%,96%)] flex items-center justify-center">
                <img src={implantImg} alt="Имплантация — восстановление зубов" className="w-full h-full object-contain" loading="lazy" width={768} height={512} />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="font-['Playfair_Display',serif] text-[18px] font-bold text-foreground mb-1">
                  Имплантация (восстановление утраченных зубов)
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  Имплантаты премиум-класса от ведущих мировых производителей.
                </p>
                <div className="bg-muted/60 rounded-lg p-4 mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">от 20 000 000 VND</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-40%</span>
                  </div>
                  <p className="text-[18px] font-bold text-primary">от 12 000 000 VND</p>
                  <p className="text-xs text-muted-foreground">(за один имплантат)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] md:text-lg font-bold px-8 py-7 rounded-xl w-full md:w-auto uppercase tracking-wide transition-colors"
            >
              <Send className="w-5 h-5" />
              ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
            </a>
          </div>
        </div>
      </section>

      {/* Logistics Block */}
      <section id="logistics" className="py-12 md:py-20 px-4 md:px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[22px] md:text-3xl font-bold text-foreground mb-2 text-center">
            Ваш путь к улыбке организован до мелочей
          </h2>
          <p className="text-center text-muted-foreground text-[15px] mb-8 md:mb-10">Забота на каждом этапе</p>

          <div className="flex flex-col gap-4">
            {[
              { icon: Plane, title: "Встреча", text: "В аэропорту вас ждет профессиональный водитель с именной табличкой. Комфортный трансфер доставит вас прямо к отелю." },
              { icon: UserCheck, title: "Ваш проводник", text: "В Халонге вас встречает координатор Ульяна. Она поможет с заселением, подключит местную связь, станет переводчиком в клинике и поможет с подбором экскурсий." },
              { icon: Car, title: "Проводы", text: "В день вылета водитель вовремя отвезет вас обратно в аэропорт." },
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
            Полное сопровождение вашего тура
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Hotel, title: "Размещение", text: "Подбор и помощь с бронированием отеля или апартаментов под ваш бюджет." },
              { icon: Languages, title: "В клинике", text: "Персональное ведение в клинике, услуги профессионального переводчика." },
              { icon: Ship, title: "Досуг", text: "Помощь с организацией экскурсий по бухте Халонг и окрестностям." },
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

      {/* Team — coordinator cards with ratings */}
      <section id="team" className="py-8 md:py-12 px-4 md:px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[18px] md:text-xl font-bold text-foreground mb-5 text-center">
            Наши координаторы
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Uliana */}
            <Card className="bg-card border-border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden max-h-[140px] md:max-h-[170px]">
                  <img src={ulianaPhoto} alt="Ведущий координатор Ульяна" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-2.5 md:p-3">
                  <h3 className="font-['Playfair_Display',serif] text-[13px] md:text-[14px] font-bold text-foreground leading-tight mb-0.5">
                    Ульяна
                  </h3>
                  <StarRating rating={5.0} />
                  <p className="text-[11px] text-primary font-medium mb-1 mt-1">Ведущий координатор и переводчик</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Управляющая вашим пребыванием, логистикой и переводом в клинике.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Evgenia */}
            <Card className="bg-card border-border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden max-h-[140px] md:max-h-[170px]">
                  <img src={evgeniaPhoto} alt="Координатор Евгения" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-2.5 md:p-3">
                  <h3 className="font-['Playfair_Display',serif] text-[13px] md:text-[14px] font-bold text-foreground leading-tight mb-0.5">
                    Евгения
                  </h3>
                  <StarRating rating={4.9} />
                  <p className="text-[11px] text-primary font-medium mb-1 mt-1">Координатор</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Поддержка и комфорт на каждом этапе вашего лечения.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials — swipeable carousel */}
      <section id="testimonials" className="py-10 md:py-16 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[22px] md:text-3xl font-bold text-foreground mb-8 text-center">
            Отзывы наших пациентов
          </h2>

          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
              aria-label="Следующий отзыв"
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
            <p className="text-center text-[12px] text-muted-foreground mt-2 md:hidden">Свайпайте для просмотра</p>
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" size="lg" className="text-[15px] font-bold px-8 py-5 rounded-xl border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-wide">
              ОСТАВИТЬ ОТЗЫВ
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
              <a href="#services" className="hover:opacity-100">Услуги</a>
              <a href="#logistics" className="hover:opacity-100">Сопровождение</a>
              <a href="#team" className="hover:opacity-100">Команда</a>
              <a href="#testimonials" className="hover:opacity-100">Отзывы</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a href="https://t.me/dental_vietnam_bot" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,45%)] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto justify-center uppercase tracking-wide">
              <Send className="w-5 h-5" /> СВЯЗАТЬСЯ В TELEGRAM
            </a>
            <a href="https://wa.me/79041274825" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto justify-center uppercase tracking-wide">
              <MessageCircle className="w-5 h-5" /> СВЯЗАТЬСЯ В WHATSAPP
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
