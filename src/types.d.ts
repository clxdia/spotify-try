interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
  name: string;
  artists: [string, Artists[]];
  album: { name: string };
  items: any;
  0: any;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Album {
  images: { url: string };
  name: string;
}

interface Pic {
  url: string;
}

interface Items {
  name: string;
}

interface Artists {
  name: string;
}
