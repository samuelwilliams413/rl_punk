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
Game.Item.prototype.isEquipment = function() {
    return this._equipment;
};
Game.Item.prototype.isBreakable = function() {
    return this._breakable;
};
Game.Item.prototype.isBlockingLight = function() {
    return this._blocksLight;
};

Game.Item.prototype.getDescription = function() {
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


Game.Item.prototype.getAction = function() {
    return this._action;
};
