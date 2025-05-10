import React from "react";

export default function ProgressCircle({ percent }) {
  const radius = 50;
  const strokeWidth = 10; // Lebar garis progress
  const circumference = 2 * Math.PI * radius; // Keliling lingkaran
  const offset = circumference - (percent / 100) * circumference; // Posisi stroke berdasarkan persentase

  return (
    <div className="flex justify-center items-center">
      <svg width="120" height="120" viewBox="0 0 120 120" className="transform">
        
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#defed4"
          strokeWidth={strokeWidth}
          fill="none"
        />

        
        <circle
          cx="63"
          cy="63"
          r={radius}
          stroke="#39805d"  
          strokeWidth={strokeWidth-8}  
          fill="none"
          strokeDasharray={circumference}  
          strokeDashoffset={offset}  
          style={{ transition: "stroke-dashoffset 0.3s ease" }} 
        />

        
        <circle
          cx="60"
          cy="60"
          r={radius - 5} 
          stroke="none"
          fill="#c6f3b3"  
        />

        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="20"
          fontWeight="bold"
          fill="#333"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}
