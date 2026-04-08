import heroImage from "@/assets/hero-coordinator.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smile, Crown, CircleDot, Car, Hotel, Languages, Ship, Star, ChevronRight, Sparkles, Heart, Phone } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-['Playfair_Display',serif] text-xl font-bold text-foreground tracking-tight">
            Клиника Преображения
          </span>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">Главная</a>
            <button onClick={scrollToServices} className="hover:text-foreground transition-colors">Услуги</button>
            <a href="#concierge" className="hover:text-foreground transition-colors">Сопровождение</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Отзывы</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Координатор клиники на фоне бухты Халонг"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" style={{ width: '65%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" style={{ width: '80%' }} />

        <div className="relative z-10 min-h-[85vh] flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-foreground mb-5 tracking-tight">
              НОВАЯ УЛЫБКА ИЗ ХАЛОНГА:
              <br />
              <span className="text-primary">В 3 РАЗА ДОСТУПНЕЕ</span>
            </h1>

            <p className="text-base text-muted-foreground mb-4 leading-relaxed max-w-md">
              Премиальный сервис, координатор Ульяна и Евгения — всё включено.
            </p>

            {/* Transfer highlight box */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 mb-6 max-w-md shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-base font-bold text-foreground leading-tight">
                  Комфорт с первой минуты: Ваш персональный трансфер
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ваш путь к новой улыбке начинается без забот. Наш профессиональный водитель встретит вас в аэропорту, поможет с багажом и доставит прямо к дверям вашего отеля или апартаментов на комфортабельном автомобиле.
              </p>
            </div>

            {/* Feature icons row */}
            <div className="flex items-center gap-0 mb-6 max-w-md">
              <div className="flex items-center gap-2.5 pr-5">
                <Smile className="w-6 h-6 text-primary shrink-0" />
                <span className="text-xs font-bold text-foreground leading-tight uppercase">
                  ВИНИРЫ И<br />РЕСТАВРАЦИЯ
                </span>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div className="flex items-center gap-2.5 px-5">
                <Sparkles className="w-6 h-6 text-primary shrink-0" />
                <span className="text-xs font-bold text-foreground leading-tight uppercase">
                  ДОСТУПНЫЕ<br />ЦЕНЫ
                </span>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div className="flex items-center gap-2.5 pl-5">
                <Heart className="w-6 h-6 text-primary shrink-0" />
                <span className="text-xs font-bold text-foreground leading-tight uppercase">
                  ТУРИЗМ +<br />ЛЕЧЕНИЕ
                </span>
              </div>
            </div>

            {/* Popular bar */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2.5 mb-6 max-w-md flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-bold text-destructive uppercase tracking-wide">ПОПУЛЯРНО</span>
              <span className="text-sm text-muted-foreground ml-1">— Виниры + отдых в Халонге</span>
            </div>

            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold px-8 py-5 rounded-lg w-fit uppercase tracking-wide"
            >
              УЗНАТЬ ПОДРОБНОСТИ И ЗАБРОНИРОВАТЬ
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-foreground mb-3">
              Услуги и Цены
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Премиальная стоматология мирового уровня по доступным ценам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Veneers */}
            <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center mb-5">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-3">
                  Виниры <span className="text-sm font-normal text-muted-foreground">(Зона улыбки)</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Создание безупречной эстетики зоны улыбки. Тончайшие керамические виниры для естественного результата.
                </p>
                <div className="bg-muted/70 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">от 167 000 000 VND</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-(40%)</span>
                  </div>
                  <p className="text-lg font-bold text-primary">от 100 000 000 VND</p>
                  <p className="text-xs text-muted-foreground">(за зону улыбки)</p>
                </div>
                <p className="text-[11px] text-muted-foreground italic leading-snug">
                  Цена указана с учётом акции 40% для всех от 35 лет.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Crowns */}
            <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center mb-5">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-3">
                  Коронки
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Восстановление функциональности и эстетики зуба. Высокопрочные циркониевые и цельнокерамические коронки.
                </p>
                <div className="bg-muted/70 rounded-lg p-4 mb-4">
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    Рассчитывается индивидуально после консультации со специалистами (Евгенией и Ульяной).
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full gap-2 text-primary border-primary/30 hover:bg-primary/5">
                  <Phone className="w-4 h-4" />
                  Записаться на консультацию
                </Button>
                <p className="text-[11px] text-muted-foreground italic leading-snug mt-3">
                  Цена указана с учётом акции 40% для всех от 35 лет.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Implants */}
            <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center mb-5">
                  <CircleDot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-3">
                  Имплантация
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Полное восстановление утраченных зубов. Установка имплантатов премиум-класса от ведущих мировых производителей.
                </p>
                <div className="bg-muted/70 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">от 20 000 000 VND</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">-(40%)</span>
                  </div>
                  <p className="text-lg font-bold text-primary">от 12 000 000 VND</p>
                  <p className="text-xs text-muted-foreground">(за один имплантат)</p>
                </div>
                <p className="text-[11px] text-muted-foreground italic leading-snug">
                  Цена указана с учётом акции 40% для всех от 35 лет.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Concierge Section */}
      <section id="concierge" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-foreground mb-3">
              Полное VIP-сопровождение вашего тура
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Hotel className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-foreground mb-2">Размещение</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Подбор и помощь с бронированием отеля или апартаментов под ваш бюджет.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Languages className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-foreground mb-2">В клинике</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Персональное ведение в клинике, услуги профессионального переводчика.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Ship className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-foreground mb-2">Досуг <span className="text-sm font-normal text-muted-foreground">(По желанию)</span></h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Подбор и помощь с организацией экскурсий по бухте Халонг и окрестностям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-foreground mb-3">
              Ваши проводники в мир новой улыбки
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-card border-border shadow-sm text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-1">Ульяна</h3>
                <p className="text-sm text-primary font-medium mb-3">Координатор</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Организация лечения, сопровождение на всех этапах, помощь с документами и планированием.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-foreground mb-1">Евгения</h3>
                <p className="text-sm text-primary font-medium mb-3">Координатор</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Консультации по лечению, подбор программы, персональное сопровождение в клинике.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Club 45+ Special Offer */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-2 border-primary/25 rounded-2xl p-8 md:p-10 text-center shadow-sm">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              <Star className="w-4 h-4" />
              СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-foreground mb-3">
              Клуб 45+
            </h2>
            <p className="text-lg font-bold text-primary mb-2">СКИДКА ДО 45%</p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Специальные условия для пациентов старше 45 лет. Скидка распространяется на все виды стоматологических услуг и не суммируется с основной акцией — применяется наибольшая из скидок.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-foreground mb-3">
              Отзывы наших пациентов
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Марина К.", text: "Невероятный сервис! Ульяна встретила нас в аэропорту и организовала всё на высшем уровне. Виниры выглядят потрясающе.", rating: 5 },
              { name: "Алексей Д.", text: "Имплантация прошла безболезненно. Сэкономил более 60% по сравнению с московскими клиниками. Рекомендую!", rating: 5 },
              { name: "Ольга С.", text: "Совместили отдых и лечение. Бухта Халонг — невероятная красота, а зубы теперь идеальные. Спасибо Евгении!", rating: 5 },
            ].map((review, i) => (
              <Card key={i} className="bg-card border-border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{review.text}"</p>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">© Клиника Преображения в Халонге</p>
          <div className="flex items-center gap-4 text-sm opacity-70">
            <a href="#services" className="hover:opacity-100 transition-opacity">Услуги</a>
            <a href="#concierge" className="hover:opacity-100 transition-opacity">Сопровождение</a>
            <a href="#testimonials" className="hover:opacity-100 transition-opacity">Отзывы</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
