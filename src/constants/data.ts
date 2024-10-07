export interface DataType {
   clientsNumber: number;
   phone: string;
   email: string;
   facebook: string;
   tarifePage: string;
   galleryPage: string;
   phoneLink: string;
   facebookLink: string;
   emailLink: string;
}

export const redundantData: DataType = {
   clientsNumber: 500,
   phone: "0724 717 111",
   email: "tractari@kotasistenta.ro",
   facebook: "Tractari Floresti Prahova",
   tarifePage: "/tarife",
   galleryPage: "/galerie-foto",
   phoneLink: "0724717111",
   facebookLink: "https://www.facebook.com/profile.php?id=100075119239027",
   emailLink: "",
};
