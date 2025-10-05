"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export function Hero() {
  const [showStory, setShowStory] = useState(false)

  const handleGoogleLogin = () => {
    console.log("[v0] Google login initiated")
    alert("Funcionalidade de login com Google será implementada em breve!")
  }

  return (
    <>
      <section id="inicio" className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  Manifesto <span className="text-primary">PatoolaFam</span>
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>A gente acredita que o amor pelos bichinhos é uma das formas mais puras de existir.</p>
                  <p>
                    É aquele amor que não precisa de palavras — basta um olhar, um rabinho balançando, um respiro de
                    quem confia de olhos fechados.
                  </p>
                  <p>A PatoolaFam nasceu desse sentimento.</p>
                  <p>
                    De quem já viveu a despedida de uma amiga de quatro patas, mas também o encanto de um novo encontro.
                  </p>
                  <p>
                    De quem entende que cada pet carrega uma história única, e que amar é cuidar, respeitar e celebrar
                    cada momento juntos.
                  </p>
                  <p>Aqui, acreditamos que família é todo lugar onde há afeto.</p>
                  <p>
                    E que o cuidado com os nossos bichinhos é um gesto que se espalha — inspirando gentileza, empatia e
                    alegria por onde passa.
                  </p>
                  <p>
                    Somos uma comunidade feita de corações que batem no mesmo ritmo: o ritmo leve de quem acredita que
                    amor de pet é amor de verdade.
                  </p>
                  <p>
                    Se você também sente que o seu bichinho é parte da sua história, então você já é parte da
                    PatoolaFam.
                  </p>
                  <p className="font-semibold text-primary">Bem-vindo à nossa corrente de amor.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" onClick={handleGoogleLogin}>
                  Quero fazer parte
                </Button>
                <Button
                  size="lg"
                  className="text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => setShowStory(true)}
                >
                  Conhecer a história
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <img
                src="/happy-dog-and-cat-together-playing-with-orange-and.jpg"
                alt="Cão e gato felizes juntos"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showStory} onOpenChange={setShowStory}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">A História da Patoola</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A Patoola nasceu de uma história de amor entre duas cachorrinhas que nunca se encontraram, mas que se
              completam no coração de quem as amou.
            </p>
            <p>
              A Lua, uma labradora doce e tranquila, viveu muitos anos cercada de carinho e partiu em paz, deixando um
              espaço imenso de saudade e gratidão.
            </p>
            <p>
              A Nina, uma pequena maltês de olhar curioso, chegou pouco tempo depois — como quem vem lembrando que o
              amor pelos bichinhos não termina, apenas muda de forma.
            </p>
            <p>
              Foi desse reencontro entre memória e recomeço que a Patoola ganhou vida: uma marca que transforma o amor
              pelos pets em conforto, beleza e cuidado.
            </p>
            <p className="font-medium text-foreground">
              A PatoolaFam nasceu para expandir esse sentimento — uma comunidade feita para quem entende que nossos pets
              são família de verdade.
            </p>
            <p>
              Aqui, cada história de amizade, cada latido e cada ronronar se tornam parte de uma corrente de amor que
              cresce a cada novo coração que se junta a nós.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
