import heroImage from "@/assets/hero-coordinator.jpg";
import { Button } from "@/components/ui/button";
import { Smile, Palette, Plane } from "lucide-react";

const navItems = ["Главная", "Услуги", "Направления", "Бронирование"];

const features = [
  { icon: Smile, label: "ВИНИРЫ И РЕСТАВРАЦИЯ" },
  { icon: Palette, label: "ДОСТУПНЫЕ ЦЕНЫ" },
  { icon: Plane, label: "ТУРИЗМ + ЛЕЧЕНИЕ" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Open_Sans',sans-serif]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 md:px-12">
        <span className="text-lg font-bold text-primary-foreground drop-shadow-md">
          🦷 DentalHaLong
        </span>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-semibold text-primary-foreground/90 hover:text-accent transition-colors drop-shadow-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Координатор клиники на фоне бухты Халонг"
            className="w-full h-full object-cover"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207,80%,15%,0.88)] via-[hsl(207,80%,20%,0.72)] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl px-6 md:px-16 py-32">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-primary-foreground mb-6 tracking-tight">
            НОВАЯ УЛЫБКА ИЗ ХАЛОНГА:
            <br />
            <span className="text-accent">В 3 РАЗА ДОСТУПНЕЕ,</span>
            <br />
            ЧЕМ В РОССИИ.
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-lg leading-relaxed">
            Ваш консультант Елена встретит вас в аэропорту и покажет лучшие
            места Вьетнама.
          </p>

          {/* Feature Icons */}
          <div className="flex gap-8 mb-10">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 max-w-[120px]">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-xs font-bold text-primary-foreground/90 text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Promo Banner */}
          <div className="rounded-xl bg-secondary/20 backdrop-blur-sm border border-accent/30 p-5 mb-8 max-w-md">
            <p className="text-xl font-extrabold text-accent mb-1">
              🔥 АКЦИЯ! СКИДКА ДО 45%
            </p>
            <p className="text-sm text-primary-foreground/80">
              Для пациентов старше 45 лет.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold px-8 py-6 rounded-xl shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02]"
          >
            УЗНАТЬ ПОДРОБНОСТИ И ЗАБРОНИРОВАТЬ
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-4 text-center">
        <p className="text-xs text-muted-foreground">
          © Клиника Преображения в Халонге
        </p>
      </footer>
    </div>
  );
};

export default Index;
