type Animal = string | number | undefined;
declare let animal: Animal;
type AnimalType = {
    name: string;
    age?: number;
};
declare let animal2: AnimalType;
declare const birthLocation: string;
type place = {
    readonly region?: string;
};
declare const where: place;
type Name = string;
type Age = number;
type person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewPostion = PositionX & PositionY;
declare let postition: NewPostion;
type PositionZ = {
    x: number;
};
type PositionW = {
    x: number;
};
type PositionQ = {
    y: number;
};
type NewPostion2 = PositionW & PositionZ;
type Color = {
    color?: string;
};
type Size = {
    size: number;
};
type Position = readonly number[];
type Square = {
    color?: string;
    size: number;
    readonly position: number[];
};
type ManName = {
    name: string;
};
type Phone = {
    phone: number;
};
type Email = {
    email?: string;
};
type Man = ManName & Phone & Email;
declare let man: Man;
type User_ = {
    UserName: string;
    UserEmail?: string;
    UserPhone: number;
};
declare let 회원가입정보: User_;
type User__ = {
    UserName: string;
    UserEmail?: string;
    UserPhone: number;
    adult?: boolean;
};
declare let 회원가입정보_: User__;
type User___ = {
    name: string;
    email?: string;
    phone: number;
};
type Adult = {
    adult: boolean;
};
type NewUser = User___ & Adult;
declare let 회원가입정보___: NewUser;
