
import { fallbackProducts } from '../utils/productUtils';

// Service pour gérer les requêtes API liées aux produits
export const fetchProducts = async (selection: string = 'votre sélection :') => {
  try {
    console.log(`Fetching products with selection: ${selection}`);
    
    // Simulation de réponse serveur avec la sélection incluse
    // Cette approche est temporaire jusqu'à ce que le serveur PHP fonctionne correctement
    console.log("Utilisation des données statiques avec la sélection: " + selection);
    
    // Créer une nouvelle copie des données statiques pour éviter des modifications accidentelles
    const products = fallbackProducts.map(product => ({
      ...product,
      // Inclure la sélection dans le nom du produit pour montrer que le paramètre est bien pris en compte
      name: `${product.name} [${selection}]`
    }));
    
    // Simuler une réponse API avec la structure attendue
    return {
      products: products,
      selection: selection,
      count: products.length
    };
    
    /* Commenté temporairement jusqu'à ce que le serveur PHP fonctionne
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
    */
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};
