export const initialPlaylists = [
  {
    idPlaylist: 1,
    titre: "Développement Web",
    categorie: "Programmation",
    videos: [
      {
        id: 101,
        titre: "Introduction à JavaScript",
        description: "Les bases du langage JavaScript.",
        miniature: "/images/ExpressJs.png",
        duree: "10:05",
        commentaires: [
          { nom: "Nada", texte: "Super explication !", rating: 5 },
          { nom: "Mounir", texte: "Très clair et précis.", rating: 4 },
          { nom: "Anas", texte: "Merci beaucoup !", rating: 5 },
          { nom: "Zaynab", texte: "J'adore cette vidéo !", rating: 4 }
        ],
        likes: 100,
        dislikes: 0,
        lien: "https://www.youtube.com/embed/01ysRUHZbJI",
        auteur: {
          nom: "GAHI",
          prenom: "Said",
          photo: "/images/img4.png"
        }
      },
      {
        id: 102,
        titre: "Découvrir Docker",
        description: "Essential web development tips and tricks for modern developers.",
        miniature: "/images/Cloud.png",
        duree: "12:45",
        commentaires: [
          { nom: "Alice", texte: "Loved the tips, very useful.", rating: 4 },
          { nom: 2, user: "Bob", texte: "Can you make a video on CSS?", rating: 3 }
        ],
        likes: 8500,
        dislikes: 120,
        lien: "https://www.youtube.com/embed/zjCszQLo9QI",
        auteur: {
          nom: "GAHI",
          prenom: "Said",
          photo: "/images/img4.png"
        }
      }
    ]
  },
];
