Game.Item = function(properties) {
    properties = properties || {};
    // Call the dynamic glyph's construtor with our set of properties
    Game.DynamicGlyph.call(this, properties);
    // Instantiate any properties from the passed object
    this._x = properties['x'] || 0;
    this._y = properties['y'] || 0;
    this._map = null;
    this._equipment = properties['equipment'] || false;
    this._breakable = properties['breakable'] || false;
    this._blocksLight = properties['blocksLight'] || false;

    this._description = properties['description'] || "";
    this._value = properties['value'] || 0;
    this._damage = properties['damage'] || 0;
    this._defence = properties['defence'] || 0;

    this._action = properties['action'] || undefined;
};
// Make entities inherit all the functionality from dynamic glyphs
Game.Item.extend(Game.DynamicGlyph);

Game.Item.prototype.setX = function(x) {
    this._x = x;
};
Game.Item.prototype.setY = function(y) {
    this._y = y;
};
Game.Item.prototype.getX = function() {
    return this._x;
};
Game.Item.prototype.getY   = function() {
    return this._y;
};
Game.Item.prototype.setMap = function(map) {
    this._map = map;
};

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
