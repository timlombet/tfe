import { TeamMember, ProjectItem, DiaryMonth, ToolItem, BonusItem, GlossaryEntry, BibliographyEntry } from "./types";

export const introText = `La porte est entrouverte. Vous entendez déjà un air siffloté qui s’échappe, rythmé par un échange régulier de bonjours spontanés. Plus loin, le bourdonnement sourd des machines de l’atelier vient s’ajouter à l’ambiance. C’est la bande-son de nos journées. Dehors, juste sur l’appui de fenêtre, un chat sauvage s’étire. Il profite du soleil en toute détente, complètement indifférent à notre agitation intérieure.

Dès qu’on passe le pas de la porte, le regard croise des piles de livres un peu partout. Sur votre gauche, caché derrière l’une de ces tours de papier, le cliquetis rapide d’un clavier donne le tempo. C’est l’assistante d’édition en pleine rédaction de ses textes. Tout au fond de la pièce, la lumière change. Le bruit sec d’un déclencheur d’appareil photo résonne.

Bienvenue dans mon environnement de travail ! C’est ici, entouré de mes collègues, que j’ai passé la plus part de mon temps. Ce bureau, situé dans le premier couloir des coulisses, est un vrai point de ralliement. Le passage y est constant. C’est un lieu vivant et stimulant, qui bouge sans arrêt.`;

export const remerciementsText = `La réalisation de ce travail de fin d’étude marque une étape importante de mon parcours, et elle n’aurait pas été la même sans l’appui de plusieurs personnes que je tiens à remercier sincèrement.

Je pense d’abord à ma maître de stage Justine Periaux, qui était toujours présente pour moi. Je la remercie pour sa confiance dès le premier jour, mais aussi pour nos échanges qui m’ont permis de prendre du recul sur mon futur métier.

Un grand merci à l’implication et le soutien de Me Scouflaire, ma promotrice qui était à l’écoute et disponible quand j’en ai eu besoin.

Je salue également toute l’équipe Publication. Au-delà des missions confiées, j’ai particulièrement apprécié l’accueil et l’ambiance au quotidien.`;

export const museumHistory = [
  {
    title: "Le Domaine de Mariemont",
    content: "La plupart des gens visionnent Mariemont comme un simple parc, mais cet endroit ne s’arrête pas là, il est aussi un lieu avec sa propre histoire."
  },
  {
    title: "Débuts royaux (16e siècle)",
    content: "Tout commence au 16e siècle avec Marie de Hongrie. Passionnée de chasse, la sœur de Charles Quint a acheté ce terrain boisé pour y construire un pavillon de loisirs. Elle nomma l’endroit « Mariemont », ce qui signifie littéralement le « Mont de Marie ». Par la suite, le domaine accueillit d'autres grands noms, comme les Archiducs Albert et Isabelle qui y réalisaient de magnifiques jardins, ou encore Louis XIV. En 1741, le prince Charles de Lorraine y fit bâtir un palais de style néo-classique pour ses réceptions. Malheureusement, en 1794, les troupes françaises ont mis le feu au domaine, et le palais finit pillé par les habitants du coin."
  },
  {
    title: "La Famille Warocqué (19e siècle)",
    content: "Au 19e siècle, le domaine reprend vie grâce à l’industrie minière. Nicolas Warocqué, un riche bourgeois, a acheté une partie de la forêt pour y construire un nouveau château et un parc à l’anglaise. Sa famille s’occupait du domaine durant quatre générations.\n\nLe plus célèbre est Raoul Warocqué, le dernier de la lignée. Grand voyageur et collectionneur passionné, il avait une quantité impressionnante d’objets venant du monde entier. Comme il n’avait pas d’héritier, il a décidé de léguer tout le domaine et ses collections à l’État Belge pour que tout le monde puisse en profiter."
  },
  {
    title: "Musée royal de Mariemont (Depuis 1934)",
    content: "En 1934, le domaine a été officiellement transformé en musée sous la direction de Paul Faider et Germaine Faider-Feytmans. Néanmoins, un événement tragique a marqué l’histoire du lieu : un incendie dévastateur a eu lieu le soir de Noël 1960, endommageant le château et affectant les collections.\n\nSur les ruines de l’ancien bâtiment, l’architecte Roger Bastin construit une autre structure plus moderne qui ouvre dès 1975. Le « Musée royal de Mariemont » est né. Ainsi en 1991, l’établissement est passé sous la tutelle de la Fédération Wallonie-Bruxelles."
  }
];

export const museumMissions = [
  {
    name: "Conservation",
    text: "Assurer la protection, la restauration et l’inventaire permanent des collections."
  },
  {
    name: "Recherche",
    text: "Étudier les œuvres pour faire progresser les connaissances en archéologie et en histoire de l’art."
  },
  {
    name: "Valorisation",
    text: "Diffuser ce savoir via des expositions temporaires et des publications spécialisées."
  },
  {
    name: "Service public",
    text: "Accueillir et transmettre la culture à tous les publics par la médiation."
  }
];

export const servicePublicationText = `De la feuille d'arbre à la feuille de papier s'attache à montrer l'aspect muséal, et se penche plus précisément sur la section publication qui se cache entre les murs du musée royal de Mariemont.

Ce service est essentiel pour la visibilité de l'institution. Il est comme un relais entre les départements quand il s'agit de produire des visuels. De la création à la diffusion, il assure la bonne facture des projets publiés par support imprimé ou numérique. C'est lui qui fait, entre-autres, le choix des formats, des matériaux, des reliures, etc.

Lorsqu'on traite une demande en tant que graphiste, il est capital d'établir un cahier des charges afin de déterminer les délais et contraintes. Le service publication ajuste alors ces paramètres, en fonction de la faisabilité d'un projet. Entre budget, support, quantité, public cible... Il est important de prendre les bonnes décisions.`;

