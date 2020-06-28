import { Collection } from 'mongodb';
import { Listing } from '../graphql/models/listings';

export interface Database {
  listings: Collection<Listing>;
}
