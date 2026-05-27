import { Destino } from "@/types/destino";

export const destinos: Destino[] = [
    {
        id: 'tokyo',
        nome: 'Tóquio',
        pais: 'Japão',
        descricao:
            'Uma metrópole fascinante que mistura tradição milenar e tecnologia de ponta. De templos históricos a arranha-céus futuristas, Tóquio surpreende em cada esquina.',
        imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',    
        destaque: ['Torre de Tóquio', 'Shibuya Crossing', 'Templo Senso-ji', 'Akihabara'],
    },
    {
        id: 'paris',
        nome: 'Paris',
        pais: 'França',
        descricao:
            'A Cidade Luz encanta com sua arquitetura elegante, culinária refinada e museus de classe mundial. Um destino atemporal que inspira artistas e viajantes há séculos.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        destaque: ['Torre Eiffel', 'Museu do Louvre', 'Notre-Dame', 'Champs-Élysées'],
    },
    {
        id: 'new-york',
        nome: 'Nova York',
        pais: 'Estados Unidos',
        descricao: 
            'A cidade que nunca dorme pulsa com energia única. Broadway, Central Park e uma gastronomia cosmopolita fazem de Nova York uma experiência inesquecível.',
        imageUrl: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        destaque: ['Central Park', 'Times Square', 'Estátua da Liberdade', 'Brooklyn Bridge'],    
    },
    {
        id: 'machu-picchu',
        nome: 'Machu Picchu',
        pais: 'Peru',
        descricao:
            'A cidadela inca perdida nas alturas dos Andes é uma das maravilhas do mundo. História, espiritualidade e natureza exuberante em um só lugar.',
        imageUrl: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        destaque: ['Cidade Inca', 'Trilha Inca', 'Montanha Huayna Picchu', 'Portão do Sol'],    
    },
    {
        id: 'santorini',
        nome: 'Santorini',
        pais: 'Grécia',
        descricao:
            'Casinhas brancas com telhados azuis, pôr do sol dourado sobre o mar Egeu e vinhos locais excepcionais. Santorini é o cenário perfeito para momentos inesquecíveis.',
        imageUrl: 'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        destaque: ['Oia', 'Praia de Perissa', 'Vulcão de Nea Kameni', 'Akrotiri'],    
    },
]