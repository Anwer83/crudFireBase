import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) {}


   AddStudent(student: Student) {
    return this.firestore.collection('id').add(student);
    // la fonction collection prend en paramètre le nom de la collection firebase
    }
    
   
}
