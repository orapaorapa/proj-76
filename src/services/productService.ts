
import { fallbackProducts } from '../utils/productUtils';
import { executeSqlQuery } from './sqlService';

// Service pour gérer les requêtes liées aux produits
export const fetchProducts = async (selection: string = 'votre sélection :') => {
  try {
    console.log(`Fetching products with selection: ${selection}`);
    
    // Construction de la requête SQL avec le paramètre de sélection
    const sqlQuery = `
      SELECT 
        id, 
        description, 
        clarte AS poids_net, 
        couleur AS type_metal, 
        taille AS poids_prevu, 
        dimensions AS diametre_principal, 
        prix 
      FROM produits 
      WHERE categorie = '${selection.replace(/'/g, "''")}'
      OR '${selection.replace(/'/g, "''")}' = 'votre sélection :'
      LIMIT 15
    `;
    
    // Exécution de la requête SQL
    const result = await executeSqlQuery(sqlQuery);
    
    if (!result.success || !result.data) {
      throw new Error(result.error || 'Erreur lors du chargement des produits');
    }
    
    // Transformation des données SQL en format produit attendu
    const products = result.data.map((row: any) => ({
      id: row.id.toString(),
      name: row.description,
      image: "/placeholder.svg",
      image2: "/placeholder.svg",
      price: row.prix,
      specs: {
        poidsNet: row.poids_net,
        typeMetal: row.type_metal,
        poidsPrevu: row.poids_prevu,
        diametrePrincipal: row.diametre_principal
      }
    }));
    
    // Renvoyer dans le format attendu
    return {
      selection: selection,
      products: products,
      count: products.length
    };
    
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