export const teamMembers: TeamMember[] = [
  {
    id: "justine",
    name: "Justine Periaux",
    role: "Graphiste",
    avatarId: "justine_portrait",
    description: "Graphiste au sein du musée, en charge de l'identité visuelle globale et de la scénographie.",
    interview: [
      {
        question: "En quoi consiste ta fonction ?",
        answer: "Je suis graphiste au sein du musée et je réalise l’ensemble des visuels liés aux expositions et aux événements. Mon travail consiste à créer et décliner l’identité graphique sur différents supports de communication : affiches, bâches, flyers, cartons d’invitation, etc.\n\nJe m’occupe également de la scénographie des expositions et des événements, afin de créer une expérience visuelle cohérente et immersive pour les visiteurs. Je participe aussi à certains projets en collaboration avec des artistes."
      },
      {
        question: "Quelle partie de ton travail concerne les livres ?",
        answer: "La partie principale de mon travail concerne la création et la mise en page des publications : catalogues et albums d’exposition, agendas, rapports d'activité, mais également des publications scientifiques. Enfin, je réalise des supports pour différents services du musée, comme la médiation culturelle ou encore le merchandising de la boutique."
      },
      {
        question: "Qu'est-ce qui t'a donné envie de travailler dans le milieu muséal ?",
        answer: "J’ai toujours été attirée par le milieu culturel. Ce métier me permet de mêler la création graphique au contact avec le public. J’aime l’idée de rendre les contenus plus attractifs, accessibles et esthétiques, afin de susciter chez les visiteurs un effet de surprise, de curiosité ou de satisfaction. Le milieu muséal offre aussi une grande diversité de projets et une vraie liberté créative, ce qui rend le travail particulièrement enrichissant."
      },
      {
        question: "Quelle facette de ton travail est insoupçonnée du public ?",
        answer: "Je pense que le public ne se rend pas toujours compte de tout le travail réalisé en amont, notamment le travail typographique et éditorial. Derrière chaque publication ou support imprimé, il y a une attention particulière portée aux textes, aux césures, à la mise en page et aux règles de typographie. Ce sont des détails parfois invisibles pour le visiteur, mais essentiels pour garantir une lecture agréable et un rendu professionnel."
      },
      {
        question: "Un souvenir qui t'a marquée ?",
        answer: "Je pense immédiatement au Festival Warocqué de 2017. C’est à ce moment-là que j’ai réalisé à quel point j’aimais la scénographie, un aspect du métier que je n’avais pas encore vraiment exploré auparavant. Cette expérience a été très enrichissante, aussi bien sur le plan humain que professionnel, et elle a confirmé mon envie de développer davantage cette facette de mon travail."
      }
    ]
  },
  {
    id: "js",
    name: "Jean-Sébastien Balzat",
    role: "Responsable du Service des Publications",
    avatarId: "js_portrait",
    description: "Coordinateur des publications, rédacteur en chef et responsable d'édition de l'institution.",
    interview: [
      {
        question: "En quoi consiste ta fonction ?",
        answer: "Je coordonne les publications du Musée, assure la gestion de l’équipe et suis le rédacteur en chef des Cahiers de Mariemont."
      },
      {
        question: "Qu'est-ce qui t'a donné envie de travailler dans le milieu muséal ?",
        answer: "Je poursuivais auparavant une carrière de chercheur universitaire. Je suis venu au musée avec l’envie de mettre mes compétences de scientifique au profit du plus grand nombre et de transmettre les résultats de la recherche au grand public."
      },
      {
        question: "Quelle facette de ton travail est insoupçonnée du public ?",
        answer: "Ce serait plutôt au public de me le dire... le grand public peut peut-être croire que le travail au musée est un travail « pépère », tranquille, dans un contexte un peu hors du temps, protégé de l’extérieur, dans un beau cadre, mais en réalité, le travail est souvent un travail exigeant, et il y a une constante attention à faire du travail de pointe, de mobiliser les publics, d’ouvrir à plus de diversité et de suivre les grands changements de société... ; c’est plutôt une institution très contemporaine et qui est en mouvement et qui change avec son temps."
      },
      {
        question: "Un souvenir marquant à partager ?",
        answer: "Des choses qui peuvent paraître a priori fort difficiles ne sont parfois pas aussi impossibles qu’elles n’en ont l’air ! Ainsi, la revue des Cahiers était moribonde avant mon arrivée et nous en avons fait une belle vitrine de la recherche au musée, assurant sa parution annuelle depuis 2019... Je peux aussi penser au fait qu'avant mon arrivée, les catalogues étaient souvent externalisés et, en travaillant avec l'équipe, on a réussi ensemble depuis 2019 à éditer tous les catalogues d’exposition en interne... c'est une équipe formidable !"
      }
    ]
  },
  {
    id: "fantine",
    name: "Fantine Lequeux",
    role: "Assistante d’édition",
    avatarId: "fantine_portrait",
    description: "Éditrice et correctrice, chargée du lien avec les auteurs et de la mise en page des épreuves.",
    interview: [
      {
        question: "En quoi consiste ton travail ?",
        answer: "Mon travail consiste principalement au suivi de la réalisation de publications telles que les catalogues d’exposition, la revue scientifique ou des albums des collections, et à l'accompagnement de leurs auteurs et/ou éditeurs scientifiques.\n\nJe participe ainsi à l’édition des textes afin d’en améliorer le manuscrit et de préparer la version définitive destinée à la mise en page. Ce travail implique de nombreux échanges avec les auteurs, sous la forme d’allers-retours, et de multiples relectures. Je collabore également aux choix iconographiques, veille au respect des droits de reproduction des illustrations, suis l'élaboration de la maquette, m’occupe des corrections sur épreuves et vérifie le BAT avant impression."
      },
      {
        question: "Comment décrirais-tu la polyvalence de ton poste ?",
        answer: "La fonction d'assistante d'édition au sein d'un service d'édition intégré à un musée est particulièrement polyvalente. Elle regroupe plusieurs aspects de métiers que l’on retrouve parfois séparément dans des structures éditoriales plus importantes, comme ceux d’éditeur, de correcteur ou encore d’iconographe. Et c’est justement ce qui en fait sa richesse et me passionne."
      },
      {
        question: "Qu'est-ce qui t'a donné envie de travailler dans le milieu muséal ?",
        answer: "Travailler dans un musée était un rêve que j’osais à peine envisager. Je ne pensais pas pouvoir accéder à ce milieu par le biais de mes études en Langues et Littératures françaises et romanes, et j’ignorais alors la diversité des métiers que l’on pouvait y exercer. Quand cette opportunité professionnelle s’est présentée, cela a été une véritable chance.\n\nLe cadre de travail m’a immédiatement attirée : évoluer dans un lieu chargé d’histoires au milieu des collections, contribuer à la valorisation de celles-ci et participer à la transmission des connaissances."
      },
      {
        question: "Après plusieurs années dans ce milieu, quel est ton ressenti ?",
        answer: "Après quatre ans et demi d’expérience dans le secteur muséal, j’ajouterais que ce milieu offre aussi la possibilité de recherche et de créativité, et permet enfin de rencontrer des personnes passionnées, animées par un objectif commun de préserver le patrimoine et de favoriser l’accès à la culture."
      },
      {
        question: "Une facette insoupçonnée de ton quotidien ?",
        answer: "Je dirais que beaucoup de facettes de mon métier ne sont pas « connues » par le public... Peut-être que la plus insoupconnée reste les multiples relectures d’un même texte !"
      },
      {
        question: "Ton plus beau souvenir ?",
        answer: "La première fois que j’ai vu mon nom inscrit dans le colophon d’une publication à laquelle j’avais contribué."
      }
    ]
  },
  {
    id: "andy",
    name: "Andy Simon",
    role: "Photographe",
    avatarId: "andy_portrait",
    description: "Photographe officiel du Domaine, spécialisé dans l'inventaire des objets et la reproduction fidèle d'œuvres.",
    interview: [
      {
        question: "En quoi consiste ta fonction ?",
        answer: "Je suis photographe au Domaine et Musée royal de Mariemont. Mon travail consiste à produire les images du musée, dans des contextes assez variés : photographies d’objets pour l’inventaire, reproductions d’œuvres pour les publications scientifiques, vues d’exposition, images de communication, portraits, événements, ou encore documentation de projets en cours."
      },
      {
        question: "Qu'est-ce qui caractérise la reproduction d'œuvres d'art ?",
        answer: "Une partie importante de mon travail est liée à la reproduction fidèle des œuvres et des objets. Il faut respecter les couleurs, les matières, les volumes, les détails, tout en tenant compte des contraintes propres au patrimoine : fragilité des pièces, conditions de manipulation, reflets, formats parfois complexes, délais de publication, etc."
      },
      {
        question: "Qu'est-ce qui t'a donné envie de travailler dans le milieu muséal ?",
        answer: "J’ai une formation artistique et une curiosité naturelle pour les lieux culturels, mais c’est aussi mon parcours professionnel précédent qui m’a donné envie de travailler dans un musée.\n\nAvant Mariemont, je travaillais dans le retail, où je photographiais des collections d’objets commercialisés. À la fin de l’année, ces images pouvaient presque être mises à la poubelle : il fallait recommencer les mêmes prises de vue pour la nouvelle collection, avec le même angle, la même lumière, simplement avec de nouveaux objets. Cette logique de flux commercial ne me faisait plus vibrer. J’avais envie d’une photographie plus pérenne : une image réalisée avec soin, pensée pour durer, et qui accompagne le dossier d’une œuvre le plus longtemps possible."
      },
      {
        question: "Quelle facette de ton travail est insoupçonnée du public ?",
        answer: "Je pense que le public ne soupçonne pas toujours à quel point une photographie d’objet peut être construite. Une image qui semble simple demande parfois beaucoup de préparation : choix de la lumière, gestion des reflets, calibration des couleurs, retouches, détourage, vérification des détails... Il y a aussi toute une dimension invisible liée à l’organisation : préparer les prises de vue avec les conservateurs, comprendre les besoins scientifiques ou éditoriaux, archiver, nommer les fichiers... Une bonne photographie de musée doit être belle, mais elle doit surtout être juste, lisible et utile."
      },
      {
        question: "Ton souvenir de stage le plus marquant ?",
        answer: "Un souvenir marquant reste le travail réalisé autour de l’exposition « Bouddha. L’expérience du Sensible ». J’ai photographié les œuvres pour le catalogue, ainsi que la couverture du livre, et j’ai aussi produit une série d’auteur intitulée /Sarana/, commandée par le musée. C’était un projet très complet, à la fois technique, esthétique et humain. La photographie de musée peut dépasser la simple documentation : elle peut aussi proposer une rencontre sensible avec les objets."
      }
    ]
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: "colloque",
    title: "Colloque International",
    subtitle: "« La cour se met au vert (II) »",
    context: "Conception du programme pour écran et bannières web adaptées aux réseaux.",
    illustrationId: "chateau_sketch",
    content: "Le premier projet qu’on m’a confié était l’occasion idéale pour montrer concrètement ce dont je suis capable en matière de développement créatif. La mission portait sur le colloque international « La cour se met au vert (II) ». L’événement se tenait du 19 au 21 mars, et l’équipe avait besoin d’un visuel pour son programme. La demande était : concevoir un document optimisé pour une lecture sur écran, le tout accompagné d’une bannière déclinée pour les différents médias web.\n\nCe colloque décrypte les résidences de cour à la campagne. Il explore leur ancrage territorial, leurs décors et la vie festive qui les anime. Au-delà des apparences, l’événement souligne surtout les enjeux cachés : ces domaines abritaient de véritables tractations diplomatiques et politiques.\n\nDans un premier temps, je me suis plongé dans une longue phase de recherche (moodboard) pour définir un univers visuel fort. Puis est venue la phase de test, griffonnant des croquis rapides sur le papier pour trouver les bonnes compositions et équilibrer l'espace.",
    lessons: "Il fallait impérativement garder une cohérence avec la palette de couleurs du projet MARY4ALL. Le reste du terrain de jeu était entièrement libre."
  },
  {
    id: "mariemont2024",
    title: "La Revue Mariemont 2024",
    subtitle: "Mise en page éditoriale",
    context: "Continuité et rigueur sur un quart de l'ouvrage.",
    illustrationId: "cube_illustration",
    content: "J’ai intégré le projet de la revue Mariemont 2024 en cours de route. La machine était déjà bien lancée. Ma mission consistait à prendre le relais pour mettre en page le dernier quart de ce livre. Ce n’était pas un travail de création pure à partir d’une page blanche. La vraie difficulté de ce projet, c’était la régularité. Justine Periaux évoluait en parallèle sur le reste de la publication. L’enjeu était de garder une continuité fluide d’une page à l’autre. En feuilletant l’ouvrage, le lecteur ne devait déceler aucune différence visible entre son travail et le mien. Tout devait sembler avoir été fait par une seule et même personne.\n\nJ’ai donc complètement adapté ma propre production à la sienne. Il a fallu observer ses choix typographiques, ses marges, la manière dont elle gérait ses espaces. C’est un exercice très particulier.",
    lessons: "Mettre sa touche personnelle de côté pour se fondre dans un modèle exige une grande rigueur. Cette tâche très applicative m’a finalement permis d’affiner mon œil et de prouver ma capacité à reproduire une mise en page avec précision."
  },
  {
    id: "cartels",
    title: "Cartels Néerlandais",
    subtitle: "Mise en conformité linguistique",
    context: "Création de la version néerlandaise des cartels d'exposition du musée.",
    illustrationId: "cube_illustration",
    content: "Dans un musée qui accueille des visiteurs à l’international, il est important d’avoir plusieurs langues disponibles pour les visites. Encore plus en Belgique avec la région flamande et la région wallonne qui pratiquent deux langues différentes.\n\nCet exercice d’application était destiné à faire la version Néerlandaise de cartels, sur base de la version française déjà existante. C’est ici que j’ai découvert l’outil recherche et remplacement sur Indesign. Celui-ci m’était utile pour chercher les traductions dans un document qui m’était fourni.",
    lessons: "Maîtrise de l'automatisation dans Adobe InDesign pour accélérer les corrections multilingues d'envergure."
  },
  {
    id: "mary4all",
    title: "Projet MARY4ALL",
    subtitle: "Supports d'impression pour Muehlberg",
    context: "Conception de rollups, panneaux d'exposition et cartels de présentation multilingues.",
    illustrationId: "mary_portrait",
    content: "Le projet MARY4ALL a été une vraie découverte technique. Il m’a permis de me frotter à tout un lot de supports d’impression qui m’étaient jusqu’alors totalement inconnus. J’ai dû concevoir des rollups, des panneaux d’exposition et des cartels de présentation. Ce matériel était destiné au musée de Muehlberg. Le défi était aussi linguistique puisqu’il a fallu décliner ces différents supports pour créer une version allemande et une version espagnole.\n\nTravailler sur des formats aussi imposants change complètement la donne. Il faut repenser tous ses repères habituels. Sur des dimensions pareilles, on doit être particulièrement vigilant sur la taille du corps de texte. Le but est d’optimiser au maximum le confort de lecture du visiteur. Il faut anticiper sa position dans l'espace, sa distance physique.",
    lessons: "Adapter la typographie pour s’assurer que l’information reste toujours lisible et fatigue au moins possible l’œil du visiteur à distance."
  },
  {
    id: "rapport",
    title: "Rapport d'Activités 2025",
    subtitle: "Automatisation de gabarit",
    context: "Mise en page d'un document massif de plus de cent pages.",
    illustrationId: "tree_illustration",
    content: "Le chantier du rapport d’activités 2025 a été un jeu d’équilibriste. Il a fallu chercher le juste milieu entre la création pure et la reproduction. L’enjeu était de taille. Je devais garder une cohérence stricte avec la charte graphique de Mariemont, tout en réussissant à apporter ma propre touche, un aspect visuel nouveau. C’est un exercice très formateur.\n\nOn parle ici d’un document assez massif. Plus d’une centaine de pages ont été montées de toutes pièces sur un format A4, directement prévu pour une impression en interne. Forcément, enchaîner les gabarits sur une telle longueur devient vite très répétitif. La mise en page demande alors une toute autre approche.\n\nFace à ce volume, on ne peut pas tout faire à la main. Il devient indispensable d’optimiser ses logiciels pour gagner un temps précieux. J’ai donc appris à automatiser le plus de choses possible : générer une table des matières dynamique, paramétrer des styles de paragraphes précis, appliquer des styles de caractères...",
    lessons: "Toute une logique technique de gabarit mise en place qui m'a permis de garder le contrôle absolu sur l'ensemble d'un document lourd."
  },
  {
    id: "renaissance",
    title: "Journée Renaissance",
    subtitle: "Clôture de l'exposition Marie de Hongrie",
    context: "Conception complète de la charte événementielle, signalétique, dépliant et invitations.",
    illustrationId: "map_illustration",
    content: "Le 10 mai marquait un moment fort pour le musée. C’était la grande journée organisée pour la clôture de l’exposition « Marie de Hongrie. Arts & Pouvoirs à la Renaissance ».\n\nAccueillir un événement d’une telle ampleur demande une préparation graphique colossale en amont. Il faut imaginer un univers visuel fort, capable de se décliner sur absolument tous les supports nécessaires. Il y a évidemment tout ce qui s’adresse au public : les dépliants, les tickets d’entrée, les plans du domaine, les grands rollups, mais aussi la signalétique, les affiches d’itinérance, sans oublier les invitations ou encore les tickets spéciaux réservés aux figurants et au personnel.\n\nDans un tel projet, l’imprévu fait partie du jeu. Des décisions tombent souvent à la dernière minute et exigent des changements immédiats : un horaire qui glisse, un lieu qui change...",
    lessons: "C’est là qu’on réalise l’importance vitale d’une bonne méthode de travail. Nos fichiers sources doivent être d’une clarté absolue : des calques bien nommés et une structure logique pour qu'un collègue puisse reprendre le fichier en urgence."
  },
  {
    id: "affiche",
    title: "Affiche du Service Pédagogique",
    subtitle: "Dépliant-affiche 84 × 60 cm",
    context: "Conception d'un support hybride : plié c'est informatif, déplié c'est une affiche ludique.",
    illustrationId: "flowers_illustration",
    content: "Ce dépliant au format de 84 x 60 cm est un outil pour le service pédagogique. Sa construction est particulière : un côté, où l’on retrouve une mise en page bien structurée, avec les blocs de texte typiques d’un support informatif. De l’autre, une fois le document totalement ouvert, il se transforme et révèle une grande affiche ludique entièrement composée autour d’une illustration.\n\nCe projet m’a laissé la liberté d’imaginer tout un univers visuel. Je ne partais pas d’une page blanche, j’avais une image imposée comme point de départ, sur le thème de la porcelaine (trois tasses en équilibre, envahies par des tiges de fleurs grimpantes, oiseaux et libellules). J’ai dû m’approprier ces détails, les décortiquer pour qu’ils viennent nourrir et lier l’ensemble de ma propre composition.",
    lessons: "Je commence toujours par la disposition brute des textes pour que l'information reste claire et hiérarchisée. Une fois cette ossature validée, la partie créative (motifs, couleurs) prend le relais."
  },
  {
    id: "guide",
    title: "Guide d'Accueil du Musée",
    subtitle: "Livret d'intégration des nouveaux agents",
    context: "Modernisation d'un document administratif jugé trop austère.",
    illustrationId: "flowers_illustration",
    content: "Un coup de fraîcheur s’imposait pour ce document. C’est le livret d’accueil, celui qu’on glisse entre les mains des nouveaux employés à leur arrivée au musée pour leur présenter les bases. L’ancienne version avait fait son temps. Elle me semblait un peu trop académique, voire même redondante sur certains points.\n\nMon but était de casser cette image très stricte pour bâtir une mise en page beaucoup plus dynamique. Quand on doit transmettre un volume important d’informations textuelles, le risque est vite de décourager la personne en face. Une structure visuelle plus vivante change tout. C’est un super exercice de design.",
    lessons: "Réussir à rendre visuellement aéré, léger et accueillant un contenu qui, à la base, est plutôt lourd administrativement."
  },
  {
    id: "cubemrm",
    title: "Cube Informatique MRM",
    subtitle: "Signalétique grand format",
    context: "Habillage des structures cubiques disposées aux quatre coins du parc de Mariemont.",
    illustrationId: "cube_illustration",
    content: "Quand une période de rush arrive, le rythme s’accélère d’un coup et tout doit être réalisé au plus vite. C’est un stress assez particulier à gérer. Pour soulager ma maître de stage, j’ai accepté de prendre en charge ce projet de signalisation grand format.\n\nConcrètement, il était question de réaliser des bâches pour les grands cubes d’informations que l’on trouve dispersés dans le parc. L’exposition Marie de Hongrie se terminant, il fallait remplacer les anciens visuels. Le but était d’y afficher un texte de présentation générale sur le domaine de Mariemont. Pour que ce soit accessible à tous, chacune des faces du cube était attribuée à une langue : le français, le néerlandais et l'anglais, tandis que la face principale accueillait les promeneurs.",
    lessons: "Prendre en charge un projet non prévu a prouvé mon efficacité, mon engagement et ma capacité à garder la tête froide face à l'urgence."
  }
];

