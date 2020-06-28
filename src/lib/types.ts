import { Collection, ObjectId } from 'mongodb';

export interface Listing {
  _id: ObjectId;
  title: string;
  image: string;
  address: string;
}

export interface Database {
  listings: Collection<Listing>;
}
