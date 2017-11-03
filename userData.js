function UserData() {
    this.userData = {
        name: '',
        surname: '',
        age: '',
        gender: 'female',
        position: ''
    };
    this.elem = null;
};

UserData.prototype.render = function() {
    this.elem = $('<form>');
    this.elem.addClass('user_data_form');
    this.renderFields();
    return this.elem;
};

UserData.prototype.renderFields = function() {
    var inputs = _.map(this.userData, function(value, key) {
        var input = $('<input>');
        input.attr('placeholder', key);
        input.val(value);
        input.on('keyup', function(e) {
            this.userData[key] = e.target.value;
        }.bind(this));

        return input;
    }, this);

    this.elem.append(inputs);
};

UserData.prototype.destroy = function() {
    if (this.elem) {
        this.elem.empty();
        this.elem = null;
    }
};

UserData.prototype.onSubmit = function() {
    return false;
};

UserData.prototype.getData = function() {
    return this.userData;
};
