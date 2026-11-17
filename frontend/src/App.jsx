// Composant principal de l'application
import { useState } from 'react'
import './App.css'

// Nom de l'application, qui change selon l'environnement (fichiers .env)
const nomApplication = import.meta.env.VITE_APP_NAME

// Chats métal dispersés en fond de page (émoji + position à l'écran)
const chatsDuFond = [
  { emoji: '😼', haut: '8%', gauche: '6%' },
  { emoji: '🐈‍⬛', haut: '22%', gauche: '88%' },
  { emoji: '🤘', haut: '45%', gauche: '12%' },
  { emoji: '😼', haut: '60%', gauche: '80%' },
  { emoji: '🐈‍⬛', haut: '78%', gauche: '25%' },
  { emoji: '⚡', haut: '88%', gauche: '65%' },
  { emoji: '🔥', haut: '50%', gauche: '32%' },
  { emoji: '🤘', haut: '70%', gauche: '48%' },
]

function App() {
  // Texte en cours de saisie dans le champ
  const [titreSaisi, setTitreSaisi] = useState('')
  // Liste des idées ajoutées (perdue au rechargement de la page, c'est voulu)
  const [idees, setIdees] = useState([])

  // Ajoute l'idée saisie à la liste, puis vide le champ
  function ajouterIdee(evenement) {
    evenement.preventDefault()
    const titre = titreSaisi.trim()
    if (titre === '') return // on n'ajoute pas d'idée vide
    setIdees([...idees, titre])
    setTitreSaisi('')
  }

  return (
    <>
      {/* Chats en fond de page, purement décoratifs */}
      <div className="fond-chats" aria-hidden="true">
        {chatsDuFond.map((chat, position) => (
          <span key={position} style={{ top: chat.haut, left: chat.gauche }}>
            {chat.emoji}
          </span>
        ))}
      </div>

      <main className="page">
        <h1>{nomApplication}</h1>

        {/* Formulaire de saisie d'une idée */}
        <form className="formulaire" onSubmit={ajouterIdee}>
          <input
            type="text"
            placeholder="Titre de l'idée"
            aria-label="Titre de l'idée"
            value={titreSaisi}
            onChange={(evenement) => setTitreSaisi(evenement.target.value)}
          />
          <button type="submit">
            <span aria-hidden="true">🤘 </span>Ajouter
          </button>
        </form>

        {/* Widget météo sur le côté gauche (météo fictive, écrite en dur) */}
        <aside className="widget-meteo">
          <h2>journée de merde</h2>
          <p className="meteo-icone" aria-hidden="true">🌧️</p>
          <p className="meteo-temperature">8°C</p>
          <p>Pluie toute la journée</p>
          <p className="meteo-details">Vent : 60 km/h · Humidité : 98 %</p>
        </aside>

        {/* Liste des idées ajoutées */}
        <ul className="liste-idees">
          {idees.map((idee, position) => (
            <li key={position}>{idee}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
