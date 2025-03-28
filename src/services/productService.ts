
// Service pour gérer les requêtes API liées aux produits

export const fetchProducts = async (selection: string = 'votre sélection :') => {
  try {
    // On passe la sélection actuelle comme paramètre de requête
    const response = await fetch(`/liste-produits.php?selection=${encodeURIComponent(selection)}`);
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des produits');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};
