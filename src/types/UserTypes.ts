export interface DoctorSignUpDataType {
  name: string;
  profilePic: string;
  specialty: string;
  email: string;
  phone: string;
  password: string;
  experience: number | undefined;
}

export interface PatientSignUpDataType {
  name: string;
  profilePic: string;
  age: number | undefined;
  email: string;
  phone: string;
  password: string;
  historyOfSurgery?: string[];
  historyOfIllness?: string[];
}
