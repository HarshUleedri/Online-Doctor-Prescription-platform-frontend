import { axiosInstance } from "../apiConfig";

export interface pdfGeneratingApi {
  consultationId: string;
  careToBeTaken: string;
  medicines: string;
}

export const pdfGeneratingApi = async (data: pdfGeneratingApi) => {
  try {
    const res = await axiosInstance.post("/prescription/generate-pdf", data);
    return res.data;
  } catch (error) {
    console.log("error generating pdf", error);
  }
};
