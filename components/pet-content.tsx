import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dog, Cat, Heart, Shirt, Moon, AlertCircle, Ruler, Sparkles } from "lucide-react"

export function PetContent() {
  return (
    <section id="conteudo" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Conteúdo para Seu Pet</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Dicas valiosas sobre o uso consciente de roupas e acessórios para o bem-estar do seu melhor amigo
          </p>
        </div>

        <Tabs defaultValue="caes" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="caes" className="gap-2">
              <Dog className="h-4 w-4" />
              Cães
            </TabsTrigger>
            <TabsTrigger value="gatos" className="gap-2">
              <Cat className="h-4 w-4" />
              Gatos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="caes" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shirt className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Uso Consciente de Roupas</CardTitle>
                  <CardDescription>Como e quando usar roupinhas no seu cão</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Quando usar:</strong> Em dias frios, chuva ou para proteção solar em raças de pelo curto e
                    pele sensível.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Tamanho correto:</strong> A roupa deve permitir movimento livre. Verifique se não está
                    apertada no pescoço, peito ou patas.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Tempo de uso:</strong> Evite deixar roupas por períodos prolongados. Retire durante
                    brincadeiras intensas para evitar superaquecimento.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Observação:</strong> Fique atento a sinais de desconforto como coçar excessivamente ou
                    tentar remover a peça.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Passeios Seguros e Confortáveis</CardTitle>
                  <CardDescription>Guia completo sobre coleiras e peitoral</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Ajuste ideal:</strong> Deve caber dois dedos entre a coleira e o pescoço do cão. Nem
                    apertada demais, nem frouxa.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Peitoral vs Coleira:</strong> Para cães que puxam muito, considere usar peitoral para
                    proteger a traqueia.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Quando remover:</strong> Sempre retire a coleira quando o cão estiver em casa, especialmente
                    durante o sono e brincadeiras.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Manutenção:</strong> Verifique regularmente o estado da coleira e ajuste conforme o
                    crescimento do pet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Moon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Conforto para Dormir</CardTitle>
                  <CardDescription>Importância de retirar acessórios na hora do sono</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Regra geral:</strong> Retire coleiras, bandanas e roupas antes do seu cão dormir para
                    garantir descanso confortável e seguro.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Riscos:</strong> Acessórios podem enroscar, causar desconforto ou dificultar a regulação da
                    temperatura corporal durante o sono.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Exceções:</strong> Algumas roupas térmicas leves e específicas para sono podem ser usadas em
                    climas muito frios, desde que sejam confortáveis.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Cama adequada:</strong> Invista em uma cama confortável e apropriada ao tamanho do seu cão
                    para um sono reparador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Escolhendo Acessórios</CardTitle>
                  <CardDescription>Priorize conforto e qualidade</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Materiais:</strong> Prefira tecidos naturais, respiráveis e hipoalergênicos que não irritem
                    a pele do pet.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Costuras:</strong> Verifique se as costuras são bem-feitas e não causam atrito ou
                    desconforto na pele.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Funcionalidade:</strong> Escolha peças que sejam fáceis de colocar e remover, respeitando o
                    bem-estar do animal.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Estilo com consciência:</strong> Beleza e conforto podem andar juntos. Priorize o bem-estar
                    do seu pet acima da estética.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Como Tirar Medidas</CardTitle>
                  <CardDescription>Guia para escolher o tamanho perfeito</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Circunferência do pescoço:</strong> Meça na base do pescoço onde normalmente fica a coleira,
                    deixando espaço para dois dedos.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Circunferência do peito:</strong> Meça a parte mais larga do peito, logo atrás das patas
                    dianteiras.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Comprimento do dorso:</strong> Da base do pescoço até o início da cauda. Esta é a medida
                    mais importante para roupas.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Dica importante:</strong> Entre dois tamanhos, sempre escolha o maior para garantir conforto
                    e mobilidade.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Cuidados com as Peças</CardTitle>
                  <CardDescription>Mantendo a qualidade dos produtos autorais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Lavagem:</strong> Lave à mão ou em ciclo delicado com água fria. Evite máquina de secar para
                    preservar tecidos e estampas.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Secagem:</strong> Seque à sombra em superfície plana. Nunca torça as peças para não
                    deformar.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Armazenamento:</strong> Guarde em local seco e arejado. Dobre cuidadosamente para evitar
                    vincos permanentes.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Produtos autorais:</strong> Peças feitas à mão merecem cuidado especial. Siga sempre as
                    instruções da etiqueta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gatos" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shirt className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Roupas para Gatos</CardTitle>
                  <CardDescription>Cuidados especiais com felinos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Sensibilidade:</strong> Gatos são mais sensíveis a roupas que cães. Use apenas quando
                    realmente necessário (frio extremo, pós-cirurgia).
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Adaptação gradual:</strong> Introduza roupas aos poucos, com sessões curtas e recompensas
                    positivas.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Mobilidade:</strong> A roupa não deve restringir movimentos naturais como pular, esticar ou
                    se limpar.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Supervisão:</strong> Nunca deixe um gato sozinho com roupas, especialmente nas primeiras
                    vezes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Passeios Seguros e Confortáveis</CardTitle>
                  <CardDescription>Coleiras e peitorais para felinos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Peitoral é essencial:</strong> Para gatos, sempre use peitoral tipo H ou colete, nunca
                    apenas coleira no pescoço.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Mecanismo de segurança:</strong> Prefira coleiras com fecho de segurança que se solta sob
                    pressão para evitar acidentes.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Identificação:</strong> Use plaquinha de identificação, mas remova a coleira quando o gato
                    estiver em casa.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Treinamento:</strong> Acostume o gato gradualmente ao uso de peitoral antes de sair para
                    passeios.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Moon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sono Tranquilo</CardTitle>
                  <CardDescription>Garantindo descanso de qualidade</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Sem acessórios:</strong> Gatos devem dormir completamente livres de coleiras, bandanas ou
                    roupas para segurança e conforto.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Locais de descanso:</strong> Ofereça múltiplos locais confortáveis em diferentes alturas e
                    temperaturas.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Temperatura:</strong> Gatos regulam temperatura através da posição. Deixe-os escolher locais
                    mais quentes ou frescos.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Rotina de sono:</strong> Gatos dormem 12-16 horas por dia. Respeite esse ciclo natural sem
                    interrupções.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Acessórios Seguros</CardTitle>
                  <CardDescription>Escolhas conscientes para felinos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Bandanas leves:</strong> Prefira bandanas que não apertem e possam ser facilmente removidas
                    pelo gato se necessário.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Materiais suaves:</strong> Tecidos macios e naturais que não irritem a pele sensível dos
                    felinos.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Tempo limitado:</strong> Use acessórios apenas para fotos ou ocasiões especiais, sempre com
                    supervisão.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Respeite os limites:</strong> Se o gato demonstrar estresse ou desconforto, remova
                    imediatamente o acessório.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Como Tirar Medidas</CardTitle>
                  <CardDescription>Tamanho ideal para seu felino</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Paciência é essencial:</strong> Tire medidas quando o gato estiver calmo e relaxado. Use
                    petiscos como recompensa.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Pescoço:</strong> Meça na base do pescoço com folga generosa. Gatos precisam de mais espaço
                    que cães.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Peito:</strong> Meça atrás das patas dianteiras na parte mais larga, permitindo movimento
                    livre.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Comprimento:</strong> Da base do pescoço até onde começa a cauda. Peças muito longas podem
                    incomodar.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Cuidados com as Peças</CardTitle>
                  <CardDescription>Higiene e conservação dos acessórios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Limpeza frequente:</strong> Gatos são muito higiênicos. Lave bandanas e coleiras
                    regularmente para evitar odores.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Produtos suaves:</strong> Use sabão neutro ou específico para pets. Evite amaciantes que
                    podem irritar a pele.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Inspeção regular:</strong> Verifique costuras, fechos e elásticos. Gatos podem puxar e
                    danificar peças.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Rotação de peças:</strong> Tenha mais de uma opção para alternar enquanto uma está na
                    lavagem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
