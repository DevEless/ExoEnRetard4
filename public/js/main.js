const vieille_dame = {
    âge: 90,
    nom: {
        prenom: 'Marie',
        nom_de_famille: 'Dupont'
    },
    moral: 'mal',
    objet: 'teub',
    parler: function () {
        if (this.moral === 'mal') {
            alert(`Vous me dérangez et je vous frappe avec ma ${this.objet}!`);
        } else {
            alert(`Bonjour, je m'appelle ${this.nom.prenom} ${this.nom.nom_de_famille}`);
        }
    }
};

const vieil_homme = {
    nom: 'Paul',
    adoucir: function (personnage) {
        personnage.moral = 'bien';
    }
};

vieille_dame.parler();
vieil_homme.adoucir(vieille_dame);
vieille_dame.parler();