export const semainierData: DiaryMonth[] = [
  {
    name: "Février",
    entries: [
      { day: "02", text: "Adaptation PUB papier format 100×150 mm et web 960×150px pour sujet Marie de Hongrie." },
      { day: "03", text: "1ère réunion de service (revue du travail fait et à faire de manière hebdomadaire). Début « colloque », analyse du contenu + mise en page.", isHighlight: true },
      { day: "04", text: "Création de la V1 pour le visuel « colloque »." },
      { day: "05", text: "Apprentissage des règles typographiques + application sur « colloque »." },
      { day: "06", text: "Intégration du texte et des images dans la revue « Le Mariemont »." },
      { day: "07-08", text: "Weekend" },
      { day: "09", text: "Réunion avec Justine P. et Jean-Sébastien B. Suite intégration « Le Mariemont »." },
      { day: "10", text: "Réunion de service hebdomadaire. Visio avec Kathleen L. Adaptation du colloque V1 au format planche." },
      { day: "11", text: "Test de visuels en vrac pour la cover « Le Mariemont ». Bannière web pour le colloque." },
      { day: "12", text: "Réunion concernant les premières corrections du Mariemont. Travail sur trois propositions de cover + Début des corrections.", isHighlight: true },
      { day: "13", text: "Dernières retouches colloque. Corrections et retouche « Le Mariemont »." },
      { day: "14-15", text: "Weekend" },
      { day: "16", text: "Réunion de service. Retouches suite aux retours des partenaires du colloque." },
      { day: "17", text: "Nouveau jeu de corrections globales pour le MRM." },
      { day: "18", text: "Nouveau jeu de retouches du colloque et nouvelles propositions de cover pour la revue." },
      { day: "19", text: "Finalisation du colloque. Réalisation de nouvelles propositions concrètes pour la cover du MRM." },
      { day: "20", text: "Réunion Teams concernant le MRM. Choix et exploitation d'une piste pour la couverture." },
      { day: "21-22", text: "Weekend" },
      { day: "23", text: "Réunion avec Kathleen L. et Justine P. pour lancer le projet de panneaux d'itinérance MARY4ALL + Cartels FR vers NL.", isHighlight: true },
      { day: "24", text: "Réunion hebdomadaire. Proposition visuelle pour le rollup de MARY4ALL." },
      { day: "25", text: "Propositions pour les panneaux 1 et 2 de MARY4ALL. Début de la création des labels." },
      { day: "26", text: "Propositions de labels MARY4ALL + Cartels FR to NL. Shooting avec Andy pour affiche journée de clôture 11 mai." },
      { day: "27", text: "Journée en distanciel. Début des corrections des commentaires de Muhlberg sur les 3 labels de MARY4ALL." },
      { day: "28-29", text: "Weekend" }
    ]
  },
  {
    name: "Mars",
    entries: [
      { day: "02", text: "Réunion journée de clôture du 10 mai. Retouches colloque et panneaux d’itinérance. Recherches visuelles pour le rapport d’activité." },
      { day: "03", text: "Début de mise en page de la partie 2 du rapport d’activité. Corrections Muhlberg sur les panneaux d’itinérance." },
      { day: "04", text: "Réunion hebdomadaire. Dernières retouches panneaux d’itinérance. Revue des traductions manquantes avec Aline P. pour les cartels néerlandais.", isHighlight: true },
      { day: "05", text: "Rapport d’activité : finalisation de la partie 2." },
      { day: "06", text: "Journée distancielle. Compléments de traduction pour les cartels NL. Début de la partie 3 du rapport d'activité." },
      { day: "07-08", text: "Weekend" },
      { day: "09", text: "Jeu de corrections de la directrice de Muhlberg dans les labels 1, 2 et 3. Suite part 3 rapport d’activité. Assemblage des cartels NL." },
      { day: "10", text: "Réunion hebdomadaire. Suite part 3 mise en page du rapport d'activité." },
      { day: "11", text: "Corrections de format sur les labels + variantes « séparées » de MARY4ALL." },
      { day: "12", text: "Mise en page de la partie 3 du rapport d’activités." },
      { day: "13", text: "Fin de la partie 3 du rapport 2025." },
      { day: "14-15", text: "Weekend" },
      { day: "16", text: "Corrections de la partie 2 + début de la partie 4 du rapport d’activités." },
      { day: "17", text: "Réunion de service + suite de la mise en page de la partie 4." },
      { day: "18", text: "Journée distancielle, fin de la partie 4 + début de la partie 1." },
      { day: "19", text: "Mise en page de la partie 5 du rapport d'activités." },
      { day: "20", text: "Début de la partie 7 du rapport d'activités." },
      { day: "21-22", text: "Weekend" },
      { day: "23", text: "Découverte de la brasserie du musée + Suite de la partie 7.", isHighlight: true },
      { day: "24", text: "Réunion de service + fin de la déclinaison de la partie 7." },
      { day: "25", text: "Partie 6 du rapport 2025 (Sortie hors musée à la foire du livre)." },
      { day: "26", text: "Fin de la partie 6 + éditorial + page de garde du rapport + Jeux de corrections globaux." },
      { day: "27", text: "Finalisation complète du rapport d'activités 2025." },
      { day: "28-29", text: "Weekend" },
      { day: "30", text: "Recherches graphiques pour le dépliant de la journée Renaissance." },
      { day: "31", text: "Réunion hebdomadaire + Traduction espagnole MARY4ALL." }
    ]
  },
  {
    name: "Avril",
    entries: [
      { day: "01", text: "Première proposition de dépliant pour la journée Renaissance." },
      { day: "02", text: "Dîner de rencontre avec les stagiaires. Mise en page du programme du dépliant.", isHighlight: true },
      { day: "03", text: "Journée distancielle, application des premiers commentaires pour dépliant de la journée." },
      { day: "04-05", text: "Weekend" },
      { day: "06", text: "Lundi de Pâques (Férié)" },
      { day: "07", text: "Réunion de service. Revue critique du dépliant avec Justine P." },
      { day: "08", text: "Invitations journée Renaissance + intégration des nouveaux textes dans le dépliant." },
      { day: "09", text: "Corrections de Arnaud Q. sur les invitations + fin V1 du dépliant + rollup Coudenberg." },
      { day: "10", text: "Journée distancielle, recherches graphiques pour l'affiche du service pédagogique." },
      { day: "11-12", text: "Weekend" },
      { day: "13", text: "Jeu de corrections de Marie-Aude L. sur le dépliant de la journée du 10 mai.", isHighlight: true },
      { day: "14", text: "Réunion de service. Nouveau jeu de corrections appliqué sur le dépliant." },
      { day: "15", text: "Recherche et développement du dépliant-affiche pour le Service Pédagogique." },
      { day: "16", text: "Jeu de corrections du directeur appliqué aux dépliants de la journée." },
      { day: "17", text: "Placement précis des textes sur le dépliant-affiche pédagogique." },
      { day: "18-19", text: "Weekend" },
      { day: "20", text: "Team Building à Bruxelles ; visite de l’exposition « Retour à Pompeii » à Tour & Taxis.", isHighlight: true },
      { day: "21", text: "Réunion de service + suite de l'affiche du Service Pédagogique (SP)." },
      { day: "22", text: "Conception du rollup du programme de la journée du 10 mai." },
      { day: "23", text: "Découvertes photographiques en studio d'Art avec Andy + Rollup de la journée." },
      { day: "24", text: "Finalisation du rollup 10 mai, retouches avec Justine P. Suite de l'Affiche SP." },
      { day: "25-26", text: "Weekend" },
      { day: "27", text: "Télétravail, avancement sur l'affiche du Service Pédagogique." },
      { day: "28", text: "Visite de la Reine au musée (remise d'honneur). Réunion de service + conception des tickets." },
      { day: "29", text: "Recherches graphiques de style pour le guide d’accueil." },
      { day: "30", text: "Mise en page de la V1 du Guide d’accueil." }
    ]
  },
  {
    name: "Mai",
    entries: [
      { day: "01", text: "Fête du travail (Ferié)" },
      { day: "02-03", text: "Weekend" },
      { day: "04", text: "Réunion de service hebdomadaire. Jeu de corrections sur les tickets de l'événement." },
      { day: "05", text: "Visite de ma promotrice de stage au musée. Jeu de corrections sur l’Affiche SP + panneaux Renaissance.", isHighlight: true },
      { day: "06", text: "Jeu de corrections de l'Affiche SP + corrections du guide d’accueil. Aide pour Justine sur le cube MRM." },
      { day: "07", text: "Finalisation du Cube MRM. Jeu de corrections de l'Affiche SP et des panneaux MARY4ALL en espagnol." },
      { day: "08", text: "Jeu de corrections affiche SP. Nouveaux panneaux pour la journée du 10 mai." },
      { day: "09-10", text: "Weekend + Journée Renaissance (Événement de clôture au parc).", isHighlight: true },
      { day: "11", text: "Télétravail, réglage final des corrections de MARY4ALL ES. Finalisation du Guide d’accueil." },
      { day: "12", text: "Préparation technique du document d'impression grand format pour l'affiche SP (BAT)." },
      { day: "13", text: "Dernier jour du stage, clôture officielle et remise des fichiers sources à la graphiste.", isHighlight: true },
      { day: "14", text: "Ascension (Férié)" },
      { day: "15", text: "Faire le pont" },
      { day: "16-17", text: "Weekend" }
    ]
  }
];

