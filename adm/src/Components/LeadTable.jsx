import { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";



import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const LeadTable = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://leadcal-nu.vercel.app/")
      .then(response => setLeads(response.data))
      .catch(error => console.error("Error fetching leads:", error));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="p-5 bg-gray-900 min-h-screen text-white"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Lead Management</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Leads..." 
            className="p-2 pl-10 rounded bg-gray-800 text-white"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.filter(lead => 
            lead.name.toLowerCase().includes(search.toLowerCase())
          ).map((lead, index) => (
            <TableRow key={index}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default LeadTable;
