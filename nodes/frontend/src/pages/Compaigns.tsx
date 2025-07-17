// Modified CampaignsPage with advanced filtering, pagination, and unified search input

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import * as z from "zod";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import api from "@/api";

const campaignSchema = z.object({
  id: z.number(),
  campaignName: z.string(),
  status: z.enum(["new", "active", "paused", "completed"]),
  campaignDescription: z.string(),
  lastContactIndex: z.number(),
});

// Types

type Campaign = z.infer<typeof campaignSchema>;

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");

  const navigate = useNavigate();
  const fetchCampaigns = async () => {
    try {
      const response = await api.get(`/campaigns/`);
      setCampaigns(response.data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  const pauseCampaign = async (campaignId: number) => {
    await api.post(`/campaigns/${campaignId}/pause`);
    toast.success("Campaign paused");
    fetchCampaigns();
  };

  const resumeCampaign = async (campaignId: number) => {
    await api.post(`/campaigns/${campaignId}/resume`);
    toast.success("Campaign resumed");
    fetchCampaigns();
  };

  const startCampaign = async (campaignId: number) => {
    try {
      const response = await api.post(
        `/campaigns/start-campaign/${campaignId}`
      );
      if (response.status === 200) {
        toast.success(`Campaign with ID ${campaignId} started successfully`);
        fetchCampaigns();
      } else {
        toast.error(`Error starting Campaign with ID ${campaignId}`);
      }
    } catch (error) {
      toast.error("Failed to start campaign");
    }
  };
  const restartCampaign = async (campaignId: number) => {
    try {
      const response = await api.post(`/campaigns/${campaignId}/restart`);
      if (response.status === 200) {
        toast.success(`Campaign with ID ${campaignId} restarted successfully`);
        fetchCampaigns();
      } else {
        toast.error(`Error restarting Campaign with ID ${campaignId}`);
      }
    } catch (error) {
      toast.error("Failed to restart campaign");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await api.get(`/delete?campaignId=${id}`);
      if (response.status === 200) {
        toast.success("Campaign deleted successfully");
        fetchCampaigns();
      } else {
        toast.error("Error while deleting the campaign");
      }
    } catch (error) {
      toast.error("Error while deleting campaign");
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  // Global filter logic
  const filteredCampaigns = campaigns.filter((campaign) => {
    const values = Object.values(campaign).join(" ").toLowerCase();
    return values.includes(globalFilter.toLowerCase());
  });

  return (
    <div className="layout-content-container flex flex-col w-full flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-tight text-[32px] font-bold leading-tight min-w-72">
          Campaigns
        </p>
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Search everything..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="max-w-sm"
          />
          <Button variant="outline">
            <NavLink to="/create-new-campaign">New Campaign</NavLink>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="All" className="pb-3">
        <TabsList className="flex border-b border-[#dbdbdb] px-4 gap-8 bg-transparent">
          {["All", "New", "Active", "Paused", "Completed"].map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="flex flex-col items-center justify-center border-b-[3px] text-sm font-bold leading-normal tracking-[0.015em] pb-[13px] pt-4 data-[state=active]:border-b-black data-[state=active]:text-[#141414] data-[state=inactive]:border-b-transparent data-[state=inactive]:text-neutral-500"
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="All">
          <div className="px-4 py-3">
            {filteredCampaigns.length === 0 ? (
              <p className="text-[#141414] text-base font-normal">
                No campaigns found
              </p>
            ) : (
              <div className="overflow-hidden border border-[#dbdbdb]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Campaign Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Campaign Description</TableHead>
                      <TableHead>Last Contact Index</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCampaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell>{campaign.campaignName}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            className="w-full bg-[#ededed] text-[#141414]"
                          >
                            {campaign.status}
                          </Button>
                        </TableCell>
                        <TableCell>{campaign.campaignDescription}</TableCell>
                        <TableCell>{campaign.lastContactIndex}</TableCell>
                        <TableCell className="flex gap-2">
                          {campaign.status === "new" && (
                            <Button
                              onClick={async () => {
                                await startCampaign(campaign.id);
                                await resumeCampaign(campaign.id);
                              }}
                            >
                              Start
                            </Button>
                          )}
                          {campaign.status === "active" && (
                            <Button onClick={() => pauseCampaign(campaign.id)}>
                              Pause
                            </Button>
                          )}
                          {campaign.status === "paused" && (
                            <Button
                              onClick={async () => {
                                await resumeCampaign(campaign.id);
                                await startCampaign(campaign.id);
                              }}
                            >
                              Resume
                            </Button>
                          )}
                          {campaign.status === "completed" && (
                            <Button
                              onClick={async () => {
                                await restartCampaign(campaign.id);
                              }}
                            >
                              Restart
                            </Button>
                          )}
                          <Button
                            onClick={() =>
                              navigate({
                                pathname: "/campaign-details",
                                search: `?campaignId=${campaign.id}`,
                              })
                            }
                          >
                            View
                          </Button>
                          <Button onClick={() => handleDelete(campaign.id)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </TabsContent>

        {["New", "Active", "Paused", "Completed"].map((status) => (
          <TabsContent key={status} value={status}>
            <div className="px-4 py-3">
              {filteredCampaigns.filter(
                (c) => c.status === status.toLowerCase()
              ).length === 0 ? (
                <p className="text-[#141414] text-base font-normal">
                  No {status} campaigns
                </p>
              ) : (
                <div className="overflow-hidden border border-[#dbdbdb]">
                  <Table>
                    <TableHeader>
                      <TableRow className="">
                        <TableHead className="w-[200px]">
                          Campaign Name
                        </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Campaign Description</TableHead>
                        <TableHead>Last Contact Index</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCampaigns
                        .filter((c) => c.status === status.toLowerCase())
                        .map((campaign) => (
                          <TableRow key={campaign.id}>
                            <TableCell>{campaign.campaignName}</TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                className="w-full bg-[#ededed] text-[#141414]"
                              >
                                {campaign.status}
                              </Button>
                            </TableCell>
                            <TableCell>
                              {campaign.campaignDescription}
                            </TableCell>
                            <TableCell>{campaign.lastContactIndex}</TableCell>
                            <TableCell className="flex gap-2">
                              {campaign.status === "new" && (
                                <Button
                                  onClick={async () => {
                                    await startCampaign(campaign.id);
                                    await resumeCampaign(campaign.id);
                                  }}
                                >
                                  Start
                                </Button>
                              )}

                              {/* PAUSE/RESUME button — for active/paused campaigns */}
                              {campaign.status === "active" && (
                                <Button
                                  onClick={async () => {
                                    await pauseCampaign(campaign.id),
                                    await startCampaign(campaign.id);
                                  }}
                                >
                                  Pause
                                </Button>
                              )}
                              {campaign.status === "paused" && (
                                <Button
                                  onClick={async () => {
                                    await resumeCampaign(campaign.id);
                                    await startCampaign(campaign.id);
                                  }}
                                >
                                  Resume
                                </Button>
                              )}

                              {/* VIEW only for completed campaigns */}
                              {campaign.status === "completed" && (
                                <Button
                                  onClick={() =>
                                    navigate({
                                      pathname: "/campaign-details",
                                      search: `?campaignId=${campaign.id}`,
                                    })
                                  }
                                >
                                  View
                                </Button>
                              )}

                              {/* DELETE is available for all */}
                              <Button onClick={() => handleDelete(campaign.id)}>
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CampaignsPage;
