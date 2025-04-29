import {atom} from 'jotai';

export const userDetailsAtom = atom({firstName: '', lastName: '', dob: '', occupation: '', email: '', password: '', college: '', department: '', district: '', domain: '', degree: '', country: 'India', state: '', city: ''});
export const tempPassAtom = atom('');
