import { fetchLeaderboardData } from "@/lib/APIService";
import type { LeaderboardData } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DataTable() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData>([]);

  useEffect(() => {
    const asyncFn = async () => {
      const data = await fetchLeaderboardData();
      setLeaderboardData(data);
    };
    asyncFn();
  }, []);

  return (
    <Table className="p-20">
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Score</TableHead>
          <TableHead className="text-right">Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboardData.map((user) => {
          return (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.score}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
