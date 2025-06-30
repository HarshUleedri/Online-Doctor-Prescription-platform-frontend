import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import type {
  ConsultationDataType,
  ConsultationFormErrorType,
} from "@/types/type";
import { AlertCircle } from "lucide-react";

interface Step2 {
  data: ConsultationDataType;
  // handleChange: (field: Partial<ConsultationDataType>) => void;
  handleNestedChange: <T extends keyof ConsultationDataType>(
    parent: T,
    field: string,
    value: any
  ) => void;
  errors: Partial<ConsultationFormErrorType>;
}

const Step2 = ({ data, handleNestedChange, errors }: Step2) => {
  return (
    <CardContent className="space-y-4">
      <div>
        <span className="text-base font-medium"> Diabetic Status *</span>
        <RadioGroup
          value={data.familyMedicalHistory.diabetics}
          onValueChange={(value) =>
            handleNestedChange("familyMedicalHistory", "diabetics", value)
          }
          className="my-2 "
        >
          <Label>
            <RadioGroupItem className="cursor-pointer" value="diabetic" />
            <span>Diabetic</span>
          </Label>
          <Label>
            <RadioGroupItem className="cursor-pointer" value="non-diabetic" />
            <span>Non-Diabetic</span>
          </Label>
        </RadioGroup>
        {errors.diabetics && (
          <p className="text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.diabetics}
          </p>
        )}
      </div>

      <div>
        <Label className={`flex flex-col gap-2 items-start mb-2`}>
          <span className="text-base font-medium">Any Allergies</span>
          <Textarea
            placeholder="List any known allergies (food, medication, environmental)..."
            value={data.familyMedicalHistory.allergies}
            onChange={(e) =>
              handleNestedChange(
                "familyMedicalHistory",
                "allergies",
                e.target.value
              )
            }
          />
        </Label>
        {errors.diabetics && (
          <p className="text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.diabetics}
          </p>
        )}
      </div>

      <div>
        <Label className={`flex flex-col gap-2 items-start mb-2`}>
          <span className="text-base font-medium">Other's</span>
          <Textarea
            placeholder="Any other relevant family medical history..."
            value={data.familyMedicalHistory.other}
            onChange={(e) =>
              handleNestedChange(
                "familyMedicalHistory",
                "other",
                e.target.value
              )
            }
          />
        </Label>
        {errors.diabetics && (
          <p className="text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.diabetics}
          </p>
        )}
      </div>
    </CardContent>
  );
};

export default Step2;
