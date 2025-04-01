
import { fallbackProducts } from '../utils/productUtils';

// Service pour gérer les requêtes API liées aux produits
export const fetchProducts = async (selection: string = 'votre sélection :') => {
  try {
    console.log(`Fetching products with selection: ${selection}`);
    
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
    console.log("Utilisation des données de secours");
    
    // En cas d'erreur, utiliser les données statiques de secours
    const products = fallbackProducts.map(product => ({
      ...product,
      // Inclure la sélection dans le nom du produit pour montrer que le paramètre est pris en compte
      name: `${product.name} [${selection}]`
    }));
    
    // Renvoyer un format compatible avec la réponse attendue
    return {
      products: products,
      selection: selection,
      count: products.length
    };
  }
};
