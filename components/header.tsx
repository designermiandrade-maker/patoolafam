"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-patoola.png" alt="Patoola" width={120} height={40} className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary">Fam</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#conteudo" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Conteúdo
            </Link>
            <Link
              href="/carteira-vacina"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Cartão de Saúde
            </Link>
            <Button asChild className="gap-2">
              <a href="https://patoola.com.br" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="h-4 w-4" />
                Ir para Loja
              </a>
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <Link href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#conteudo" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Conteúdo
            </Link>
            <Link
              href="/carteira-vacina"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Cartão de Saúde
            </Link>
            <Button asChild className="gap-2 w-full">
              <a href="https://patoola.com.br" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="h-4 w-4" />
                Ir para Loja
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
