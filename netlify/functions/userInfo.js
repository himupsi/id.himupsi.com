const userInfos = require("../userInfos");

exports.handler = async function (event, context) {
    const { cookies } = context;
    const authId = cookies.get('HIM_AUTH');
    const userId = userInfos.authIdUserMap[authId];

    if (authId === null || userId === undefined) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: '로그인되지 않았습니다.' }),
        };
    }
    const { name, avatar } = userInfos.users[userId] || {};
    return {
        statusCode: 200,
        body: JSON.stringify({
            name,
            avatar,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    };
};