export const artisticChoices = [
  {
    title: "Mise en page & Format",
    content: "Mise en page structurée de manière verticale et compacte, s'insérant dans un format étroit de 12,5 × 21 cm. Ce choix répond à une volonté de durabilité (optimisation de la feuille d'impression pour limiter la gâche et le gaspillage de papier) et de confort de lecture portatif, s'assimilant à un carnet pratique."
  },
  {
    title: "La Couleur : Bichromie Élégante",
    content: "L'utilisation d'une bichromie associant le Noir et le Rouge-orange répond à une volonté de lier impact visuel fort et symbolique. Le rouge possède une énergie de rayonnement qui attire immédiatement l'attention pour hiérarchiser l'information et faire passer les éléments importants au premier plan. Le noir structure et équilibre cette intensité chromatique, offrant une lisibilité optimale."
  },
  {
    title: "La Trilogie Typographique",
    content: "• Flood : Une police brute, peinte et nerveuse qui vient dynamiser la page et casser l'austérité administrative pour les grands titres.\n\n• Playfair Display : Dessin classique à empattement qui apporte une fine élégance de mise en page pour les sous-titres et relances.\n\n• Inter : Typographie sans empattement ultra-neutre, assurant un confort de lecture optimal pour les textes denses sans fatiguer l'œil."
  }
];

