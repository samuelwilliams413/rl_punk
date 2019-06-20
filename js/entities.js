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
    maxHp: 3,
    defenseValue: 1,
    sightRadius: 5,
    tasks: ['hunt', 'wander'],
    description: 'Suit blocks 1 point of damage.',
    mixins: [Game.EntityMixins.TaskActor, Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper]
});

Game.EntityRepository.define('guard snail', {
    name: 'guard snail',
    character: 's',
    foreground: 'green',
    speed: 500,
    maxHp: 3,
    defenseValue: 1,
    sightRadius: 5,
    tasks: ['slimeHunt', 'slime'],
    description: 'Hard shell. Leaves toxic slime trails. Slow.',
    mixins: [Game.EntityMixins.TaskActor, Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper]
});
