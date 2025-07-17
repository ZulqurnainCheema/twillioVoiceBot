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
import axios from "axios";
import api from "@/api";

export default function LeadsTable() {
  const [leads, setLeads] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/leads`)
      .then((response) => setLeads(response.data))
      .catch((error) => {
        console.error("Error while fetching leads", error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "campaign.campaignName",
      header: "Campaign name",
      cell: ({ row }) => row.original.campaigns?.campaignName ?? "-",
    },
    {
      accessorKey: "contactName",
      header: "Contact Name",
    },
    {
      accessorKey: "contactPhone",
      header: "Phone",
    },
    {
      accessorKey: "businessName",
      header: "Business",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "name",
      header: "Lead Name",
    },
    {
      accessorKey: "createdAt",
      header: "Date",
    },
  ];

  const table = useReactTable({
    data: leads,
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
    <div className="layout-content-container flex flex-col flex-1">
      <div className="px-4 py-3">
        <form
          className="flex flex-col min-w-40 h-12 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full items-stretch rounded-xl h-full bg-[#ededed]">
            <Input
              placeholder="Search leads"
              className="w-full h-full border-none bg-[#ededed] px-4 text-base focus:outline-none"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
        </form>
      </div>

      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        All Leads
      </h2>

      <div className="px-4 py-3">
        <div className="overflow-x-auto rounded-xl border border-[#dbdbdb] bg-neutral-50">
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
                    No leads found
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
