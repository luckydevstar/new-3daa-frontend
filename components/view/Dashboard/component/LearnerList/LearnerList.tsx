import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookSearch, IdCard, ListTodo, MessageCircle, NotepadText, Scan, Search, User } from "lucide-react"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const LearnerList = () => {
    return (
        <div className="rounded-xl px-8 py-6 bg-white">
            <h3 className="text-2xl font-bold text-black text-center mb-6">Your Learners</h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <label className="text-lightDark text-sm font-bold">Status:</label>
                        <Select>
                            <SelectTrigger className="w-24 h-8! py-2 font-sm text-black rounded-sm">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                        </Select>
                    </div>
                    <div className="flex items-center gap-1">
                        <label className="text-lightDark text-sm font-bold">Sort:</label>
                        <Select>
                            <SelectTrigger className="w-32 h-8! py-2 font-sm text-black rounded-sm">
                                <SelectValue placeholder="Test Ready" />
                            </SelectTrigger>
                        </Select>
                    </div>
                </div>
                <div className="w-65 bg-[#78788029]">
                    <InputGroup className="w-full">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>

            <Table className="rounded-t-md mt-2">
                <TableHeader className="bg-primaryMain rounded-t-md text-white">
                    <TableRow className="rounded-t-md">
                        <TableHead className="text-white w-48 border-r text-center">Profile Name</TableHead>
                        <TableHead className="text-white w-48 border-r text-center">Qualification</TableHead>
                        <TableHead className="text-white w-48 border-r text-center">Progress</TableHead>
                        <TableHead className="text-white border-r text-center">Actions</TableHead>
                        <TableHead className="text-white w-48 text-center">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="border-b border-b-[#F9F9F9]">
                        <TableCell className="text-black text-center">Simon Sample</TableCell>
                        <TableCell className="text-center">Still Renders</TableCell>
                        <TableCell className="text-center">83%</TableCell>
                        <TableCell className="flex text-[#6D6D6D] justify-evenly">
                            <div className="cursor-pointer">
                                <BookSearch size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <NotepadText size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <ListTodo size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <IdCard size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <User size={28} />
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#85BB23]" />
                        </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-b-[#F9F9F9]">
                        <TableCell className="text-black text-center">Simon Sample</TableCell>
                        <TableCell className="text-center">Still Renders</TableCell>
                        <TableCell className="text-center">83%</TableCell>
                        <TableCell className="flex text-[#6D6D6D] justify-evenly">
                            <div className="cursor-pointer">
                                <BookSearch size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <NotepadText size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <ListTodo size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <IdCard size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <User size={28} />
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#85BB23]" />
                        </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-b-[#F9F9F9]">
                        <TableCell className="text-black text-center">Simon Sample</TableCell>
                        <TableCell className="text-center">Still Renders</TableCell>
                        <TableCell className="text-center">83%</TableCell>
                        <TableCell className="flex text-[#6D6D6D] justify-evenly">
                            <div className="cursor-pointer">
                                <BookSearch size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <NotepadText size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <ListTodo size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <IdCard size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <User size={28} />
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#85BB23]" />
                        </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-b-[#F9F9F9]">
                        <TableCell className="text-black text-center">Simon Sample</TableCell>
                        <TableCell className="text-center">Still Renders</TableCell>
                        <TableCell className="text-center">83%</TableCell>
                        <TableCell className="flex text-[#6D6D6D] justify-evenly">
                            <div className="cursor-pointer">
                                <BookSearch size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <NotepadText size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <ListTodo size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <IdCard size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <User size={28} />
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#85BB23]" />
                        </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-b-[]">
                        <TableCell className="text-black text-center">Simon Sample</TableCell>
                        <TableCell className="text-center">Still Renders</TableCell>
                        <TableCell className="text-center">83%</TableCell>
                        <TableCell className="flex text-[#6D6D6D] justify-evenly">
                            <div className="cursor-pointer">
                                <BookSearch size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <NotepadText size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <ListTodo size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <IdCard size={28} />
                            </div>
                            <div className="cursor-pointer">
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <User size={28} />
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#85BB23]" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default LearnerList;
