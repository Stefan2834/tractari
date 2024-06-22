import React from 'react'
import {Avatar, Rating} from "@mui/material";
import avatar1 from "@/assets/photo/avatars/avatar-1.jpg";
import avatar2 from "@/assets/photo/avatars/avatar-2.jpg";
import avatar3 from "@/assets/photo/avatars/avatar-3.jpg";
import {useDefault} from "@/contexts/useDefault";

export default function Review() {

    const {screen} = useDefault();
    return (
        <>
            <h2 className="w-full text-2xl text-center mb-10 m:text-lg">
                - RECOMANDĂRILE NOASTRE -
            </h2>
            <div
                className="w-full flex items-start justify-center mt-8 xl:flex-wrap xl:justify-around"
                style={{height: "auto"}}
            >
                <div className="review-element">
                    <Avatar
                        alt="Remy Sharp"
                        src={avatar1.src}
                        sx={{
                            width: 110,
                            height: 110,
                            transform: "translateY(-50%)",
                            position: "absolute",
                            scale: `${screen > 600 ? "1" : "0.8"}`,
                        }}
                    />
                    <Rating
                        name="half-rating-read"
                        defaultValue={5.0}
                        precision={0.5}
                        readOnly
                        size="large"
                        sx={{marginTop: "60px", color: "#E3B626"}}
                    />
                    <p
                        className="mt-2 font-light"
                        style={{
                            fontSize: `${screen > 600 ? "18px" : "14px"}`,
                        }}
                    >
                        De fiecare dată când l-am sunat pe Alin, a venit fără
                        ezitare, chiar și în miez de noapte. Super băiat. Nota
                        10!
                    </p>
                    <p
                        className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
                        style={{
                            fontSize: `${screen > 600 ? "18px" : "14px"}`,
                        }}
                    >
                        Andrei Comșa
                    </p>
                </div>
                <div className="review-element">
                    <div>
                        <p
                            className="mt-2 font-light"
                            style={{
                                fontSize: `${screen > 600 ? "18px" : "14px"}`,
                            }}
                        >
                            Nu știu ce mă făceam fără serviciile prestate de
                            acest băiat. A reușit să ma salveze dintr-o situație
                            inimaginabilă. Recomand!
                        </p>
                        <p
                            className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
                            style={{
                                fontSize: `${screen > 600 ? "18px" : "14px"}`,
                            }}
                        >
                            Iosif Ștefan
                        </p>
                    </div>
                    <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                        size="large"
                        sx={{
                            marginBottom: `${screen > 1200 ? "60px" : "0px"}`,
                            marginTop: `${screen > 1200 ? "0px" : "60px"}`,
                            color: "#E3B626",
                        }}
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={avatar2.src}
                        sx={{
                            width: 110,
                            height: 110,
                            bottom: `${
                                screen > 1200 ? "0" : "calc(100% - 110px)"
                            }`,
                            transform: `${
                                screen > 1200
                                    ? "translateY(50%)"
                                    : "translateY(-50%)"
                            }`,
                            position: "absolute",
                            scale: `${screen > 600 ? "1" : "0.8"}`,
                        }}
                    />
                </div>
                <div className="review-element">
                    <Avatar
                        alt="Remy Sharp"
                        src={avatar3.src}
                        sx={{
                            width: 110,
                            height: 110,
                            transform: "translateY(-50%)",
                            position: "absolute",
                            scale: `${screen > 600 ? "1" : "0.8"}`,
                        }}
                    />
                    <Rating
                        name="half-rating-read"
                        defaultValue={5.0}
                        precision={0.5}
                        readOnly
                        size="large"
                        sx={{marginTop: "60px", color: "#E3B626"}}
                    />
                    <p
                        className="mt-2 font-light"
                        style={{
                            fontSize: `${screen > 600 ? "18px" : "14px"}`,
                        }}
                    >
                        Având în vedere că l-am sunat la 2 noaptea, a venit la
                        sute de kilometri distanță ca să mă ajute. Nu știu ce mă
                        faceam fără el. Sunați cu încredere!
                    </p>
                    <p
                        className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
                        style={{
                            fontSize: `${screen > 600 ? "18px" : "14px"}`,
                        }}
                    >
                        Mareș Gabriel
                    </p>
                </div>
            </div>
        </>
    )
}