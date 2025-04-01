
// Service pour gérer les requêtes API liées aux produits

export const fetchProducts = async (selection: string = 'votre sélection :') => {
  try {
    console.log(`Fetchings products with selection: ${selection}`);
    
    // On passe la sélection actuelle comme paramètre de requête
    const response = await fetch(`/liste-produits.php?selection=${encodeURIComponent(selection)}`);
    
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des produits');
    }
    
    // Vérifier le type de contenu
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") === -1) {
      console.error("La réponse n'est pas au format JSON:", contentType);
      
      // Afficher le contenu brut pour déboguer
      const text = await response.text();
      console.log("Contenu brut de la réponse:", text);
      
      throw new Error("La réponse n'est pas au format JSON");
    }
    
    // Convertir la réponse en JSON
    return await response.json();
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};
