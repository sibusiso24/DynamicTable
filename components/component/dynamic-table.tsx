import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Pagination } from "@/components/ui/pagination"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function DynamicTable() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <h3 className="text-lg font-medium">Dynamic Table</h3>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>New York</TableCell>
            <TableCell>35</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <DeleteIcon className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="ml-2" size="sm" variant="outline">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>Los Angeles</TableCell>
            <TableCell>28</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <DeleteIcon className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="ml-2" size="sm" variant="outline">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Michael Johnson</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>Chicago</TableCell>
            <TableCell>42</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <DeleteIcon className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="ml-2" size="sm" variant="outline">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Emily Davis</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>Miami</TableCell>
            <TableCell>31</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <DeleteIcon className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="ml-2" size="sm" variant="outline">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>David Wilson</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>Seattle</TableCell>
            <TableCell>39</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <DeleteIcon className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="ml-2" size="sm" variant="outline">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <Pagination />
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Showing 1-10 of 100 results</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
