# TP 5 : Mini-Projet Docker

Afin de préparer le développement dans de bonnes conditions de mon 
mini-projet Angular, ainsi que sa mise
en production ultérieure, mon travail dans ce projet est de proposer 
un environnement adapté au
fonctionnement de mon mini-projet Angular, en utilisant mes connaissances, 
tout en assurant un déploiement
simple pour l’utilisateur qui souhaiterait utiliser votre projet.




### Contenu du projet

<ul>
    <li>Un readme correctement rédigé explicatif pour le déploiement de l'environnement docker proposer</li>
    <li>Un docker-compose.yml permettant de lancer l'environnement docker</li>
    <li>Eventuellement une arborescence pour le dépôt des différents fichiers sources / données du projet
    les dockerfiles éventuels si nécessaires.</li>
</ul>

### Prérequis

<ul>
    <li><a href="https://docs.docker.com/install/">Installer Docker</a></li>
    <li><a href="https://docs.docker.com/compose/install/">Installer Docker Compose</a></li>
</ul>

### Installation

1. Cloner le projet
2. Se placer dans le dossier du projet
3. Lancer la commande `docker-compose config` pour vérifier la configuration
4. Lancer la commande `docker-compose up -d`
5. Se rendre sur `http://localhost:4200/`


### Architecture

<ul>
    <li>Le projet est composé de 3 containers :</li>
    <ul>
        <li>Un fichier .dockerignore pour ignorer les fichiers inutiles au build</li>
        <li>Un fichier Dockerfile pour le build de l'image du container ainsi que json-server</li>
        <li>Un fichier docker-compose.yml pour le lancement des containers</li>
        <li>Un fichier README.md pour expliquer le projet</li>
        <li>Un dossier Angular contenant le code source du projet</li>
    </ul>
</ul>

#### Dockerfile

Ce Dockerfile est en deux stages :
- Le premier stage (angular) permet de récupérer les dépendances du projet
- Le second stage (json-server) permet de récupérer les dépendances de json-server

#### docker-compose.yml

Ce fichier permet de lancer les containers nécessaires au projet.

#### Angular

Ce dossier contient le code source du projet Angular.
