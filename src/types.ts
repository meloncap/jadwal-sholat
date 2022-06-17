import { ReactNode } from "react";

export interface childrenProps {
    children: ReactNode[] | JSX.Element;
    title?: string;
}

export interface kotaProps {
    kota: [id: string, lokasi: string];
}

export interface waktuProps {
    waktu: {
        id: string;
        lokasi: string;
        date: string;
        daerah: string;
        jadwal: any;
    };
}

export interface suratProps {
    surat: {
        number: number;
        name: {
            transliteration: {
                id: string;
            };
            translation: {
                id: string;
            };
        };
        text: string;
        verses: [
            text: {
                arab: string;
            }
        ];
    };
}