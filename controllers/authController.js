const { accountDB } = require('./dbConfig/dbConfig');

const postLogin = (req, res) => {
    let userName = req?.body.userName, passWord = req?.body.passWord;
    const obj = {
        userNameData: userName,
        passWordData: passWord,
    }

    if (userName === '' || passWord === '') {
        return res.json("Username and Password can't be empty !");
    }
    else {
        return accountDB.findOne(
            {
                userName: obj.userNameData,
                passWord: obj.passWordData
            }
        ), (err, result) => {
            console.log('dwadawd')
            if(err) {
                handleError(err);
            } else {
                let data = {
                    accessToken: 'adawdawcasc323423fwefwe',
                    refreshToken: 'dawdwadwaf3t23tewfwefewfe',
                }
                return res.json(data);
            }
        }
    }
}

module.exports = {
    postLogin
}