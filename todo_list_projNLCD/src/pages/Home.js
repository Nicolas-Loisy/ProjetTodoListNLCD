import '../App.css';

export default function Home(){
  return(
    <>
    <p>Bienvenue sur notre site web de todo-list !</p>
    <p>L'objectif de ce site est de créer des listes composées de plusieurs cartes (post-it).</p>
    <p>Le premier onglet "Catalogue des Listes" permet de parcourir les listes et d'accéder à leurs cartes. </p>
    <p>Fonctionnalités : 
    <br></br>- Ajout d'une liste (en renseignant son nom).
    <br></br>- Suppression d'une liste (en cliquant sur le logo poubelle).
    <br></br>- Consultation des cartes d'une liste (en cliquant sur la flèche).</p>
    <p>Consultation des cartes d'une liste.</p> 
    <p>Fonctionnalités :
    
    <br></br>- Ajout de carte en cliquant sur le bouton en bas à gauche "+ Ajouter une carte". Il faudra alors renseigner le titre de la carte, son type (soit type "Texte" soit type "Checkbox") et son contenu. Si la carte est de type "Texte", le contenu de la carte est semblable à un bloc de texte. Cependant, si la carte est de type "Checkbox", un bouton "+ Ajouter une checkbox" apparaît permettant de créer une liste à puce.
    <br></br>- Modification de carte en cliquant sur le bouton avec un crayon. Si la carte est de type "Texte", vous pouvez modifier le bloc de texte. Et si elle est de type "Checkbox", il est possible de rajouter des éléments à la liste à puce ou d'en supprimer.
    <br></br>- Suppression de carte en cliquant sur le bouton poubelle.
    <br></br>- Une barre de recherche permettant d'afficher les cartes ayant soit dans son titre soit dans son contenu la valeur entrée dans la barre de recherche.
    <br></br>Le second onglet "Ma map" est une fonctionnalité abandonnée qui aurait permis à l'utilisateur d'ajouter des points d'intérêt sur une map semblable à google maps.</p>
    </>
  ); 
  
  // <Container maxWidth="sm">
  //   <Link to="/listes">Catalogue des Listes</Link><br/>
  //   <Link to="/MyMap">Ma map</Link><br/>
  // </Container>
}
