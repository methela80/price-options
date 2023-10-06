import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const RenderLineChart = () => {
  const studentData = [
    { id: 1, name: "Ali", marks: 85 },
    { id: 2, name: "Rayhan", marks: 78 },
    { id: 3, name: "Riju", marks: 92 },
    { id: 4, name: "Mitanur", marks: 88 },
    { id: 5, name: "Elias", marks: 76 },
    { id: 6, name: "Mafin", marks: 95 },
    { id: 7, name: "Safayet", marks: 70 },
    { id: 8, name: "Mahin", marks: 89 },
    { id: 9, name: "Yeasin", marks: 84 },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={studentData}>
        <Line type="monotone" dataKey={"marks"} stroke="red" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="marks" />
        <Tooltip />
      </LineChart>
    </div>
  );
};
// margin={{ top: 5, right: 20, bottom: 5, left: 0 }}

export default RenderLineChart;
