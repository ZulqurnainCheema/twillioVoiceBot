import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import api from "@/api";
const Models = () => {
  interface Models {
    id: number;
    modelName: string;
    instructions: string;
    trainingData: string;
  }
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState<Models[]>([]);

  useEffect(() => {
    fetchModels();
    console.log("domain", import.meta.env.VITE_ROOT_DOMAIN);
  }, []);
  const fetchModels = async () => {
    api
      .get(`/models`)
      .then((response) => {
        if (!response) {
          throw new Error("Failed to fetch models");
        }
        setModels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching models:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = async (id: Number) => {
    try {
      const response = await api.get(
        `/models/delete?modelId=${id}`
      );
      if (response) {
        toast.success("Model deleted successfully");
        console.log("Model deleted successfully");
        fetchModels();
      } else {
        toast.error("Error while deleting the model");
        console.error("Error while deleting model;");
      }
    } catch (error: any) {
      console.log("Error while deleting model", error?.message);
    }
  };
  return (
    <div className="layout-content-container flex flex-col w-[100%] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-tight text-[32px] font-bold leading-tight min-w-72">
          Models
        </p>
        <Button
          variant="outline"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#ededed] text-[#141414] text-sm font-medium leading-normal"
        >
          <NavLink to={"/create-new-model"}>New Model</NavLink>
        </Button>
      </div>
      <div className="px-4 py-3 @container">
        <div className=" border border-[#dbdbdb]">
          <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-120 px-4 py-3 text-left text-[#141414] w-60 text-sm font-medium leading-normal">
                  Model Name
                </TableHead>
                <TableHead className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-240 px-4 py-3 text-left text-[#141414] w-60 text-sm font-medium leading-normal">
                  Instructions
                </TableHead>
                <TableHead className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-360 px-4 py-3 text-left text-[#141414] w-60 text-sm font-medium leading-normal">
                  Training Data
                </TableHead>
                <TableHead className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-720 px-4 py-3 text-left text-[#141414] w-60 text-sm font-medium leading-normal">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : models?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No Models found
                  </TableCell>
                </TableRow>
              ) : (
                models?.map((model, index: number) => (
                  <TableRow key={index} className="border-t border-t-[#dbdbdb]">
                    <TableCell className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-120 h-[72px] px-4 py-2 max-w-60 text-[#141414] text-sm font-normal leading-normal">
                      {model.modelName}
                    </TableCell>
                    <TableCell className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-360 h-[72px] px-4 py-2 max-w-100 text-neutral-500 text-sm font-normal leading-normal truncate ">
                      {model.instructions}
                    </TableCell>
                    <TableCell className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-360 h-[72px] px-4 py-2 max-w-100 text-neutral-500 text-sm font-normal leading-normal truncate">
                      {model.trainingData}
                    </TableCell>
                    <TableCell className="table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-720 h-[72px] px-4 py-2 max-w-60 text-neutral-500 text-sm font-bold leading-normal tracking-[0.015em]">
                      <Button onClick={() => handleDelete(model.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <style>{`
                @container (max-width: 120px) {
                  .table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-120 {
                    display: none;
                  }
                }
                @container (max-width: 240px) {
                  .table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-240 {
                    display: none;
                  }
                }
                @container (max-width: 360px) {
                  .table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-360 {
                    display: none;
                  }
                }
                @container (max-width: 480px) {
                  .table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-480 {
                    display: none;
                  }
                }
                @container (max-width: 600px) {
                  .table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-600 {
                    display: none;
                  }
                }
                @container (max-width: 720px) {
                  .table-1fe83689-4ce3-4b65-8dc8-28f477b96727-column-720 {
                    display: none;
                  }
                }
              `}</style>
      </div>
    </div>
  );
};

export default Models;
