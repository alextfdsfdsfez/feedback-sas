// Composant principal de l'application
import { useState } from 'react'
import './App.css'

// Nom de l'application, qui change selon l'environnement (fichiers .env)
const nomApplication = import.meta.env.VITE_APP_NAME

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
        <button type="submit">Ajouter</button>
      </form>

      {/* Liste des idées ajoutées */}
      <ul className="liste-idees">
        {idees.map((idee, position) => (
          <li key={position}>{idee}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
