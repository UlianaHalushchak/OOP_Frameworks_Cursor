function ExtendedUserData () {
    UserData.call(this);
    _.extend(this.userData, {
        role: 'manager',
        works: 'yes'
    });
};

ExtendedUserData.prototype = Object.create(UserData.prototype);
ExtendedUserData.prototype.constructor = ExtendedUserData;
