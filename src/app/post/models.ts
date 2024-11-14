export type Post = {
    id: number;
    title: string;
    content: string;  
    author: number;
    photo : string;
  };
  

  type Address = {
    number: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };

  export type Author = {
  id: number;
  name: string;
  photo: string;
  pseudo: string[];
  address: Address;
  };
  