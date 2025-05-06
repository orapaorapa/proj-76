
import { fallbackProducts } from '../utils/productUtils';
import { executeSqlQuery } from './sqlService';

// Service pour gérer les requêtes liées aux produits
export const fetchProducts = async (selection: string = 'votre sélection :', page: number = 1, lastModelDisplayed: string = '') => {
  try {
    console.log(`Fetching products with selection: ${selection}, page: ${page}, lastModel: ${lastModelDisplayed}`);
    
    // Nombre d'éléments par page
    const itemsPerPage = 15;
    
    // Construction de la requête SQL avec les paramètres de sélection et pagination
    let sqlQuery = `
      SELECT 
        id, 
        reference AS code,
        description, 
        clarte AS poids_net, 
        couleur AS type_metal, 
        taille AS poids_prevu, 
        dimensions AS diametre_principal, 
        prix 
      FROM produits 
      WHERE categorie = '${selection.replace(/'/g, "''")}'
    `;
    
    // Si un dernier modèle est fourni, on commencera à partir de celui-ci
    if (lastModelDisplayed && page > 1) {
      sqlQuery += ` AND reference > '${lastModelDisplayed.replace(/'/g, "''")}'`;
    }
    
    // Limiter le nombre de résultats
    sqlQuery += ` ORDER BY reference ASC LIMIT ${itemsPerPage}`;
    
    // Exécution de la requête SQL
    const result = await executeSqlQuery(sqlQuery);
    
    if (!result.success || !result.data) {
      throw new Error(result.error || 'Erreur lors du chargement des produits');
    }
    
    // Transformation des données SQL en format produit attendu
    const products = result.data.map((row: any) => ({
      id: row.id.toString(),
      name: row.description,
      code: row.code || "",
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
    
    // Récupérer le dernier modèle affiché pour la pagination suivante
    const lastDisplayedModel = products.length > 0 ? products[products.length - 1].code : "";
    
    // Renvoyer dans le format attendu
    return {
      selection: selection,
      products: products,
      count: products.length,
      currentPage: page,
      lastDisplayedModel: lastDisplayedModel
    };
    
  } catch (error) {
    console.error('Erreur:', error);
    console.log("Utilisation des données de secours");
    
    // En cas d'erreur, utiliser les données statiques de secours
    const products = fallbackProducts.map(product => ({
      ...product,
      code: `BG${Math.floor(Math.random() * 10000)}`,
      // Inclure la sélection dans le nom du produit pour montrer que le paramètre est pris en compte
      name: `${product.name} [${selection}]`
    }));
    
    // Renvoyer un format compatible avec la réponse attendue
    return {
      products: products,
      selection: selection,
      count: products.length,
      currentPage: page,
      lastDisplayedModel: ""
    };
  }
};
