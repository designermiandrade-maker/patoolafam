import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Patoola</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Design que abraça seu pet e emociona você.</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/patollastore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#inicio" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#conteudo" className="hover:text-primary transition-colors">
                  Conteúdo
                </Link>
              </li>
              <li>
                <a
                  href="https://patoola.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Loja
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://patoola.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Roupas
                </a>
              </li>
              <li>
                <a
                  href="https://patoola.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Acessórios
                </a>
              </li>
              <li>
                <a
                  href="https://patoola.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Bandanas
                </a>
              </li>
              <li>
                <a
                  href="https://patoola.com.br/passeio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Coleiras para Passeio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                contato@patoola.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                (11) 9999-9999
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Patoola. Todos os direitos reservados. Feito com ❤️ para pets e seus tutores.</p>
        </div>
      </div>
    </footer>
  )
}
