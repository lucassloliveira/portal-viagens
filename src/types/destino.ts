export type Destino = {
    id: string  // APIs reais costumam vir como string
    nome: string
    pais: string
    descricao: string
    imageUrl: string
    destaque: string[] // Array de strings com pontos turisticos ou curiosidades do destino
}