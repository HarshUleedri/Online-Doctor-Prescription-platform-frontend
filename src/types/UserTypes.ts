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
export interface DoctorDataType {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  profilePic: string;
  specialty: string;
  upiId: string;
  consultancyAmount: number;
  experience: number;
  role: "doctor";
  createdAt: string; // or Date
  updatedAt: string; // or Date
  __v: number;
}
