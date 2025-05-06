
// Définition de type pour les produits récupérés depuis SQL
export interface SqlProduct {
  id: string;
  description: string;
  poids_net: string;
  type_metal: string;
  poids_prevu: string;
  diametre_principal: string;
  prix: string;
}
