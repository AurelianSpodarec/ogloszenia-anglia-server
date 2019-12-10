class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        this.listUsers = this.listUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getUser = this.getUser.bind(this);
        this._extractFields = this._extractFields.bind(this);
    }

    async listUsers(offset = 0, limit = 0, fields = []) {
        const users = await this.UserModel.find({ deleted: false }, null, {
            skip: offset,
            limit
        })

        if (fields.length < 1) return users;

        return Array.from(users).map(user => {
            return this._extractFields(user, fields)
        })
    }

    getUserByEmail(email) {
        return this.UserModel.findOne({ email })
    }

    async getUserById(userId) {
        return await this.UserModel.findById(userId);
    }

    async getUser(username, password) {
        return await this.UserModel.findOne({ username, password })
    }

    // async createUser(user) {
    //     console.log("MOOOOOOOOOMMMMOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", user)
    //     const newUser = new this.UserModel(user);
    //     // return await newUser.save();
    //     return await newUser.save();
    //     // return newUser;
    // }
    createUser(firstName) {
        const user = new this.UserModel({ firstName });
        return user.save();
    }

    async updateUser(userId, firstName, lastName) {

    }

    async deleteUser(userId) {
        const user = await this.UserModel.findById(userId);
        user.deleted = true;
        return user.save();
    }

    async registerUser(email, password) {
        const isUser = await this.getUserByEmail(email);

        if (isUser) {
            throw new Error("There is already a user with that email");
        }

        const hash = await bcrypt.hash(password, SLAT_ROUNDS);
        return this.createUser(email, hash);
    }

    _extractFields(user, fields) {
        if (fields.length < 1) return user;
        const result = fields.reduce((acc, field) => {
            acc[field] = user[field];
            return acc;
        }, {});

        return result;
    }
}

module.exports = UserService;