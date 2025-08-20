"use client"
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts"
const data = [
  { name: "Crítica", value: 2 },
  { name: "Alta", value: 5 },
  { name: "Média", value: 8 },
  { name: "Baixa", value: 6 },
]
export default function VulnChart(){
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