export const toolsData: ToolItem[] = [
  {
    name: "Adobe InDesign",
    type: "Mise en page & Edition",
    description: "L'outil roi pour combiner, orchestrer, et structurer les textes et les illustrations.",
    details: "Utilisé pour assembler le Rapport d'activités 2025, la revue Le Mariemont 2024, et automatiser les styles de paragraphes/caractères sur plus de 100 pages grâce aux scripts find-replace.",
    iconName: "Feather"
  },
  {
    name: "Adobe Illustrator",
    type: "Dessin Vectoriel",
    description: "Idéal pour concevoir tous les éléments de signalétique, tracés géométriques et logos.",
    details: "Utilisé pour la création des supports d'exposition MARY4ALL, la signalétique d'itinérance de la journée Renaissance, et les schémas d'habillage des structures cubiques.",
    iconName: "Compass"
  },
  {
    name: "Adobe Photoshop",
    type: "Traitement d'Image",
    description: "Utilisé pour traiter les bitmaps et calibrer les reproductions artistiques du photographe.",
    details: "Indispensable pour détourer, nettoyer les reflets de verre sur les objets du musée, et calibrer les couleurs des œuvres sous le profil colorimétrique d'impression.",
    iconName: "Layers"
  },
  {
    name: "Procreate on iPad",
    type: "Illustration de style",
    description: "Le studio d'illustration numérique idéal pour réaliser des esquisses organiques fluides.",
    details: "Utilisé pour dessiner toutes les illustrations rouges de style 'linogravure' du catalogue : les portraits de l'équipe, le chat sauvage, la Marie de Hongrie et le blason floral.",
    iconName: "PenTool"
  },
  {
    name: "Adobe Acrobat",
    type: "Suivi collaboratif",
    description: "Pour simplifier le circuit de correction et les échanges de BAT.",
    details: "Utilisé quotidiennement pour partager les épreuves PDF et centraliser les commentaires de correction des conservateurs, directeurs de musées et partenaires.",
    iconName: "CheckSquare"
  }
];

