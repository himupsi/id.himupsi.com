const userInfos = require("../userInfos");

exports.handler = async function (event, context) {
    const { cookies } = context;
    const authId = cookies.get('HIM_AUTH');
    const userId = userInfos.authIdUserMap[authId];

    if (uid === null || userId === undefined) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: '로그인되지 않았습니다.' }),
        };
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify(JSON.stringify(userInfos.users[userId])),
        headers: {
            'Content-Type': 'application/json',
        }
    };
};
