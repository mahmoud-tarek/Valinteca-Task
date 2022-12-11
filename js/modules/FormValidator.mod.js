export default class FormValidator {
    static FEILDS = [
        {
            name: 'username',
            regex: /^[a-z]([\w^_]){3,13}[a-z]$/i,
            message: `Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no
                    numbers at the beginning or the end, ahmed0saber is valid, 0ahmedsaber is not valid,
                    ahmedsaber0 is not valid, ahmed_saber is not valid, etc...`
        },
        {
            name: 'email',
            regex: /^([\w\.\-]+)@([\w\-])+\.(\w+)$/i,
            message: `Email must be in this format name@domain.ext`
        }
        ,
        {
            name: 'password',
            regex: /^.{8,}$/,
            message: `Password must be at least 8 characters`
        },
        {
            name: 'confirm_password',
            message: 'Confirm Password Feild must be like Password',
            method(argsObj) {
                return argsObj.value === argsObj.form.password.value ? true : false;
            }
        }
    ];

    static isValid(feild) {
        const _feild = this.FEILDS.find(_feild => _feild.name === feild.name);
        return _feild.regex.test(feild.value) ? true : false;
    }
};
