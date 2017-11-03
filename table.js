function Table() {
    this.element = null;
    this.children = [];
};

Table.prototype.render = function() {
    this.elem = $('<div>');
    this.elem.addClass('user_data_table');
    return this.elem;
};

Table.prototype.addChild = function() {
    var child = new UserData();
    this.children.push(child);
    this.elem.append(child.render());
};

Table.prototype.addExtendedChild = function() {
    var child = new ExtendedUserData();
    this.children.push(child);
    this.elem.append(child.render());
};

Table.prototype.destroy = function() {
    this.elem.empty();
    this.children.forEach(function(child) {
        child.destroy();
    });
    this.elem = null;
    this.children = [];
};

Table.prototype.getData = function() {
    return _.map(this.children, function(child) {
        return child.getData();
    });
};
