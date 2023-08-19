import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base{
    title: string;
    categories: Category[];
    backgroundImage: Image;
    mainImage: Image;
    image: Image;
    public_id: string;
    resource_type: string
    type: string;
    videoinput: string;
    format: string;
    version: number;
    videoinput: File;
    url: string;
    youtube: PortableTextBlock[]
    mobileImage: Image;
    slug: Slug;
    body: PortableTextBlock[];
    content: PortableTextBlock[];
    description: PortableTextBlock[]
    overview?: PortableTextBlock[]
    tags: string[]
    }

interface Author extends Base{
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface videofrontend extends Base {
    title: string;
    playbackId: string;
}

interface Video {
    asset: Reference;
    url: string;
    public_id: string;
    _key: string;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
	role: string;
	number: number;
    description: string;
    title: string;
}

interface videoinput {
  _type: "file";
  asset: Reference;
  url: string;
}

interface backgroundImage {
    _type: "image";
    asset: Reference;
}

interface mainImage {
    _type: "image";
    asset: Reference;
}

interface mobileImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}

interface number {
    _type: "number";
    current: string;
}

interface description {
    type: string;
    _key: string;
}