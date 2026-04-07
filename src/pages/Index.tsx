import heroImage from "@/assets/hero-coordinator.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-['Open_Sans',sans-serif]">
      {/* Full background image */}
      <img
        src={heroImage}
        alt="Координатор клиники на фоне бухты Халонг"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />

      {/* Left overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" style={{ width: '62%' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" style={{ width: '75%' }} />

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-8 md:px-12 pt-5 pb-2">
          <span className="text-sm md:text-base text-muted-foreground tracking-wide">
            Главная{" "}
            <span className="mx-1.5 text-muted-foreground/50">•</span> Услуги{" "}
            <span className="mx-1.5 text-muted-foreground/50">•</span> Направления{" "}
            <span className="mx-1.5 text-muted-foreground/50">•</span> Бронирование
          </span>
        </nav>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 max-w-[55%] pb-16">
          {/* Headline */}
          <h1 className="text-3xl md:text-[2.7rem] lg:text-5xl font-extrabold leading-[1.15] text-foreground mb-5 tracking-tight">
            НОВАЯ УЛЫБКА ИЗ ХАЛОНГА:
            <br />
            В 3 РАЗА ДОСТУПНЕЕ,
            <br />
            ЧЕМ В РОССИИ.
          </h1>

          {/* Sub-headline */}
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-md leading-relaxed">
            Наш консультант Елена встретит Вас по прилету и станет Вашим личным проводником в мир новой улыбки и комфортного отдыха.
          </p>

          {/* Feature icons row */}
          <div className="flex items-center gap-0 mb-7 max-w-md">
            {/* Tooth icon + text */}
            <div className="flex items-center gap-2.5 pr-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 5 8 4 9.5C3 11 3 13 4 14.5C5 16 5.5 18 6 19.5C6.5 21 7.5 22 9 22C10 22 10.5 21 11 20C11.5 19 11.5 18 12 18C12.5 18 12.5 19 13 20C13.5 21 14 22 15 22C16.5 22 17.5 21 18 19.5C18.5 18 19 16 20 14.5C21 13 21 11 20 9.5C19 8 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="text-xs font-bold text-foreground leading-tight uppercase">
                ВИНИРЫ И<br />РЕСТАВРАЦИЯ
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-border shrink-0" />

            {/* Price icon + text */}
            <div className="flex items-center gap-2.5 px-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className="text-xs font-bold text-foreground leading-tight uppercase">
                ДОСТУПНЫЕ<br />ЦЕНЫ
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-border shrink-0" />

            {/* Tourism icon + text */}
            <div className="flex items-center gap-2.5 pl-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 5 8 4 9.5C3 11 3 13 4 14.5C5 16 5.5 18 6 19.5C6.5 21 7.5 22 9 22C10 22 10.5 21 11 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M17 8l4 4-4 4M21 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-bold text-foreground leading-tight uppercase">
                ТУРИЗМ +<br />ЛЕЧЕНИЕ
              </span>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="rounded-lg border-l-4 border-accent bg-accent/10 px-5 py-3.5 mb-7 max-w-md">
            <p className="text-lg font-extrabold leading-tight">
              <span className="text-destructive">АКЦИЯ!</span>{" "}
              <span className="text-accent-foreground">СКИДКА ДО 45%</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Для пациентов старше 45 лет.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold px-8 py-5 rounded-lg w-fit uppercase tracking-wide"
          >
            УЗНАТЬ ПОДРОБНОСТИ И ЗАБРОНИРОВАТЬ
          </Button>
        </div>

        {/* Footer */}
        <div className="px-8 md:px-12 pb-5">
          <p className="text-xs text-muted-foreground">
            © Клиника Преображения в Халонге
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
