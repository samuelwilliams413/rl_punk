// Player template
Game.PlayerTemplate = {
    name: 'you',
    character: '@',
    foreground: 'white',
    maxHp: 10,
    maxFavor: 3,
    attackValue: 2,
    sightRadius: 6,
    mixins: [Game.EntityMixins.PlayerActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.Sight, Game.EntityMixins.MessageRecipient,
             Game.EntityMixins.Pious, Game.EntityMixins.BuffGetter]
};

// Create our central entity repository
Game.EntityRepository = new Game.Repository('entities', Game.Entity);

Game.EntityRepository.define('Sarariman', {
    name: 'Sarariman',
    character: 'S',
    foreground: 'red',
    maxHp: 4,
    defenseValue: 1,
    sightRadius: 5,
    tasks: ['hunt', 'wander'],
    description: 'Suit blocks 1 point of damage.',
    mixins: [Game.EntityMixins.TaskActor, Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper]
});

Game.EntityRepository.define('mutant', {
    name: 'mutant',
    character: 'm',
    foreground: 'green',
    speed: 1500,
    maxHp: 2,
    defenseValue: 0,
    sightRadius: 5,
    tasks: ['slimeHunt', 'slime'],
    description: 'Leaves toxic slime trails. Fast.',
    mixins: [Game.EntityMixins.TaskActor, Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper]
});
