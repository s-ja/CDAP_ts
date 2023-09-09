declare let myName: string;
declare let myUsers: string[];
declare let testObject: {
    name?: string;
};
declare let testName: string | number;
type TestType = string | number | boolean;
declare let typeTest: TestType;
declare function testFunction(x: number): number;
type Member = [number, boolean];
declare let asj: Member;
type NewMember = {
    name: string;
    [key: string]: string;
};
declare let jhon: NewMember;
declare class User {
    name: string;
    constructor(name: string);
}
declare let myLastName: string;
declare let myAge: number;
declare let myBirthPlace: string;
declare let favSongAndArtist: {
    song: string;
    artist: string;
};
declare let project: {
    member: string[];
    days: number;
    started: boolean;
};
