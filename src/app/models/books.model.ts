import { Author } from './author.model';
import { Publication } from './publication.model';

export interface Book {
  publication: Publication;
  _id: string;
  title: string;
  authors: Author[];
  language: string;
  url: string;
}
