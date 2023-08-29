class User03 {
    constructor() {
        this.x = 10;
        this.y = 10; // private 과 비슷, 약간의 확장성
    }
}
class NewUser03 extends User03 {
    constructor() {
        super(...arguments);
        //   x = 30; // Error
        this.y = 20;
    }
    doSomething() {
        this.y = 50;
    }
}
let human = new NewUser03();
console.log(human);
class User04 {
    constructor() {
        this.y = 20;
    }
}
User04.x = 10; // 부모만 사용 가능하게끔. (자식에게 물려주지 않음) // extends 로 따라 붙어감. // private // public 과 함께 사용 가능.
let child = new User04();
console.log(child);
// console.log(User04.x); // Error
// console.log(User04.y); // Error
class User05 {
    constructor() {
        //   intro = "student";
        //   intro = this.skill + "student";
        this.intro = User05.skill + "student";
        //   constructor(a) {}
    }
}
User05.skill = "frontEnd ";
let asj01 = new User05();
console.log(asj01);
User05.skill = "TS ";
let asj02 = new User05();
console.log(asj02);
// TODO : (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
/*class User {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}*/
//   누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
//   친구가 물어봤을 때 어떻게 답해줄 것입니까
//? solution
// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
// User의 자식들은 x와 y를 쓸 수 없습니다.
// 2. private static x는 class 내부에서만 수정가능합니다.
// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
// TODO : (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
/*class User {
    private static x = 10;
    public static y = 20;
  }
  User.addOne(3) //이렇게 하면 x가 3 더해져야함
  User.addOne(4) //이렇게 하면 x가 4 더해져야함
  User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함*/
//   저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
//   그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
//   (조건) private static x = 10; 이 코드 수정금지
//   답은 다음강의에
class HomeWorkUser {
    static addOne(a) {
        HomeWorkUser.x += a;
    }
    static printX() {
        console.log(HomeWorkUser.x);
    }
}
HomeWorkUser.x = 10;
HomeWorkUser.y = 20;
HomeWorkUser.addOne(3);
HomeWorkUser.addOne(4);
HomeWorkUser.printX();
//? solution
// 일단 static 속성들은 class에 직접 부여되는 속성이랬습니다.
// 그래서 static 속성을 수정하거나 가져다 쓰고 싶으면
// 그냥 클래스명.속성명 이렇게 하면 나옵니다.
class UserSolution {
    static addOne(파라미터) {
        UserSolution.x += 파라미터;
    }
    static printX() {
        console.log(UserSolution.x);
    }
}
UserSolution.x = 10;
UserSolution.y = 20;
UserSolution.addOne(3);
UserSolution.addOne(10);
UserSolution.printX();
// 그래서 1. addOne() 함수를 만들었습니다. 그리고 static을 붙여줬음
// 그러면 이제 User.addOne() 이렇게 쓸 수 있으니까요.
// 2. addOne(파라미터) 실행하면 x속성에 파라미터만큼 더해달라고 했습니다.
// 3. 그리고 printX() 실행하면 콘솔창에 User.x 출력해달라고 했습니다.
// 의도대로 잘 동작하는 군요.
// TODO : (숙제3) 이런거 어떻게 만들게요
// 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
/*let 네모 = new HomeWorkSquare(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();*/
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
class HomeWorkSquare {
    constructor(a, b, c) {
        this.x = a;
        this.y = b;
        this.color = c;
    }
    draw() {
        let body = document.querySelector("body");
        const newDiv = document.createElement("div");
    }
}
let 네모 = new HomeWorkSquare(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
//? solution
// 일단 index.html 안에 타입스크립트가 변환된 js 파일 첨부가 잘 되어있는지 확인하시고
// (index.html 내부)
// <body>
//   <script src="index.js"></script>
// </body>
// 그 다음에 저는 이렇게 만들었습니다.
class SquareSolution {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let a = Math.random();
        let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
        document.body.insertAdjacentHTML("beforeend", square);
    }
}
let Square = new SquareSolution(30, 30, "red");
Square.draw();
Square.draw();
Square.draw();
Square.draw();
// 1. constructor를 이용해서 새로뽑는 object 들은 width, height, color를 입력할 수 있게 만들었습니다.
// 2. 자식들은 draw()를 쓰면
// (1) 0과 1사이의 무작위 숫자를 뽑습니다. 그걸 변수 a에 저장해둡니다.
// (2) <div>를 디자인합니다. 근데 <div>박스의 폭, 높이, 색상은 constructor로 입력한 것들을 활용합니다.
// (3) <div> 박스의 위치는 left, right 속성을 이용해서 0~400px 사이로 무작위로 배치합니다.
// (4) insertAdjacentHTML 이런거 이용하면 원하는 곳에 html 추가가 가능합니다.
// 그래서 실제로 자식을 하나 뽑아서 draw() 했더니 진짜 빨간 박스 4개 나옵니다.
// 다른 사이즈, 다른 색상으로도 뽑아서 draw() 이것도 가능하겠군요
