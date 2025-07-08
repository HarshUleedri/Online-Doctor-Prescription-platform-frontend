export interface ConsultationDataType {
  doctorId: string;
  currentIllnessHistory: string;
  recentSurgery: { hasSurgery: boolean; timeSpan: string };
  familyMedicalHistory: {
    diabetics: string;
    allergies: string;
    other: string;
  };
  transactionId: string;
}

export interface ConsultationFormErrorType {
  doctorId: sting;
  currentIllnessHistory: sting;
  recentSurgery: sting;
  hasSurgery: sting;
  timeSpan: sting;
  familyMedicalHistory: sting;
  diabetics: sting;
  allergies: sting;
  other: sting;
  transactionId: sting;
}

export interface userConsultationDataType {
  _id: string;
  patientId: string;
  doctorId: {
    name: string;
    specialty: string;
    profilePic: string;
  };
  currentIllnessHistory: string;
  recentSurgery: {
    hasSurgery: boolean;
    timeSpan: string;
  };
  familyMedicalHistory: {
    diabetics: "diabetic" | "non-diabetic";
    allergies: string;
    others: string;
  };
  status: "pending" | "completed" | "cancelled"; // extend as needed
  transactionId: string;
  createdAt: string; // ISO date string
  updatedAt: string;
  __v: number;
}

export interface ConsultationDataForDoctorType {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  currentIllnessHistory: string;
  doctorId: string;
  patientId: {
    _id: string;
    name: string;
    age: number;
    profilePic: string;
  };
  familyMedicalHistory: {
    diabetics: "non-diabetic" | "pre-diabetic" | "diabetic" | string;
    allergies: string;
    others: string;
  };
  recentSurgery: {
    hasSurgery: boolean;
    timeSpan: string;
  };
  status: "pending" | "approved" | "rejected" | string;
  transactionId: string;
  __v: number;
}

export interface SingleConsultationType {
  _id: string;
  patientId: {
    _id: string;
    name: string;
    age: number;
    profilePic: string;
  };
  doctorId: {
    _id: string;
    name: string;
    specialty: string;
    profilePic: string;
  };
  currentIllnessHistory: string;
  transactionId: string;
  status: "pending" | "completed" | "cancelled"; // add other possible statuses if any
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  recentSurgery: {
    hasSurgery: boolean;
    timeSpan: string;
  };
  familyMedicalHistory: {
    diabetics: string;
    allergies: string;
    others: string;
  };
}

export interface DoctorPrescriptionDataType {
  _id: string;
  consultationId?: string;
  doctorId: string;
  patientId: {
    _id: string;
    name: string;
    age: number;
    profilePic: string;
  };
  careToBeTaken: string;
  currentIllnessHistory: string;
  familyMedicalHistory: {
    allergies: string;
    diabetics: string;
    others: string;
  };
  recentSurgery: {
    hasSurgery: boolean;
    timeSpan: string;
  };
  status: "completed" | string;
  transactionId: string;
  medicines: string;
  pdfUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PatientPrescriptionDataType {
  _id: string;
  consultationId: string;
  createdAt: string;
  updatedAt: string;
  doctorId: {
    _id: string;
    name: string;
    profilePic: string;
    specialty: string;
  }; // populated object
  patientId: string; // just the ID, not populated
  careToBeTaken: string;
  medicines: string;
  pdfUrl: string;
  __v: number;
}
