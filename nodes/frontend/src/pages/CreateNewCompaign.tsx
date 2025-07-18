import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import api from "@/api";

const CreateNewCampaign = () => {
  interface Model {
    id: number;
    modelName: string;
    instructions: string;
    trainingData: string;
  }

  const formSchema = z.object({
    contacts: z
      .instanceof(File)
      .refine((file) => !!file, "A contact file is required.")
      .refine(
        (file) =>
          file?.type === "text/csv" ||
          file?.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Only CSV or XLSX files are allowed."
      ),
    modelId: z.string().min(1, "An AI model is required."),
    campaignName: z.string().min(1, "Campaign name is required."),
    campaignDescription: z.string().min(1, "Campaign description is required."),
    callScript: z.string().min(1, "Call script is required."),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    api
      .get(`/models/`)
      .then((response) => {
        if (!response) {
          throw new Error("Failed to fetch models");
        }
        setModels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching models:", error);
      });
  };

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contacts: undefined,
      modelId: "",
      campaignName: "",
      campaignDescription: "",
      callScript: "",
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    console.log("Form reached onSubmit, data:", data);
    const formData = new FormData();

    formData.append("contacts", data.contacts!);
    formData.append("modelId", data.modelId);
    formData.append("campaignName", data.campaignName);
    formData.append("campaignDescription", data.campaignDescription);
    formData.append("callScript", data.callScript);

    try {
      console.log("Sending form data:", formData); // Debug log
      const response = await api.post(
        "/campaigns/create-campaign",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast("Campaign created successfully", {
          description: "Your campaign has been created and is ready to launch.",
        });
        console.log("Campaign created successfully");
         form.reset({
        contacts: undefined,
        modelId: "",
        campaignName: "",
        campaignDescription: "",
        callScript: "",
      });

      // Optionally reset file input manually (because React doesn't fully control file input)
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      } else {
        toast("Failed to create campaign", {
          description: "Please check the details and try again.",
        });
        console.error("Failed to create campaign:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-2 sm:py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[960px]">
          <div className="flex flex-wrap justify-between gap-2 sm:gap-3 p-2 sm:p-4">
            <div className="flex min-w-0 flex-col gap-2 sm:gap-3">
              <h1 className="text-[#141414] tracking-tight text-[32px] font-bold leading-tight">
                New Campaign
              </h1>
              <p className="text-[#757575] text-sm font-normal leading-normal">
                Upload your contacts, select an AI model, and configure campaign
                settings before launching.
              </p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
                  1. Upload Contacts
                </h3>
                <FormField
                  control={form.control}
                  name="contacts"
                  render={({ field }) => (
                    <FormItem className="flex w-full max-w-[480px] flex-wrap items-end gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3">
                      <FormLabel className="text-[#141414] text-sm font-medium leading-normal mb-2">
                        Upload Contacts
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".csv,.xlsx"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            console.log("Selected file:", file); // Debug log
                            field.onChange(file);
                          }}
                          className="h-14 border border-[#e0e0e0] bg-white rounded-xl text-[#141414] focus:outline-none focus:ring-0 p-[15px] placeholder:text-[#757575]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
                  2. Select AI Model
                </h3>
                <FormField
                  control={form.control}
                  name="modelId"
                  render={({ field }) => (
                    <FormItem className="flex w-full max-w-[480px] flex-wrap items-end gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3">
                      <FormLabel className="text-[#141414] text-sm font-medium leading-normal mb-2">
                        AI Model
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full h-14 border border-[#e0e0e0] bg-white rounded-xl text-[#141414] focus:outline-none focus:ring-0 p-[15px]">
                            <SelectValue placeholder="Choose an AI model" />
                          </SelectTrigger>
                          <SelectContent>
                            {models.length > 0 &&
                              models.map((model) => (
                                <SelectItem
                                  key={model.id}
                                  value={model.id.toString()}
                                >
                                  {model.modelName}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
                  3. Configure Campaign Settings
                </h3>
                <FormField
                  control={form.control}
                  name="campaignName"
                  render={({ field }) => (
                    <FormItem className="flex w-full max-w-[480px] flex-wrap items-end gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3">
                      <FormLabel className="text-[#141414] text-sm font-medium leading-normal mb-2">
                        Campaign Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Campaign Name"
                          {...field}
                          className="h-14 border border-[#e0e0e0] bg-white rounded-xl text-[#141414] focus:outline-none focus:ring-0 p-[15px] placeholder:text-[#757575]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="campaignDescription"
                  render={({ field }) => (
                    <FormItem className="flex w-full max-w-[480px] flex-wrap items-end gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3">
                      <FormLabel className="text-[#141414] text-sm font-medium leading-normal mb-2">
                        Campaign Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Campaign Description"
                          {...field}
                          className="min-h-36 border border-[#e0e0e0] bg-white rounded-xl text-[#141414] focus:outline-none focus:ring-0 p-[15px] placeholder:text-[#757575]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="callScript"
                  render={({ field }) => (
                    <FormItem className="flex w-full max-w-[480px] flex-wrap items-end gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3">
                      <FormLabel className="text-[#141414] text-sm font-medium leading-normal mb-2">
                        Call Script
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Call Script"
                          {...field}
                          className="h-14 border border-[#e0e0e0] bg-white rounded-xl text-[#141414] focus:outline-none focus:ring-0 p-[15px] placeholder:text-[#757575]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex px-2 sm:px-4 py-2 sm:py-3 justify-end">
                <Button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  Launch Campaign
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCampaign;
