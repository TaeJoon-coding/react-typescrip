// DATABASE)永久保存エリア => 不変性を持つ。

interface Developer {
    name: string;
    age: number;
    position: string;
}

let newcomer: Developer = {
    name: "Tommy",
    age: 30,
    position: "Frontend",
};