import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StylisteCommande() {
  return (
    <div className="min-h-screen bg-pink-50 p-6 grid gap-6">
      <header className="text-center text-pink-700 grid gap-3">
        <div className=\"flex justify-center\">
          <div className=\"w-24 h-24 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-sm shadow\">LOGO</div>
        </div>
        <h1 className="text-3xl font-bold">Awa Ndao Couture By Binette</h1>
        <p className="text-pink-600">L’élégance sur mesure, pensée pour vous</p>
        <p className=\"text-sm text-pink-500\">📧 <a href=\"mailto:awacheikhn88@gmail.com\" className=\"underline\">awacheikhn88@gmail.com</a></p>
      </header>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pink-700 mb-4">Nos créations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://placehold.co/400x500?text=Création+1" alt="Création 1" className="rounded-2xl shadow" />
          <img src="https://placehold.co/400x500?text=Création+2" alt="Création 2" className="rounded-2xl shadow" />
          <img src="https://placehold.co/400x500?text=Création+3" alt="Création 3" className="rounded-2xl shadow" />
        </div>
      </section>

      <Card className="max-w-2xl mx-auto border-pink-200">
        <CardContent className="p-6 grid gap-4 bg-white">
          <h2 className="text-xl font-semibold">Passer une commande</h2>
          <Input placeholder="Nom et prénom" />
          <Input placeholder="Numéro de téléphone" />
          <Input placeholder="Email (optionnel)" />
          <Input placeholder="Type de tenue (robe, boubou, costume...)" />
          <Textarea placeholder="Description du modèle souhaité" />
          <Input placeholder="Date souhaitée de livraison" />
          <a href="https://wa.me/221784234997" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2 w-full">Envoyer la commande sur WhatsApp</Button>
          </a>
        </CardContent>
      </Card>

      <Card className="max-w-2xl mx-auto border-pink-200">
        <CardContent className="p-6 grid gap-4 bg-white">
          <h2 className="text-xl font-semibold text-pink-700 text-center">Fiche de mesures</h2>
          <Input placeholder="Tour de poitrine (cm)" />
          <Input placeholder="Tour de taille (cm)" />
          <Input placeholder="Tour de hanches (cm)" />
          <Input placeholder="Largeur des épaules (cm)" />
          <Input placeholder="Longueur des manches (cm)" />
          <Input placeholder="Longueur totale de la tenue (cm)" />
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-pink-500">
        © 2025 Awa Ndao Couture By Binette – Tous droits réservés
      </footer>
    </div>
  );
}
