import heroImage from "@/assets/hero-coordinator.jpg";
import ulianaPhoto from "@/assets/uliana.jpg";
import evgeniaPhoto from "@/assets/evgenia.jpg";
import veneersImg from "@/assets/veneers.jpg";
import crownsImg from "@/assets/crowns.jpg";
import implantImg from "@/assets/implant.jpg";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Hotel, Languages, Ship, Star, Phone, Plane, UserCheck, MessageCircle, Send } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
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

      {/* Hero Section — rich dark overlay restored */}
      <section id="hero" className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Координатор клиники на фоне бухты Халонг"
          className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[hsl(210,40%,18%,0.92)] via-[hsl(210,35%,22%,0.82)] to-[hsl(210,20%,30%,0.25)] md:from-[hsl(210,40%,18%,0.94)] md:via-[hsl(210,35%,22%,0.78)] md:to-transparent" />

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

            <div className="bg-primary rounded-lg px-5 py-3 mb-5 max-w-md">
              <p className="text-[16px] md:text-lg font-extrabold text-primary-foreground uppercase tracking-wide">
                СКИДКА 40% ДЛЯ ВСЕХ ОТ 35 ЛЕТ
              </p>
            </div>

            <a
              href="https://t.me/stomatolog_vietnam?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%BD%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%83%D0%BB%D1%8B%D0%B1%D0%BA%D0%B8%20%D0%B2%20%D0%A5%D0%B0%D0%BB%D0%BE%D0%BD%D0%B3%D0%B5."
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

      {/* ===== SERVICES — PRIMARY FOCUS ===== */}
      <section ref={servicesRef} id="services" className="py-12 md:py-20 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-['Playfair_Display',serif] text-[24px] md:text-4xl font-bold text-foreground mb-2">
              Услуги и Цены
            </h2>
            <p className="text-[16px] text-muted-foreground max-w-lg mx-auto mb-4">
              Стоматология мирового уровня по доступным ценам
            </p>
            <div className="inline-block bg-primary rounded-lg px-5 py-2.5">
              <p className="text-[15px] md:text-base font-extrabold text-primary-foreground uppercase tracking-wide">
                СКИДКА 40% ДЛЯ ВСЕХ ПАЦИЕНТОВ ОТ 35 ЛЕТ
              </p>
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
              href="https://t.me/stomatolog_vietnam?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%BD%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%83%D0%BB%D1%8B%D0%B1%D0%BA%D0%B8%20%D0%B2%20%D0%A5%D0%B0%D0%BB%D0%BE%D0%BD%D0%B3%D0%B5."
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

      {/* Team — compact coordinator cards (scaled down 70%) */}
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
                  <p className="text-[11px] text-primary font-medium mb-1">Ведущий координатор и переводчик</p>
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
                  <p className="text-[11px] text-primary font-medium mb-1">Координатор</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Поддержка и комфорт на каждом этапе вашего лечения.
                  </p>
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
            Отзывы наших пациентов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Марина К.", text: "Невероятный сервис! Ульяна помогла с заселением и сопровождала в клинике. Виниры выглядят потрясающе." },
              { name: "Алексей Д.", text: "Имплантация прошла безболезненно. Сэкономил более 60% по сравнению с московскими клиниками." },
              { name: "Ольга С.", text: "Совместили отдых и лечение. Бухта Халонг — невероятная красота, а зубы теперь идеальные." },
            ].map((review, i) => (
              <Card key={i} className="bg-card border-border shadow-sm">
                <CardContent className="p-5">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[14px] text-muted-foreground mb-2 leading-relaxed italic">"{review.text}"</p>
                  <p className="text-[14px] font-bold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
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
            <a href="https://t.me/stomatolog_vietnam" target="_blank" rel="noopener noreferrer"
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
