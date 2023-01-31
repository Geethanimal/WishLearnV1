export interface User {
    fname?: string;
    lname?: string;
    pno?: string;
    email?: string;
    dob?: string;
    gender?: 'male' | 'female';
    type?:'teacher'|'student';
    pw?:string;
    _id?: string;
}
