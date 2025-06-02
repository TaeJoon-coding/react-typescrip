const pool = require('./mariaDBPool');

// https://ko.javascript.info/import-export
let dao = {

    // insertUser function
    insertUser : async function(user) {

        let conn; 
        let msg;

        try {
            conn = await pool.getConnection();
            console.log("connection : ", conn);

            // https://github.com/mariadb-corporation/mariadb-connector-nodejs/blob/master/documentation/promise-api.md#close--void
            const res = await conn.query('INSERT INTO temp_user VALUES (?, ?, ?, ?)', 
                                        [user.name, user.email, user.phone, user.description]);

            // console.log(res);
            msg = "保存成功";

        } catch (err) {

            console.error("err :", err);
            msg = "保存失敗";

        } finally {

            if (conn == true) 
                await conn.end();
                // pool.end();
        } //

        console.log("insertUser msg : ", msg);

        return await msg; 
    
    } // insertUser

} // class

module.exports = dao;