export const bonusItems: BonusItem[] = [
  {
    id: "shooting-pers",
    title: "Shooting des intervenants",
    subtitle: "Régie de plateau de portraits",
    content: "J’ai eu l’occasion d’assister le photographe lors d’un shooting organisé dans le parc du domaine. L’objectif était de capturer la bonne image pour concevoir l’affiche de l’événement « La Renaissance en Fête ». Participer à cette séance m’a fait réaliser tout le cheminement d’une image : des premières réflexions sur le terrain jusqu’à l’impression finale, en passant par la capture des clichés et la retouche graphique.",
    lesson: "Découverte complète des cycles de production d'un média visuel d'envergure événementielle."
  },
  {
    id: "shooting-art",
    title: "Shooting d'une Œuvre de collection",
    subtitle: "L'Aquamanile en studio",
    content: "La photographie a toujours été une passion pour moi. Mon bureau se trouvant juste à côté de celui d’Andy S., le photographe du musée, la proximité s'est transformée en un apprentissage enrichissant de bureau à bureau.\n\nUne matinée, j'ai assisté à une prise de vue de studio de l'Aquamanile, un étrange petit cheval métallique médiéval utilisé pour le lavage des mains. J'ai observé de près le placement des lumières, les réglages pour sublimer la matière brute de l'objet, ainsi que le respect des protocoles stricts de conservation :\n\n• Des gants pour éviter le sébum sur les pièces nettoyées.\n\n• La balance des blancs pour une exactitude colorimétrique indispensable pour la valeur scientifique.\n\n• Flashs de haute qualité à IRC élevé (CRI) respectant les couleurs.\n\n• Boîtier moyen format pour amasser le maximum de détails de texture.",
    lesson: "La photographie de musée dépasse la simple documentation, elle propose une rencontre sensible avec l'objet d'art."
  },
  {
    id: "ouverture-brasserie",
    title: "Ouverture de la brasserie",
    subtitle: "« L'Instant Mariemont » (23 mars)",
    content: "Toute l'équipe du musée a été conviée à l’inauguration de la nouvelle brasserie du domaine, « L’Instant Mariemont ». L'ambiance était très détendue. Le directeur a d'abord pris la parole pour son discours, puis les nouveaux gérants ont pris le relais avec une dégustation de produits locaux.\n\nCe moment chaleureux m'a permis de mettre enfin un nom sur tous ces visages que je croisais en coup de vent dans les couloirs. C'est incroyable la diversité des profils qu'on trouve dans une telle institution : techniciens du mapping vidéo, scénographes de montage, spécialistes de la reliure... Des métiers de l'ombre décisifs.",
    lesson: "Se lier à la communauté vivante qui anime les coulisses du musée au quotidien."
  },
  {
    id: "foire-livre",
    title: "La Foire du Livre de Bruxelles",
    subtitle: "Inspiration à Tour & Taxis",
    content: "Le service Publication a organisé une sortie collective à la célèbre Foire du Livre de Bruxelles, sous les immenses verrières de Tour & Taxis. Mon œil d’étudiant en design graphique a vite pris le dessus. Passant outre le contenu littéraire pur, je me suis saturé du livre comme objet physique : observation des grilles de mise en page audacieuses, touchers de papiers texturés spécifiques, découvertes de reliures d'arts et formats hors-normes.",
    lesson: "Une formidable dose d'inspiration technique et de conceptualisation pour mon travail TFE."
  },
  {
    id: "team-building",
    title: "Journée de Team Building",
    subtitle: "Expo romaine et convivialité",
    content: "Une journée conviviale en équipe organisée par le musée. Au programme : visite guidée de l'exposition immersive « Retour à Pompeii » à Bruxelles, suivie d'un repas décontracté dans un restaurant italien.\n\nAu cours de l'exposition, on a découvert la vie quotidienne romaine. J'y ai appris l'anecdote historique de l'origine de l’expression « L’argent n’a pas d’odeur » (Vespasien taxant l'urine utilisée comme détergent à Rome, prouvant à son fils que la précieuse pièce d'or collectée ne sentait pourtant rien).",
    lesson: "Renforcer l'esprit de corps et cultiver l'intelligence collective hors du contexte du bureau."
  },
  {
    id: "visite-royale",
    title: "Visite Royale d'Honneur",
    subtitle: "Rencontre de la Reine Mathilde",
    content: "Mon stage a réservé quelques surprises de prestige. Un matin, j’ai assisté au passage de la reine Mathilde de Belgique, venue spécialement au musée pour découvrir l’exposition consacrée à Marie de Hongrie.\n\nObserver cet événement de l'intérieur, avec le protocole d'organisation, le bain de foule feutré et l'attention médiatique accrue, donne une dimension très concrète et valorisante à notre travail. On réalise la portée de notre contribution.",
    lesson: "Prendre conscience de l'impact et de l'aura publique d'une grande institution muséale."
  }
];

