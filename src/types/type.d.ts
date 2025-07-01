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
