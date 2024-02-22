function stats (playerType, healthPoints,damageMultiplicator,defenseMultiplicator,walkSpeed,jumpPower) {
    this.playerType = playerType;
    this.healthPoints = healthPoints;
    this.damageMultiplicator = damageMultiplicator;
    this.defenseMultiplicator = defenseMultiplicator;
    this.walkSpeed = walkSpeed;
    this.jumpPower = jumpPower;
    this.hasRagdollImmunity = false;

    this.playerDescription = function () { 
        console.log(`The ${this.playerType} has the next stats:
        - Health Points: ${this.healthPoints}
        - Damage Multiplier: x${this.damageMultiplicator}
        - Defense Multiplier: ${this.defenseMultiplicator}%
        - Walkspeed: ${this.walkSpeed}
        - Jump Power: ${this.jumpPower}
        - Is immune to ragdoll?: ${this.hasRagdollImmunity ? "Yes" : "No"}
        `)
    }

    this.getRagdollImmunity = function () {
        this.hasRagdollImmunity = true;
        console.log(`${this.playerType} got Ragdoll Immunity!
        `)
    }
    
}

const player1 = new stats("juggernaut",3000,0.75,25,18,40)
const player2 = new stats("Merc", 100,1,0,16,50)

const listaFrutas = ["Pera","Manzana", "Banana", "Uva", "Naranja"]

for (fruta of listaFrutas) {
    console.log(fruta)
}

listaFrutas.forEach(a => {
    console.log(a)
});