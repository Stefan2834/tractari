import React from 'react'

type CardProps = {
    children: string;
    title: string;
    icon: string;
}

export default function CustomCard({ children, title, icon }: CardProps) {
    return (
        <div className="main-absolute-element">
            <div className="flex items-start justify-start">
                <div className="w-10 h-full mr-3 flex items-center justify-center">
                    <img src={icon} alt="lightning" className="main-absolute-img" />
                </div>
                <div>
                    <p className="text-2xl mt-3 text-black">
                        {title}
                    </p>
                    <div
                        className="w-full bg-gray-400"
                        style={{ height: "1px", marginTop: "4px" }}
                    />
                </div>
            </div>
            <p className="my-6 text-md text-gray-800">
                {children}
            </p>
        </div>
    )
}
