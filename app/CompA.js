import { promises as fs } from "fs";

const CompA = async ({ children }) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf-8");
  console.log(JSON.parse(file));

  return <div>CompA {children}</div>;
};

export default CompA;
