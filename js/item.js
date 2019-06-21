Game.Item = function(properties) {
    properties = properties || {};
    Game.Glyph.call(this, properties);
    this._equipment = properties['equipment'] || false;
    this._breakable = properties['breakable'] || false;
    this._blocksLight = properties['blocksLight'] || false;

    this._description = properties['description'] || "";
    this._value = properties['value'] || 0;
    this._damage = properties['damage'] || 0;
    this._defence = properties['defence'] || 0;

    this._action = properties['action'] || undefined;
};
Game.Item.extend(Game.Glyph);

// Standard getters
Game.Tile.prototype.isEquipment = function() {
    return this._equipment;
};
Game.Tile.prototype.isBreakable = function() {
    return this._breakable;
};
Game.Tile.prototype.isBlockingLight = function() {
    return this._blocksLight;
};

Game.Tile.prototype.getDescription = function() {
    return this._description;
};
Game.Item.prototype.getValue = function() {
    return this._value;
};
Game.Item.prototype.getDamage = function() {
    return this._damage;
};
Game.Item.prototype.getDefence = function() {
    return this._defence;
};


Game.Tile.prototype.getAction = function() {
    return this._action;
};

Game.Item.nullItem = new Game.Item({description: '(unknown)'});


Game.Tile.soycafItem = new Game.Item({
    character: 'c',
    foreground: 'yellow',
    description: 'A cup of soycaf (tm)',
    defence: true,
    value: 1
});