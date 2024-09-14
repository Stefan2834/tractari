import React from 'react'

type CardProps = {
    children: string;
    title: string;
    icon: string;
}

export default function CustomCard({ children, title, icon }: CardProps) {
    return (
        <div className="card-absolute-element">
            <div className="card-element">
                <div className="card-img">
                    <img src={icon} alt="lightning" />
                </div>
                <div>
                    <p className="card-title">
                        {title}
                    </p>
                    <div style={{ height: "1px", marginTop: "4px", width: "100%", backgroundColor: "#9ca3af" }} />
                </div>
            </div>
            <p className="card-text">
                {children}
            </p>
        </div>
    )
}
