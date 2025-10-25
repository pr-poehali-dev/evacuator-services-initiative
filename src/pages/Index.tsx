import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    vehicleType: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Наш оператор свяжется с вами в течение 2 минут",
    });
    setFormData({ name: '', phone: '', address: '', vehicleType: '', details: '' });
  };

  const services = [
    {
      icon: 'Car',
      title: 'Легковые автомобили',
      description: 'Быстрая эвакуация любых легковых авто. Работаем аккуратно и профессионально.',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Truck',
      title: 'Грузовые автомобили',
      description: 'Эвакуация грузовиков и коммерческого транспорта любой сложности.',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Bike',
      title: 'Мотоциклы',
      description: 'Деликатная транспортировка мотоциклов и квадроциклов с фиксацией.',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Cog',
      title: 'Спецтехника',
      description: 'Перевозка экскаваторов, погрузчиков и другой спецтехники.',
      price: 'от 8000 ₽'
    }
  ];

  const advantages = [
    { icon: 'Clock', title: 'Приезжаем за 20 минут', description: 'Оперативный выезд в любую точку города' },
    { icon: 'Shield', title: 'Полное страхование', description: 'Ваш автомобиль застрахован на время транспортировки' },
    { icon: 'Phone', title: 'Круглосуточно', description: 'Работаем 24/7 без выходных и праздников' },
    { icon: 'BadgeCheck', title: 'Опытные водители', description: 'Профессионалы с опытом работы от 5 лет' }
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(26, 31, 44, 0.95), rgba(26, 31, 44, 0.85)), url('https://cdn.poehali.dev/projects/dc4b0596-d722-4f28-ae64-91c980f5b5c2/files/59c80ec2-6810-43c8-9635-31e454e58eea.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="Clock" size={18} />
              <span className="text-sm font-semibold">Работаем круглосуточно</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Служба эвакуации автомобилей
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Быстро, надёжно и профессионально. Приедем за 20 минут в любую точку города.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 h-auto"
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Вызвать эвакуатор
              </Button>
              <a href="tel:+79999999999">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white text-lg px-8 py-6 h-auto w-full sm:w-auto"
                >+7 (911) 848-35-67</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по эвакуации транспорта любой категории
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale border-2 hover:border-secondary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Срочный вызов эвакуатора</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Заполните форму, и наш оператор свяжется с вами в течение 2 минут
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="MapPin" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Работаем по всему городу</h4>
                      <p className="text-sm text-muted-foreground">Выезжаем в любой район без исключений</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Headphones" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Поддержка 24/7</h4>
                      <p className="text-sm text-muted-foreground">Операторы на связи круглосуточно</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="CreditCard" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Любая форма оплаты</h4>
                      <p className="text-sm text-muted-foreground">Наличные, карта, безналичный расчёт</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/dc4b0596-d722-4f28-ae64-91c980f5b5c2/files/59bc7d4d-5eb2-4e3a-8c08-04ecaba07d09.jpg"
                    alt="Эвакуатор"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <Card className="animate-scale-in border-2">
                <CardHeader>
                  <CardTitle className="text-2xl"></CardTitle>
                  <CardDescription>Все поля обязательны для заполнения</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name"></Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone"></Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 999-99-99"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address"></Label>
                      <Input
                        id="address"
                        placeholder="ул. Ленина, 1"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleType"></Label>
                      <Select 
                        value={formData.vehicleType}
                        onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Легковой автомобиль</SelectItem>
                          <SelectItem value="suv">Внедорожник</SelectItem>
                          <SelectItem value="truck">Грузовой автомобиль</SelectItem>
                          <SelectItem value="motorcycle">Мотоцикл</SelectItem>
                          <SelectItem value="special">Спецтехника</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="details">Дополнительная информация</Label>
                      <Textarea
                        id="details"
                        placeholder="Опишите ситуацию: повреждения, особые условия и т.д."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6 h-auto"></Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Служба эвакуации</h3>
              <p className="text-white/80">
                Профессиональная эвакуация автомобилей в любое время суток
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 999-99-99
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@evacuator.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="text-white/80">Круглосуточно, без выходных</p>
              <p className="text-white/80 mt-2">Выезд в течение 20 минут</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Служба эвакуации. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;