import React, { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import api from "@/api";

export default function CallsTable() {
  const [calls, setCalls] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   api
      .get(`/calls`)
      .then((response) => setCalls(response.data))
      .catch((error) => {
        console.log("Error while fetching calls", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "campaigns.campaignName",
      header: "Campaign Name",
      cell: ({ row }) => row.original.campaigns?.campaignName ?? "-",
    },
    {
      accessorKey: "contactName",
      header: "Name",
    },
    {
      accessorKey: "contactPhone",
      header: "Phone",
    },
    {
      accessorKey: "BussinessName",
      header: "Business",
    },
    {
      accessorKey: "callStatus",
      header: "Status",
    },
    {
      accessorKey: "CallDuration",
      header: "Duration",
      cell: ({ row }) => {
        const duration = Number(row.original.CallDuration); // Fix here

        const h = Math.floor(duration / 3600);
        const m = Math.floor((duration % 3600) / 60);
        const s = duration % 60;

        const parts = [];
        if (h > 0) parts.push(`${h} ${h === 1 ? "hour" : "hours"}`);
        if (m > 0) parts.push(`${m} ${m === 1 ? "minute" : "minutes"}`);
        if (s > 0 || parts.length === 0)
          parts.push(`${s} ${s === 1 ? "second" : "seconds"}`);

        return parts.join(", ");
      },
    },
    {
      accessorKey: "createdAt",
      header: "Date",
    },
    {
      accessorKey: "transcriptionsLink",
      header: "transcription",
      cell: ({ row }) => {
        const fileName = row.original.transcriptionsLink;
        const [text, setText] = useState("");

        useEffect(() => {
          if (!fileName) return;
          fetch(`${import.meta.env.VITE_STREAM_URL}/transcriptions/${fileName}`)
            .then((r) => r.text())
            .then(setText)
            .catch(() => setText("❌ failed to load"));
        }, [fileName]);

        return (
          <Dialog>
            <DialogTrigger>View</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Call transcript</DialogTitle>
                <DialogDescription>
                  <div className="max-h-96 overflow-auto whitespace-pre-wrap font-mono text-sm bg-neutral-100 p-4 rounded">
                    {text || "Loading…"}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      },
    },
    {
      accessorKey: "recordingsLink",
      header: "Recording",
      cell: ({ row }) =>
        row.original.recordingsLink ? (
          <Dialog>
            <DialogTrigger>Listen</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Call Recording</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col gap-4">
                    <AudioPlayer
                      autoPlay
                      src={`${
                        import.meta.env.VITE_ROOT_DOMAIN
                      }/secure-audio?url=${encodeURIComponent(
                        row.original.recordingsLink
                      )}`}
                    />
                    <Button>
                      <a
                        href={`${
                          import.meta.env.VITE_ROOT_DOMAIN
                        }/secure-audio?url=${encodeURIComponent(
                          row.original.recordingsLink
                        )}`}
                        download={`recording-${row.original.id || "call"}.mp3`}
                      >
                        Download
                      </a>
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <span className="text-neutral-400">N/A</span>
        ),
    },
  ];

  const table = useReactTable({
    data: calls,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      const rowData = Object.values(row.original)
        .map((val) => (typeof val === "object" ? JSON.stringify(val) : val))
        .join(" ")
        .toLowerCase();
      return rowData.includes(filterValue.toLowerCase());
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="layout-content-container flex flex-col  flex-1">
      <div className="px-4 py-3">
        <form
          className="flex flex-col min-w-40 h-12 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full items-stretch rounded-xl h-full bg-[#ededed]">
            <Input
              placeholder="Search calls"
              className="w-full h-full border-none bg-[#ededed] px-4 text-base focus:outline-none"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
        </form>
      </div>

      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        All calls
      </h2>

      <div className="px-4 py-3">
        <div className="overflow-x-auto border border-[#dbdbdb] ">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="px-4 py-3 text-left text-[#141414] text-sm font-medium"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    No calls found
                  </TableCell>
                </TableRow>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-t border-t-[#dbdbdb]"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-2 text-sm text-[#141414]"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
