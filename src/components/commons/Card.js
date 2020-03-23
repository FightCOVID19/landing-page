import React from "react"

const Card = ({ className, children }) => (
    <div
        className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
        style={{
            boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            "min-height": "275px",
            display: 'flex',
            'justify-content': 'center',
            'flex-direction': 'column',
        }}
    >
        {children}
    </div>
)

export default Card
