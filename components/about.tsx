import { Heart, Shield, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Bem-vindo à PatoolaFam</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Mais do que clientes, somos uma comunidade. Um lugar onde tutores que amam seus pets como família se
            encontram, se reconhecem e têm seus sentimentos validados. Aqui, você não está sozinho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 text-center space-y-4 border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Seus Sentimentos São Válidos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aqui você pode ser mãe, pai, tutor apaixonado. Não julgamos, acolhemos. Seu amor pelo seu pet é real e
              merece respeito.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center space-y-4 border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Pets São Seres com Emoções</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reconhecemos que seu pet sente, pensa e tem personalidade própria. Não é objeto, não é inferior. É
              família.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center space-y-4 border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Comunidade que Entende</h3>
            <p className="text-muted-foreground leading-relaxed">
              Somos tutores que se reconhecem. Que entendem a alegria, a preocupação, o amor incondicional. Você faz
              parte dessa família.
            </p>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <img
                src="/handmade-pet-clothes-and-accessories-with-orange-a.jpg"
                alt="Roupas e acessórios Patoola"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Missão da PatoolaFam</h3>
              <p className="text-muted-foreground leading-relaxed">
                Criar um espaço onde tutores apaixonados encontram acolhimento e produtos que respeitam o vínculo
                profundo com seus pets. Onde você pode ser quem realmente é: alguém que ama incondicionalmente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada peça que criamos carrega essa filosofia: respeito ao seu pet como ser com emoções, cuidado com o
                bem-estar dele, e celebração do amor que vocês compartilham. Porque na PatoolaFam, família é família -
                independente de quantas patas tenha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
