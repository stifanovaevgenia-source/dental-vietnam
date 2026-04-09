import heroImage from "@/assets/hero-coordinator.jpg";
import ulianaPhoto from "@/assets/uliana.jpg";
import evgeniaPhoto from "@/assets/evgenia.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smile, Crown, CircleDot, Car, Hotel, Languages, Ship, Star, Phone, Plane, UserCheck, MessageCircle, Send } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full font-['Inter',sans-serif] overflow-x-hidden text-[18px]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[hsl(210,60%,25%)] text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-xl font-extrabold tracking-tight uppercase">
              DENTAL VIETNAM
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium opacity-90">
            <a href="#hero" className="hover:opacity-100 transition-opacity">Главная</a>
            <button onClick={scrollToServices} className="hover:opacity-100 transition-opacity">Услуги</button>
            <a href="#logistics" className="hover:opacity-100 transition-opacity">Сопровождение</a>
            <a href="#team" className="hover:opacity-100 transition-opacity">Команда</a>
            <a href="#testimonials" className="hover:opacity-100 transition-opacity">Отзывы</a>
          </div>
          <div className="md:hidden flex items-center gap-4 text-xs font-medium">
            <button onClick={scrollToServices} className="opacity-90 hover:opacity-100">Услуги</button>
            <a href="#team" className="opacity-90 hover:opacity-100">Команда</a>
            <a href="#testimonials" className="opacity-90 hover:opacity-100">Отзывы</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[75vh] md:min-h-[85vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Координатор клиники на фоне бухты Халонг"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        {/* Lightened overlay — pale blue/ivory tint instead of dark */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[hsl(210,30%,92%,0.92)] via-[hsl(210,25%,90%,0.80)] to-transparent md:from-[hsl(210,30%,92%,0.93)] md:via-[hsl(210,25%,90%,0.75)] md:to-transparent" />

        <div className="relative z-10 min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end md:justify-center px-4 md:px-12 pb-8 md:pb-0 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h1 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.15] text-foreground mb-3 md:mb-5 tracking-tight">
              Новая улыбка в Халонге:
              <br />
              <span className="text-primary">в 3 раза доступнее, чем в России</span>
            </h1>

            <p className="text-base md:text-lg text-foreground/80 mb-5 leading-relaxed max-w-md">
              Профессиональный трансфер из аэропорта и полное русскоязычное сопровождение от наших координаторов.
            </p>

            {/* Discount banner — no emojis */}
            <div className="bg-primary/90 rounded-lg px-5 py-3 mb-5 max-w-md">
              <p className="text-base md:text-lg font-extrabold text-primary-foreground uppercase tracking-wide">
                СКИДКА 40% ДЛЯ ВСЕХ ПАЦИЕНТОВ ОТ 35 ЛЕТ
              </p>
            </div>

            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-bold px-8 py-7 rounded-xl w-full md:w-fit uppercase tracking-wide"
            >
              ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
            </Button>
          </div>
        </div>
      </section>

      {/* Logistics Block */}
      <section id="logistics" className="py-12 md:py-20 px-4 md:px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Ваш путь к улыбке организован до мелочей
          </h2>
          <p className="text-center text-muted-foreground text-base mb-8 md:mb-12">Забота на каждом этапе</p>

          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Встреча</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  В аэропорту вас ждет профессиональный водитель с именной табличкой. Комфортный трансфер доставит вас прямо к отелю.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Ваш проводник</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  В Халонге вас встречает оффлайн-координатор Ульяна. Она поможет с заселением, подключит местную связь, станет вашим переводчиком в клинике и поможет с подбором лучших экскурсий по заливу.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Проводы</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  В день вылета водитель вовремя отвезет вас обратно в аэропорт.
                </p>
              </div>
            </div>
          </div>

          <p className="text-base text-muted-foreground mt-6 text-center leading-relaxed max-w-2xl mx-auto">
            Вас встретит профессиональный водитель в аэропорту с именной табличкой. Ульяна и её команда обеспечат всё оффлайн-сопровождение от отеля до поликлиники.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-12 md:py-20 px-4 md:px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-4xl font-bold text-foreground mb-2">
              Услуги и Цены
            </h2>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Стоматология мирового уровня по доступным ценам
            </p>
            <div className="mt-4 inline-block bg-primary/90 rounded-lg px-5 py-2.5">
              <p className="text-base font-extrabold text-primary-foreground uppercase tracking-wide">
                СКИДКА 40% ДЛЯ ВСЕХ ПАЦИЕНТОВ ОТ 35 ЛЕТ
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Card 1: Veneers */}
            <Card className="bg-card border-border shadow-md">
              <CardContent className="p-5 md:p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <Smile className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-foreground mb-1">
                  Виниры <span className="text-sm font-normal text-muted-foreground">(Зона улыбки)</span>
                </h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Создание безупречной эстетики зоны улыбки. Тончайшие керамические виниры для естественного результата.
                </p>
                <div className="bg-muted/70 rounded-lg p-4 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">от 167 000 000 VND</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-40%</span>
                  </div>
                  <p className="text-lg font-bold text-primary">от 100 000 000 VND</p>
                  <p className="text-xs text-muted-foreground">(за зону улыбки)</p>
                </div>
                <p className="text-xs text-muted-foreground italic leading-snug">
                  Цена указана с учётом акции 40% для всех от 35 лет.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Crowns */}
            <Card className="bg-card border-border shadow-md">
              <CardContent className="p-5 md:p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <Crown className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-foreground mb-1">
                  Коронки
                </h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Восстановление функциональности и эстетики зуба. Высокопрочные циркониевые и цельнокерамические коронки.
                </p>
                <div className="bg-muted/70 rounded-lg p-4 mb-3">
                  <p className="text-base text-foreground font-medium leading-relaxed">
                    Цена рассчитывается после бесплатной консультации.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full gap-2 text-primary border-primary/30 hover:bg-primary/5 py-5 text-base font-semibold">
                  <Phone className="w-4 h-4" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>

            {/* Card 3: Implants */}
            <Card className="bg-card border-border shadow-md">
              <CardContent className="p-5 md:p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <CircleDot className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-foreground mb-1">
                  Имплантация
                </h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Полное восстановление утраченных зубов. Установка имплантатов премиум-класса от ведущих мировых производителей.
                </p>
                <div className="bg-muted/70 rounded-lg p-4 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">от 20 000 000 VND</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-40%</span>
                  </div>
                  <p className="text-lg font-bold text-primary">от 12 000 000 VND</p>
                  <p className="text-xs text-muted-foreground">(за один имплантат)</p>
                </div>
                <p className="text-xs text-muted-foreground italic leading-snug">
                  Цена указана с учётом акции 40% для всех от 35 лет.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-bold px-8 py-7 rounded-xl w-full md:w-auto uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 mr-2" />
              ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Concierge */}
      <section id="concierge" className="py-12 md:py-20 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-foreground mb-2">
              Полное сопровождение вашего тура
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <div className="flex flex-col items-center text-center p-5 md:p-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-1">Размещение</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Подбор и помощь с бронированием отеля или апартаментов под ваш бюджет.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 md:p-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-1">В клинике</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Персональное ведение в клинике, услуги профессионального переводчика.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 md:p-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                <Ship className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-1">
                Досуг <span className="text-sm font-normal text-muted-foreground">(по желанию)</span>
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Подбор и помощь с организацией экскурсий по бухте Халонг и окрестностям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team — Coordinators with real photos */}
      <section id="team" className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Наши специалисты и координаторы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Uliana — Lead Coordinator (dark-haired) */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={ulianaPhoto}
                    alt="Ведущий координатор Ульяна"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-1">
                    Ведущий координатор: Ульяна
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">Medical Coordinator</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Главный координатор, управляющая вашим пребыванием, логистикой и переводом в клинике.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Evgenia — Assistant Coordinator (blonde) */}
            <Card className="bg-card border-border shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={evgeniaPhoto}
                    alt="Координатор Евгения"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-1">
                    Координатор: Евгения
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">Medical Coordinator</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Ассистент координатора, обеспечивающая ваш комфорт и поддержку на протяжении всего процесса лечения.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-foreground mb-2">
              Отзывы наших пациентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { name: "Марина К.", text: "Невероятный сервис! Ульяна помогла с заселением и сопровождала в клинике. Виниры выглядят потрясающе." },
              { name: "Алексей Д.", text: "Имплантация прошла безболезненно. Сэкономил более 60% по сравнению с московскими клиниками. Рекомендую!" },
              { name: "Ольга С.", text: "Совместили отдых и лечение. Бухта Халонг — невероятная красота, а зубы теперь идеальные." },
            ].map((review, i) => (
              <Card key={i} className="bg-card border-border shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground mb-3 leading-relaxed italic">"{review.text}"</p>
                  <p className="text-base font-bold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              className="text-base font-bold px-8 py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-wide"
            >
              ОСТАВИТЬ ОТЗЫВ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with messenger buttons */}
      <footer className="py-8 px-4 md:px-6 bg-[hsl(210,60%,20%)] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-lg font-bold uppercase tracking-wide">Dental Vietnam</p>
            <div className="flex items-center gap-4 text-sm opacity-70">
              <a href="#services" className="hover:opacity-100 transition-opacity">Услуги</a>
              <a href="#logistics" className="hover:opacity-100 transition-opacity">Сопровождение</a>
              <a href="#team" className="hover:opacity-100 transition-opacity">Команда</a>
              <a href="#testimonials" className="hover:opacity-100 transition-opacity">Отзывы</a>
            </div>
          </div>

          {/* Messenger contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,45%)] text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto justify-center uppercase tracking-wide"
            >
              <Send className="w-5 h-5" />
              СВЯЗАТЬСЯ В TELEGRAM
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto justify-center uppercase tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              СВЯЗАТЬСЯ В WHATSAPP
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
