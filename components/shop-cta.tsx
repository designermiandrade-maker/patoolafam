import { Button } from "@/components/ui/button"
import { ShoppingBag, Sparkles, Shield, Heart } from "lucide-react"

export function ShopCTA() {
  return (
    <section id="loja" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Feito com Amor para Quem Você Ama
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Peças que Respeitam Quem Seu Pet Realmente É
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Porque seu pet merece conforto, segurança e carinho em cada detalhe. Criamos roupas e acessórios que
              celebram a personalidade única dele, sempre priorizando o bem-estar acima de tudo.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm font-medium">Design Autoral</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <p className="text-sm font-medium">Qualidade Premium</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm font-medium">Feito com Amor</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base gap-2 h-14 px-8">
                <a href="https://patoola.com.br" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="h-5 w-5" />
                  Visitar a Loja Patoola
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://patoola.com.br/ofertas-e-kits/" target="_blank" rel="noopener noreferrer">
                  Ver Ofertas & Kits
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Visite patoola.com.br e descubra peças únicas para seu pet</p>
          </div>
        </div>

        <div className="space-y-8 mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center">Explore Nossas Categorias</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://patoola.com.br/collections/roupinhas"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src="/stylish-colorful-pet-dog-clothes-on-display-with-o.jpg"
                alt="Roupinhas para Pets"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Roupinhas</h3>
              </div>
            </a>

            <a
              href="https://patoola.com.br/collections/bandanas-e-lencos"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src="/cute-pet-dog-wearing-colorful-bandana-with-orange-.jpg"
                alt="Bandanas & Lenços"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Bandanas & Lenços</h3>
              </div>
            </a>

            <a
              href="https://patoola.com.br/collections/acessorios-de-estilo"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src="/stylish-pet-accessories-collection-with-bows-ties-.jpg"
                alt="Acessórios de Estilo"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Acessórios de Estilo</h3>
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://patoola.com.br/passeio/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src="/dog-walking-with-stylish-collar-and-leash-in-park-.jpg"
                alt="Coleiras para Passeio"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Coleiras para Passeio</h3>
              </div>
            </a>

            <a
              href="https://patoola.com.br/collections/camas-e-conforto"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src="/cozy-pet-bed-with-comfortable-cushions-in-orange-a.jpg"
                alt="Camas e Conforto"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Camas e Conforto</h3>
              </div>
            </a>

            <a
              href="https://patoola.com.br/ofertas-e-kits/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src="/pets-carrying-shopping-bags-with-orange-teal.jpg"
                alt="Ofertas & Kits"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Ofertas & Kits</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
