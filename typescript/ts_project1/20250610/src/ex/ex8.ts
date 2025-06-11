interface Developer {
  name: string;
  age: number;
  job: string;
}

interface FrontendDeveloper extends Developer {
  frontendSkills: string[];
}

interface BackendDeveloper extends Developer {
  backendSkills: string[];
}

interface FullStackDeveloper extends FrontendDeveloper, BackendDeveloper {
  // FullStackDeveloper를 위한 추가적인 프로퍼티나 메서드 정의 가능
}

let myInfo: FullStackDeveloper = {
  name: "Wade",
  age: 24,
  job: "Full Stack Developer",
  frontendSkills: ["HTML", "CSS", "JavaScript"],
  backendSkills: ["Node.js", "Express"],
};