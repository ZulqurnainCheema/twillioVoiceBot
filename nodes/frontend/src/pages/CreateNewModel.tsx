import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import api from "@/api";
// Define the form schema using Zod
const formSchema = z.object({
  modelName: z.string().min(1, { message: "Model name is required" }),
  trainingData: z.string().min(1, { message: "Training data is required" }),
  instructions: z.string().min(1, { message: "Instructions are required" }),
});

const CreateNewModel = () => {
  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      modelName: "",
      trainingData: "",
      instructions: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      const response = await api.post(
        "/models/create-model",
        data
      );
      if (response.status == 201) {
        toast("Model Created Successfully");
        console.log("Form submitted:", data);
        form.reset({
          modelName: "",
          trainingData: "",
          instructions: "",
        });
      } else console.error("Failed to submit form:", response.statusText);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#141414] tracking-tight text-[32px] font-bold leading-tight min-w-72">
            Create a new model
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <FormField
                control={form.control}
                name="modelName"
                render={({ field }) => (
                  <FormItem className="flex flex-col min-w-40 flex-1">
                    <FormLabel className="text-[#141414] text-base font-medium leading-normal pb-2">
                      Model name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter model name"
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] focus:border-none h-14 placeholder:text-neutral-500 p-4 text-base font-normal leading-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <FormField
                control={form.control}
                name="trainingData"
                render={({ field }) => (
                  <FormItem className="flex flex-col min-w-40 flex-1">
                    <FormLabel className="text-[#141414] text-base font-medium leading-normal pb-2">
                      Training data
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Training data"
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] focus:border-none min-h-36 placeholder:text-neutral-500 p-4 text-base font-normal leading-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <FormField
                control={form.control}
                name="instructions"
                render={({ field }) => (
                  <FormItem className="flex flex-col min-w-40 flex-1">
                    <FormLabel className="text-[#141414] text-base font-medium leading-normal pb-2">
                      Instructions
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter instructions"
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] focus:border-none min-h-36 placeholder:text-neutral-500 p-4 text-base font-normal leading-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex px-4 py-3 justify-end">
              <Button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black mar text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Create model</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewModel;