export const evaluationText = `Mes objectifs de départ en postulant à ce lieu de stage étaient clairs. Je voulais acquérir un bagage professionnel assez solide pour m’attaquer au monde extérieur. Je cherchais à développer mes connaissances et mes techniques de mise en page. J’avais aussi besoin de trouver une vraie confiance en moi et en ce que je suis capable de produire. Tout ça en découvrant de l’intérieur le fonctionnement du secteur culturel.

Est-ce que ces objectifs ont été atteints ? Oui, franchement. Je pense avoir coché toutes les cases de mes attentes initiales. Bien sûr, je ne suis qu’au tout début de ma carrière. J’ai encore beaucoup à apprendre. Mais je pars avec ce sentiment rassurant de confiance et je me sens enfin prêt à l’emploi.

Au-delà de l’exécution graphique, j’ai acquis une meilleure compréhension de la chaîne éditoriale, de la conception à la finalisation technique.

RECEVOIR DES COMPOSITIONS :
Recevoir un nouveau projet amène son lot de questions, surtout sur le timing. Le grand défi est de réussir à s'adapter au type de production demandé, à la vitesse d’exécution et au niveau d'exigence. J’avais tendance à me fixer au début des objectifs extrêmes de fignolage intenable. On se rend vite compte qu’un travail bouclé en deux jours n’aura pas du tout la même finesse qu'un projet fignolé sur deux semaines. J’ai appris à hiérarchiser et adapter mon niveau de finition selon l'urgence.

DÉCOUPER L'URGENCE :
Mes toutes premières demandes ont été compliquées à interpréter. Traduire les mots de quelqu'un et deviner exactement ce à quoi il s'attend est un vrai défi. Au fil des semaines, j’ai fini par prendre de l’assurance et faire preuve d’une franchise indispensable pour obtenir d'emblée des consignes limpides sur ce que je devais réaliser. Comme dirait mon père : c'est en forgeant qu'on devient forgeron !`;

