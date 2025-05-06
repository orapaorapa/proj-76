
/**
 * Service pour gérer les requêtes SQL vers un serveur MySQL legacy
 * Utilise une API simple pour exécuter des requêtes SQL sur le serveur distant
 */

interface SqlResponse {
  success: boolean;
  data?: any[];
  error?: string;
}

/**
 * Exécute une requête SQL sur le serveur MySQL legacy
 * @param query La requête SQL à exécuter
 * @returns Les données renvoyées par la requête ou une erreur
 */
export const executeSqlQuery = async (query: string): Promise<SqlResponse> => {
  try {
    console.log(`Exécution de la requête SQL: ${query}`);
    
    // Construction des paramètres pour la requête au serveur legacy
    const params = new URLSearchParams({
      query: query
    });
    
    // Adresse du serveur MySQL legacy
    const serverUrl = "http://192.168.1.187/cloud/st/execute-query.php";
    
    // Appel au serveur legacy
    const response = await fetch(`${serverUrl}?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`Erreur de connexion au serveur MySQL (${response.status})`);
    }
    
    // Conversion de la réponse en JSON
    const result = await response.json();
    
    return {
      success: true,
      data: result
    };
    
  } catch (error) {
    console.error('Erreur lors de lexec de  la requête SQL:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur inconnue lors de la connexion au serveur MySQL'
    };
  }
};
