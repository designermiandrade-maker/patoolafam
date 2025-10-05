"use client"

import { useState, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  Trash2,
  Calendar,
  Syringe,
  Scale,
  Pill,
  Stethoscope,
  Utensils,
  Sparkles,
  Phone,
  Heart,
  Download,
} from "lucide-react"

interface VaccineRecord {
  id: string
  name: string
  date: string
  nextDate: string
  veterinarian: string
  batch?: string
}

interface DewormingRecord {
  id: string
  product: string
  date: string
  nextDate: string
  dosage: string
  type: string
}

interface WeightRecord {
  id: string
  weight: string
  date: string
  notes: string
}

interface ConsultationRecord {
  id: string
  date: string
  veterinarian: string
  reason: string
  diagnosis: string
  treatment: string
}

interface HygieneRecord {
  id: string
  date: string
  type: string
  notes: string
}

interface FeedingRecord {
  id: string
  date: string
  food: string
  amount: string
  frequency: string
}

interface EmergencyContact {
  id: string
  name: string
  phone: string
  type: string
  address: string
}

export default function VaccineCardPage() {
  const printRef = useRef<HTMLDivElement>(null)
  const [ownerName, setOwnerName] = useState("")
  const [ownerPhone, setOwnerPhone] = useState("")
  const [ownerEmail, setOwnerEmail] = useState("")

  const [petName, setPetName] = useState("")
  const [petSpecies, setPetSpecies] = useState("")
  const [petBreed, setPetBreed] = useState("")
  const [petBirthDate, setPetBirthDate] = useState("")
  const [petColor, setPetColor] = useState("")
  const [petGender, setPetGender] = useState("")
  const [petMicrochip, setPetMicrochip] = useState("")

  const [vaccines, setVaccines] = useState<VaccineRecord[]>([])
  const [dewormings, setDewormings] = useState<DewormingRecord[]>([])
  const [weights, setWeights] = useState<WeightRecord[]>([])
  const [consultations, setConsultations] = useState<ConsultationRecord[]>([])
  const [hygiene, setHygiene] = useState<HygieneRecord[]>([])
  const [feeding, setFeeding] = useState<FeedingRecord[]>([])
  const [contacts, setContacts] = useState<EmergencyContact[]>([])
  const [clinicalNotes, setClinicalNotes] = useState("")

  const addVaccine = () => {
    setVaccines([
      ...vaccines,
      {
        id: Date.now().toString(),
        name: "",
        date: "",
        nextDate: "",
        veterinarian: "",
      },
    ])
  }

  const removeVaccine = (id: string) => {
    setVaccines(vaccines.filter((v) => v.id !== id))
  }

  const updateVaccine = (id: string, field: keyof VaccineRecord, value: string) => {
    setVaccines(vaccines.map((v) => (v.id === id ? { ...v, [field]: value } : v)))
  }

  const addDeworming = () => {
    setDewormings([
      ...dewormings,
      {
        id: Date.now().toString(),
        product: "",
        date: "",
        nextDate: "",
        dosage: "",
        type: "",
      },
    ])
  }

  const removeDeworming = (id: string) => {
    setDewormings(dewormings.filter((d) => d.id !== id))
  }

  const updateDeworming = (id: string, field: keyof DewormingRecord, value: string) => {
    setDewormings(dewormings.map((d) => (d.id === id ? { ...d, [field]: value } : d)))
  }

  const addWeight = () => {
    setWeights([
      ...weights,
      {
        id: Date.now().toString(),
        weight: "",
        date: "",
        notes: "",
      },
    ])
  }

  const removeWeight = (id: string) => {
    setWeights(weights.filter((w) => w.id !== id))
  }

  const updateWeight = (id: string, field: keyof WeightRecord, value: string) => {
    setWeights(weights.map((w) => (w.id === id ? { ...w, [field]: value } : w)))
  }

  const addConsultation = () => {
    setConsultations([
      ...consultations,
      {
        id: Date.now().toString(),
        date: "",
        veterinarian: "",
        reason: "",
        diagnosis: "",
        treatment: "",
      },
    ])
  }

  const removeConsultation = (id: string) => {
    setConsultations(consultations.filter((c) => c.id !== id))
  }

  const updateConsultation = (id: string, field: keyof ConsultationRecord, value: string) => {
    setConsultations(consultations.map((c) => (c.id === id ? { ...c, [field]: value } : c)))
  }

  const addHygiene = () => {
    setHygiene([
      ...hygiene,
      {
        id: Date.now().toString(),
        date: "",
        type: "",
        notes: "",
      },
    ])
  }

  const removeHygiene = (id: string) => {
    setHygiene(hygiene.filter((h) => h.id !== id))
  }

  const updateHygiene = (id: string, field: keyof HygieneRecord, value: string) => {
    setHygiene(hygiene.map((h) => (h.id === id ? { ...h, [field]: value } : h)))
  }

  const addFeeding = () => {
    setFeeding([
      ...feeding,
      {
        id: Date.now().toString(),
        date: "",
        food: "",
        amount: "",
        frequency: "",
      },
    ])
  }

  const removeFeeding = (id: string) => {
    setFeeding(feeding.filter((f) => f.id !== id))
  }

  const updateFeeding = (id: string, field: keyof FeedingRecord, value: string) => {
    setFeeding(feeding.map((f) => (f.id === id ? { ...f, [field]: value } : f)))
  }

  const addContact = () => {
    setContacts([
      ...contacts,
      {
        id: Date.now().toString(),
        name: "",
        phone: "",
        type: "",
        address: "",
      },
    ])
  }

  const removeContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id))
  }

  const updateContact = (id: string, field: keyof EmergencyContact, value: string) => {
    setContacts(contacts.map((c) => (c.id === id ? { ...c, [field]: value } : c)))
  }

  const handleExportPDF = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex justify-center mb-8">
            <img src="/logo-patoolafam.jpg" alt="PatoolaFam" className="h-16 md:h-20 object-contain" />
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Cartão de Saúde Completo Pet PatoolaFam</h1>
            </div>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              Cuide da saúde do seu pet com todo o carinho e organização que ele merece. O Cartão de Saúde Completo
              PatoolaFam foi criado para que tutores acompanhem, em um só lugar, todo o histórico de cuidados do seu
              bichinho — desde as vacinas até os banhos, consultas, vermífugos e peso.
            </p>
            <div className="mt-6 print:hidden">
              <Button onClick={handleExportPDF} size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Compartilhar em PDF
              </Button>
            </div>
          </div>

          <div ref={printRef}>
            <div className="hidden print:flex justify-center mb-6">
              <img src="/logo-patoolafam.jpg" alt="PatoolaFam" className="h-16 object-contain" />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Identificação do Pet e Tutor
                </CardTitle>
                <CardDescription>Dados completos para identificação e contato</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Informações do Tutor</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Nome do Tutor</Label>
                      <Input
                        id="ownerName"
                        placeholder="Seu nome completo"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ownerPhone">Telefone</Label>
                      <Input
                        id="ownerPhone"
                        placeholder="(00) 00000-0000"
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ownerEmail">E-mail</Label>
                      <Input
                        id="ownerEmail"
                        type="email"
                        placeholder="seu@email.com"
                        value={ownerEmail}
                        onChange={(e) => setOwnerEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-primary">Informações do Pet</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="petName">Nome do Pet</Label>
                      <Input
                        id="petName"
                        placeholder="Ex: Rex, Mimi"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petSpecies">Espécie</Label>
                      <Input
                        id="petSpecies"
                        placeholder="Ex: Cão, Gato"
                        value={petSpecies}
                        onChange={(e) => setPetSpecies(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petBreed">Raça</Label>
                      <Input
                        id="petBreed"
                        placeholder="Ex: Labrador, Persa"
                        value={petBreed}
                        onChange={(e) => setPetBreed(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petBirthDate">Data de Nascimento</Label>
                      <Input
                        id="petBirthDate"
                        type="date"
                        value={petBirthDate}
                        onChange={(e) => setPetBirthDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petGender">Sexo</Label>
                      <Input
                        id="petGender"
                        placeholder="Macho/Fêmea"
                        value={petGender}
                        onChange={(e) => setPetGender(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petColor">Cor/Pelagem</Label>
                      <Input
                        id="petColor"
                        placeholder="Ex: Caramelo, Preto"
                        value={petColor}
                        onChange={(e) => setPetColor(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2 lg:col-span-3">
                      <Label htmlFor="petMicrochip">Número do Microchip (se houver)</Label>
                      <Input
                        id="petMicrochip"
                        placeholder="Número de identificação"
                        value={petMicrochip}
                        onChange={(e) => setPetMicrochip(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="vaccines" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-8 gap-2 print:hidden">
                <TabsTrigger value="vaccines" className="gap-2">
                  <Syringe className="h-4 w-4" />
                  <span className="hidden sm:inline">Vacinas</span>
                </TabsTrigger>
                <TabsTrigger value="deworming" className="gap-2">
                  <Pill className="h-4 w-4" />
                  <span className="hidden sm:inline">Vermífugos</span>
                </TabsTrigger>
                <TabsTrigger value="consultations" className="gap-2">
                  <Stethoscope className="h-4 w-4" />
                  <span className="hidden sm:inline">Consultas</span>
                </TabsTrigger>
                <TabsTrigger value="weight" className="gap-2">
                  <Scale className="h-4 w-4" />
                  <span className="hidden sm:inline">Peso</span>
                </TabsTrigger>
                <TabsTrigger value="feeding" className="gap-2">
                  <Utensils className="h-4 w-4" />
                  <span className="hidden sm:inline">Alimentação</span>
                </TabsTrigger>
                <TabsTrigger value="hygiene" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="hidden sm:inline">Higiene</span>
                </TabsTrigger>
                <TabsTrigger value="contacts" className="gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">Contatos</span>
                </TabsTrigger>
                <TabsTrigger value="notes" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Histórico</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="vaccines" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Vacinação Completa</CardTitle>
                        <CardDescription>V10, raiva, giárdia, gripe e outras vacinas</CardDescription>
                      </div>
                      <Button onClick={addVaccine} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {vaccines.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhuma vacina registrada. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      vaccines.map((vaccine) => (
                        <div key={vaccine.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Vacina</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeVaccine(vaccine.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <Label>Nome da Vacina</Label>
                              <Input
                                placeholder="Ex: V10, Antirrábica, Giárdia"
                                value={vaccine.name}
                                onChange={(e) => updateVaccine(vaccine.id, "name", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Data de Aplicação</Label>
                              <Input
                                type="date"
                                value={vaccine.date}
                                onChange={(e) => updateVaccine(vaccine.id, "date", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Próxima Dose</Label>
                              <Input
                                type="date"
                                value={vaccine.nextDate}
                                onChange={(e) => updateVaccine(vaccine.id, "nextDate", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Veterinário</Label>
                              <Input
                                placeholder="Nome do veterinário"
                                value={vaccine.veterinarian}
                                onChange={(e) => updateVaccine(vaccine.id, "veterinarian", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                              <Label>Lote/Batch (opcional)</Label>
                              <Input
                                placeholder="Número do lote"
                                value={vaccine.batch || ""}
                                onChange={(e) => updateVaccine(vaccine.id, "batch", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deworming" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Vermifugação e Controle de Parasitas</CardTitle>
                        <CardDescription>Vermífugos, antipulgas e carrapatos</CardDescription>
                      </div>
                      <Button onClick={addDeworming} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {dewormings.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum registro. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      dewormings.map((deworming) => (
                        <div key={deworming.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Tratamento</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDeworming(deworming.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <Label>Tipo</Label>
                              <Input
                                placeholder="Vermífugo/Antipulgas/Carrapato"
                                value={deworming.type}
                                onChange={(e) => updateDeworming(deworming.id, "type", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Produto</Label>
                              <Input
                                placeholder="Nome do produto"
                                value={deworming.product}
                                onChange={(e) => updateDeworming(deworming.id, "product", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Dosagem</Label>
                              <Input
                                placeholder="Ex: 1 comprimido"
                                value={deworming.dosage}
                                onChange={(e) => updateDeworming(deworming.id, "dosage", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Data de Aplicação</Label>
                              <Input
                                type="date"
                                value={deworming.date}
                                onChange={(e) => updateDeworming(deworming.id, "date", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                              <Label>Próxima Aplicação</Label>
                              <Input
                                type="date"
                                value={deworming.nextDate}
                                onChange={(e) => updateDeworming(deworming.id, "nextDate", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="consultations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Consultas, Exames e Check-ups</CardTitle>
                        <CardDescription>Histórico completo de atendimentos veterinários</CardDescription>
                      </div>
                      <Button onClick={addConsultation} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {consultations.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhuma consulta registrada. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      consultations.map((consultation) => (
                        <div key={consultation.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Consulta</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeConsultation(consultation.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid gap-3">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <Label>Data</Label>
                                <Input
                                  type="date"
                                  value={consultation.date}
                                  onChange={(e) => updateConsultation(consultation.id, "date", e.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Veterinário</Label>
                                <Input
                                  placeholder="Nome do veterinário"
                                  value={consultation.veterinarian}
                                  onChange={(e) => updateConsultation(consultation.id, "veterinarian", e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Motivo da Consulta</Label>
                              <Input
                                placeholder="Ex: Check-up anual, sintomas, exame"
                                value={consultation.reason}
                                onChange={(e) => updateConsultation(consultation.id, "reason", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Diagnóstico</Label>
                              <Textarea
                                placeholder="Diagnóstico do veterinário"
                                value={consultation.diagnosis}
                                onChange={(e) => updateConsultation(consultation.id, "diagnosis", e.target.value)}
                                rows={2}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Tratamento Prescrito</Label>
                              <Textarea
                                placeholder="Medicamentos e orientações"
                                value={consultation.treatment}
                                onChange={(e) => updateConsultation(consultation.id, "treatment", e.target.value)}
                                rows={2}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="weight" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Evolução de Peso</CardTitle>
                        <CardDescription>Acompanhe o crescimento e saúde do seu pet</CardDescription>
                      </div>
                      <Button onClick={addWeight} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {weights.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum peso registrado. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      weights.map((weight) => (
                        <div key={weight.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Pesagem</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeWeight(weight.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <Label>Peso (kg)</Label>
                              <Input
                                type="number"
                                step="0.1"
                                placeholder="Ex: 5.5"
                                value={weight.weight}
                                onChange={(e) => updateWeight(weight.id, "weight", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Data</Label>
                              <Input
                                type="date"
                                value={weight.date}
                                onChange={(e) => updateWeight(weight.id, "date", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Observações</Label>
                              <Input
                                placeholder="Notas adicionais"
                                value={weight.notes}
                                onChange={(e) => updateWeight(weight.id, "notes", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feeding" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Alimentação</CardTitle>
                        <CardDescription>Registro de dieta e mudanças alimentares</CardDescription>
                      </div>
                      <Button onClick={addFeeding} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {feeding.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum registro alimentar. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      feeding.map((feed) => (
                        <div key={feed.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Alimentação</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFeeding(feed.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label>Data de Início</Label>
                              <Input
                                type="date"
                                value={feed.date}
                                onChange={(e) => updateFeeding(feed.id, "date", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Tipo de Ração/Alimento</Label>
                              <Input
                                placeholder="Ex: Ração Premium Adulto"
                                value={feed.food}
                                onChange={(e) => updateFeeding(feed.id, "food", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Quantidade Diária</Label>
                              <Input
                                placeholder="Ex: 200g, 2 xícaras"
                                value={feed.amount}
                                onChange={(e) => updateFeeding(feed.id, "amount", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Frequência</Label>
                              <Input
                                placeholder="Ex: 2x ao dia"
                                value={feed.frequency}
                                onChange={(e) => updateFeeding(feed.id, "frequency", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hygiene" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Cuidados de Higiene</CardTitle>
                        <CardDescription>Banhos, escovação, ouvidos e unhas</CardDescription>
                      </div>
                      <Button onClick={addHygiene} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {hygiene.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum registro de higiene. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      hygiene.map((hyg) => (
                        <div key={hyg.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Cuidado</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeHygiene(hyg.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <Label>Data</Label>
                              <Input
                                type="date"
                                value={hyg.date}
                                onChange={(e) => updateHygiene(hyg.id, "date", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Tipo de Cuidado</Label>
                              <Input
                                placeholder="Banho/Escovação/Unhas/Ouvidos"
                                value={hyg.type}
                                onChange={(e) => updateHygiene(hyg.id, "type", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Observações</Label>
                              <Input
                                placeholder="Produtos usados, notas"
                                value={hyg.notes}
                                onChange={(e) => updateHygiene(hyg.id, "notes", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contacts" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Contatos de Veterinários e Emergência</CardTitle>
                        <CardDescription>Mantenha os contatos importantes sempre à mão</CardDescription>
                      </div>
                      <Button onClick={addContact} size="sm" className="gap-2 print:hidden">
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contacts.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum contato registrado. Clique em "Adicionar" para começar.
                      </p>
                    ) : (
                      contacts.map((contact) => (
                        <div key={contact.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Contato</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeContact(contact.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label>Nome</Label>
                              <Input
                                placeholder="Nome da clínica/veterinário"
                                value={contact.name}
                                onChange={(e) => updateContact(contact.id, "name", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Tipo</Label>
                              <Input
                                placeholder="Veterinário/Emergência/Pet Shop"
                                value={contact.type}
                                onChange={(e) => updateContact(contact.id, "type", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Telefone</Label>
                              <Input
                                placeholder="(00) 00000-0000"
                                value={contact.phone}
                                onChange={(e) => updateContact(contact.id, "phone", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Endereço</Label>
                              <Input
                                placeholder="Endereço completo"
                                value={contact.address}
                                onChange={(e) => updateContact(contact.id, "address", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Histórico Clínico e Anotações Importantes</CardTitle>
                    <CardDescription>Registre informações relevantes sobre a saúde do seu pet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="clinicalNotes">Anotações</Label>
                      <Textarea
                        id="clinicalNotes"
                        placeholder="Alergias, cirurgias, condições crônicas, comportamentos especiais, medicamentos contínuos, etc."
                        value={clinicalNotes}
                        onChange={(e) => setClinicalNotes(e.target.value)}
                        rows={10}
                        className="resize-none"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Use este espaço para registrar qualquer informação importante sobre a saúde do seu pet que não se
                      encaixa nas outras categorias.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Com layout simples e visual delicado</strong>, o Cartão de Saúde PatoolaFam facilita o
                acompanhamento da rotina de saúde do pet e ainda serve como lembrança afetiva, registrando cada fase de
                crescimento com amor.
              </p>
              <p className="text-sm text-muted-foreground text-center">
                Os dados são salvos localmente no seu navegador. Mantenha esta carteira sempre atualizada e leve-a nas
                consultas veterinárias.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