export const conclusionText = `Quinze semaines, ça file à une vitesse folle ! Surtout quand les journées sont rythmées par les bouclages, les allers-retours au bureau et les discussions animées dans les couloirs. Ce stage se clôture sur un bilan extrêmement positif.

Je suis arrivé au Domaine de Mariemont avec l’envie de bien faire. Je cherchais à valider mes acquis d’étudiant. Je repars finalement avec bien plus : j’ai saisi ce que signifiait réellement le métier de graphiste au quotidien dans une institution. Ce n’est pas juste aligner des blocs de texte de manière esthétique. C’est avant tout jongler avec des contraintes, traduire les attentes complexes d’un département, trouver des solutions de dernière minute face aux imprévus. C’est un vrai travail d’équipe.

Voir mes fichiers numériques prendre physiquement vie a provoqué un véritable déclic. Croiser des visiteurs dans le parc avec le dépliant que j’ai mis en page, ou apercevoir mes bâches habiller les grands cubes... C’est là que tout prend son sens. La théorie du bachelier a laissé place au concret. Les hésitations des premiers jours se sont effacées pour laisser place à une véritable méthode de travail robuste. Aujourd’hui, je connais mon rythme, je sais écouter, questionner, et adapter mon niveau d’exigence.

Cet ouvrage marque la ligne d’arrivée de mon cycle en Arts Appliqués, mais c’est aussi un point de départ. Je referme cette parenthèse à Mariemont, la porte du service Publication se referme doucement. Je me sens confiant et plus que prêt pour la suite !`;

export const glossaryEntries: GlossaryEntry[] = [
  { term: "HEPH", definition: "Haute école Provinciale de Hainaut Condorcet." },
  { term: "Bichromie", definition: "Technique d’impression utilisant seulement deux couleurs d’encre (ici, le rouge-orange chaud de Mariemont et le noir profond) pour maximiser l'impact visuel à moindre coût." },
  { term: "Bitmap", definition: "Image numérique composée d’une grille de points ou de pixels (comme les photographies de studio d'Andy), par opposition au dessin vectoriel." },
  { term: "Cartel", definition: "Petit panneau informatif d'explication textuelle placé directement à côté d’une œuvre exposée dans les salles ou le domaine du musée." },
  { term: "Gabarit", definition: "Modèle de page prédefini et structuré servant à conserver une continuité et une structure visuelle rigoureusement identique tout au long d’une publication." },
  { term: "Gâche", definition: "Quantité de papier techniquement et inévitablement perdue lors de la mise en route et des réglages de la presse d’imprimerie avant le lancement du tirage définitif." },
  { term: "Moodboard", definition: "Planche de tendances graphiques. Un assemblage d’images, de textures et de couleurs pour définir l’atmosphère visuelle et la direction artistique d’un projet avant de créer." },
  { term: "Rollup", definition: "Support de communication publicitaire mobile prenant la forme d’une grande affiche en toile verticale qui s’enroule de manière portative dans un socle métallique posé au sol." },
  { term: "Vectoriel", definition: "Image composée de tracés géométriques et de formules mathématiques. Un dessin vectoriel possède l'avantage de pouvoir être agrandi à l'infini sans jamais perdre en netteté." }
];

export const bibliographyEntries: BibliographyEntry[] = [
  { author: "MUSÉE ROYAL DE MARIEMONT", title: "L’Histoire du Domaine de Mariemont", details: "Recueilli sur le portail officiel de l'institution, 2026. Référence : https://www.mariemont.be" },
  { author: "BEHANCE GALLERY", title: "Graphic Design Editorial Exhibition Showcase", details: "Plateforme artistique de référence internationale étudiée pour l'inspiration de mise en page des dépliants-affiches." },
  { author: "HOCHULI, J.", title: "Le détail en typographie", details: "Paris : Éditions B42, 2010. Ouvrage spécialisé sur l'analyse de l'usure de l'œil, démontrant qu'une ligne étroite ne dépassant pas 60 à 70 caractères optimise le confort de lecture." },
  { author: "SUTTON, T. et WHELAN, B. M.", title: "L’harmonie des couleurs : Le guide", details: "Paris : Pyramyd, 2004. Manuel de référence pour la sélection du contraste de la bichromie noir et rouge-orange." },
  { author: "WIKIPÉDIA", title: "Vespasien et l'économie romaine", details: "Encyclopédie d'histoire antique, notice consultée en mai 2026." }
];
