import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type {
  ConsultationDataType,
  ConsultationFormErrorType,
} from "@/types/type";
import { AlertCircle } from "lucide-react";

interface Step1 {
  data: ConsultationDataType;
  handleChange: (field: Partial<ConsultationDataType>) => void;
  handleNestedChange: <T extends keyof ConsultationDataType>(
    parent: T,
    field: string,
    value: any
  ) => void;
  errors: Partial<ConsultationFormErrorType>;
}

const Step1 = ({ data, handleChange, handleNestedChange, errors }: Step1) => {
  return (
    <CardContent className="space-y-4">
      <Label className="flex flex-col items-start gap-2">
        <span className="shrink-0 text-base ">Current illness history</span>
        <Textarea
          placeholder="Please describe your current illness, symptoms, and duration..."
          className={`${
            errors.currentIllnessHistory && "border-destructive "
          } h-32`}
          value={data.currentIllnessHistory}
          onChange={(e) =>
            handleChange({ currentIllnessHistory: e.target.value })
          }
        />
      </Label>
      {errors.currentIllnessHistory && (
        <p className="text-destructive text-sm mt-1 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {errors.currentIllnessHistory}
        </p>
      )}
      <div>
        <Label className="space-x-4 mb-4">
          <Checkbox
            checked={data.recentSurgery.hasSurgery}
            onCheckedChange={(checked) =>
              handleNestedChange("recentSurgery", "hasSurgery", checked)
            }
          />
          <span className="text-base font-medium ">
            I have had recent surgery
          </span>
        </Label>
        {data.recentSurgery.hasSurgery && (
          <div>
            <Label className={`flex flex-col gap-2 items-start`}>
              <span className="text-base">
                Time Span (When was the surgery?) *
              </span>
              <Input
                placeholder="e.g., 2 weeks ago, 3 months ago"
                className={`${errors.timeSpan && "border-destructive"}`}
                value={data.recentSurgery.timeSpan}
                onChange={(e) =>
                  handleNestedChange(
                    "recentSurgery",
                    "timeSpan",
                    e.target.value
                  )
                }
              />
            </Label>
            {errors.timeSpan && (
              <p className="text-destructive text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.timeSpan}
              </p>
            )}
          </div>
        )}
      </div>
    </CardContent>
  );
};

export default Step1;
