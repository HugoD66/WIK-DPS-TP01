<h1>Création API Sommaire </h1>

<h2>Prérequis<h2/>
<ul>
<li>Node.js</li>
<li>npm</li>
</ul>

<h2>Installation<h2/>

Clonez ce dépôt : 

<code>git clone https://github.com/HugoD66/WIK-DPS-TP01.git </code>

Accédez au répertoir du projet 

<code>cd nom-projet</code>

Installation des dépendances :

<code>npm install</code>

<h2>Configuration<h2/>

Créez un fichier .env à la racine du projet et configurez les variables d'environnement nécessaires. Consultez le fichier .env.example pour des exemples de variables à définir.

<h2>Lancement du projet<h2/>

<code>node build/index.js</code>

Le serveur démarrera à l'adresse http://localhost:3000 (ou à l'adresse spécifiée dans vos variables d'environnement).

<h2>Utilisation<h2/>

Lors de l'accés à l'adresse http://localhost:3000 où autre,  il n'y aura en effet aucun retour.</br>
Par contre,  http://localhost:3000/ping retournera en format JSON les informations de l'header de la requete !