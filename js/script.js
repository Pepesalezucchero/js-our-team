/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
Creare l’array di oggetti con le informazioni fornite.
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/

//creare un array di oggetti per rappresentare i membri del team.
const arrayTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-gordon-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    },
];

//stampo su console ogni membro del team con le loro informazioni
for (let i = 0; i < arrayTeam.length; i++) {

    let singoloTeam = arrayTeam[i];
    console.log(singoloTeam);

    /*
    //separo le informazioni
    let singolaInformazioneNome = singoloTeam.nome;
    let singolaInformazioneRuolo = singoloTeam.ruolo;
    let singolaInformazioneFoto = singoloTeam.foto;
    console.log(singolaInformazioneNome, singolaInformazioneRuolo, singolaInformazioneFoto);
    */

    //stampo le stesse informazioni su DOM sotto forma di stringhe
    const userDocumento = document.querySelector(".documento");
    userDocumento.append("Nome e Cognome: " + singoloTeam.nome);
    const spazio = document.createElement("br");
    userDocumento.append(spazio);
    userDocumento.append("Ruolo: " + singoloTeam.ruolo);
    userDocumento.append(spazio);
    userDocumento.append("Foto: " + singoloTeam.foto);
    userDocumento.append(spazio);
};