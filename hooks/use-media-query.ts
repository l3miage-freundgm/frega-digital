"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Définir la valeur initiale
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    // Callback pour les changements
    const listener = () => {
      setMatches(media.matches)
    }

    // Ajouter l'écouteur d'événement
    media.addEventListener("change", listener)

    // Nettoyer
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [matches, query])

  return matches
}

