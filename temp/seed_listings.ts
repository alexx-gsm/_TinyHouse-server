import { ObjectId } from 'mongodb';
import { Listing } from '../src/lib/types';

export const listings: Listing[] = [
  {
    _id: new ObjectId(),
    title: 'title 001',
    image: '',
    address: '',
  },
  {
    _id: new ObjectId(),
    title: 'title 002',
    image: '',
    address: '',
  },
  {
    _id: new ObjectId(),
    title: 'title 003',
    image: '',
    address: '',
  },
];
