class UserService {

    constructor() {
        this.users = new Map();
        this.users.set("admin","admin");
    }

    isUserExists(username) {
        return this.users.has(username);
    }

    login(username,password) {
        if (this.users.get(username) === password) {
            return true;
        } else {
            return false;
        }
    }

    register(credentials) {
        if (this.users.has(credentials.username)) {
            return {
                status: false,
                reason: 'User already exists'
            }
        } else {
            this.users.set(credentials.username, credentials.password);
            return {
                status: true
            }
        }
    }
}

module.exports = UserService;