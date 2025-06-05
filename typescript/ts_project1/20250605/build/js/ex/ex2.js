"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "조병민",
    role: Role.ADMIN,
};
const user2 = {
    name: "서주예",
    role: Role.USER,
};
const user3 = {
    name: "김소희",
    role: Role.GUEST,
};
// roleとは役割、
