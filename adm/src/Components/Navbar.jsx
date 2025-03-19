import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50 }} 
      animate={{ y: 0 }} 
      className="p-4 bg-gray-800 text-white flex justify-between"
    >
      <h1 className="text-xl font-bold">Lead Dashboard</h1>
      <button className="bg-blue-500 px-4 py-2 rounded">Logout</button>
    </motion.nav>
  );
};

export default Navbar;
