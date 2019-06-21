// Create our central Item repository
Game.ItemRepository = new Game.Repository('items', Game.Item);

Game.ItemRepository.define('Soycaf', {
    character: 'c',
    foreground: 'yellow',
    description: 'A cup of soycaf (tm)',
    value: 1
});


Game.ItemRepository.define('Smokes', {
    character: 's',
    foreground: 'yellow',
    description: 'A pack of smokes',
    value: 1
});
