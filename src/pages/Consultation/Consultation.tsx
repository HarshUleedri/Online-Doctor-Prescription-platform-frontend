import type {
  ConsultationDataType,
  ConsultationFormErrorType,
} from "@/types/type";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Step1 from "./components/Step1";
import { Button } from "@/components/ui/button";
import Step3 from "./components/Step3";
import Step2 from "./components/Step2";
import { Card, CardFooter } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronRight,
  CreditCard,
  FileText,
  User,
} from "lucide-react";
import { useCreateConsultation } from "@/hooks/useConsultationQueries";
import { useAuthStore } from "@/store/useAuthStore";

const Consultation = () => {
  const { id } = useParams();
  const doctorId = id || "";
  const steps = [
    { number: 1, title: "Current Illness", icon: User },
    { number: 2, title: "Family History", icon: FileText },
    { number: 3, title: "Payment", icon: CreditCard },
  ];
  //state
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<ConsultationDataType>({
    doctorId: doctorId,
    currentIllnessHistory: "",
    recentSurgery: { hasSurgery: false, timeSpan: "" },
    familyMedicalHistory: {
      diabetics: "",
      allergies: "",
      other: "",
    },
    transactionId: "",
  });

  const [errors, setErrors] = useState<Partial<ConsultationFormErrorType>>({});

  // hook

  const { isAuthenticated, user } = useAuthStore((state) => state);

  const { mutateAsync, error, isPending } = useCreateConsultation();

  console.log(error);

  const navigate = useNavigate();

  //helper function

  const handleChange = (field: Partial<ConsultationDataType>) => {
    setFormData((prev) => ({
      ...prev,
      ...field,
    }));
  };

  const handleNestedChange = <T extends keyof ConsultationDataType>(
    parent: T,
    field: string,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...(typeof prev[parent] === "object" && prev[parent] !== null ? prev[parent] : {}),
        [field]: value,
      },
    }));
  };
  const validateStep = (step: number) => {
    const newErrors: Partial<ConsultationFormErrorType> = {};

    switch (step) {
      case 1:
        if (!formData.currentIllnessHistory.trim()) {
          newErrors.currentIllnessHistory =
            "Current illness history is required";
        }
        if (
          formData.recentSurgery.hasSurgery &&
          !formData.recentSurgery.timeSpan.trim()
        ) {
          newErrors.timeSpan =
            "Please specify the time span for recent surgery";
        }
        break;
      case 2:
        if (!formData.familyMedicalHistory.diabetics) {
          newErrors.diabetics = "Please select diabetic status";
        }
        break;
      case 3:
        if (!formData.transactionId.trim()) {
          newErrors.transactionId = "Transaction ID is required";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const next = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };
  const previous = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (validateStep(3)) {
      const data = await mutateAsync(formData);
      if (data) {
        setIsSubmitted(true);
      }
    }
  };

  console.log(isAuthenticated, user);

  if (!isAuthenticated || user.role !== "patient") {
    return <Navigate replace={true} to={"/patient/signin"} />;
  }

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className=" border max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="size-20 rounded-full border-6 border-muted-foreground/70 border-t-primary animate-spin"></div>
        </div>
      </div>
    );
  }
  if (isSubmitted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className=" border max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg ">
          <div className="text-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600">
              Your consultation request has been received and will be processed
              soon.
            </p>
          </div>
          <Button
            className=" w-full "
            onClick={() => navigate("/dashboard", { replace: true })}
            variant={"outline"}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl my-16">
      <h1 className="text-2xl text-center font-bold text-gray-900 mb-16">
        Doctor's Consultation Form
      </h1>
      <div className="flex items-center justify-between mb-12 mx-20">
        {steps.map((item, index) => {
          const Icon = item.icon;
          const isActive = step === item.number;
          const isCompleted = step > item.number;

          return (
            <div key={item.number} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "bg-primary border-primary text-white"
                      : "bg-gray-100 border-gray-300 text-gray-400"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <div className="ml-3">
                  <p
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-primary"
                        : isCompleted
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    Step {item.number}
                  </p>
                  <p
                    className={`text-xs ${
                      isActive
                        ? "text-primary"
                        : isCompleted
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-gray-400 mx-4" />
              )}
            </div>
          );
        })}
      </div>

      <Card>
        {step === 1 && (
          <Step1
            data={formData}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            errors={errors}
          />
        )}
        {step === 2 && (
          <Step2
            data={formData}
            handleNestedChange={handleNestedChange}
            errors={errors}
          />
        )}
        {step === 3 && (
          <Step3
            data={formData}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            errors={errors}
          />
        )}

        {/* navigation */}
        <CardFooter className="flex justify-end gap-8 items-center ">
          {error && (
            <p className="text-destructive">
              {
                // Try to access error.response.data.message if it exists, otherwise fallback to error.message
                (error as any)?.response?.data?.message || error.message || "An error occurred"
              }
            </p>
          )}
          <Button
            onClick={previous}
            disabled={step === 1}
            className="disabled:cursor-not-allowed"
          >
            Prev
          </Button>
          {step === 3 ? (
            <Button
              disabled={isPending}
              onClick={handleSubmit}
              className="bg-green-600"
            >
              Submit
            </Button>
          ) : (
            <Button onClick={next}>Next</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Consultation;
