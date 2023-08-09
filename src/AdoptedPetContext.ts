import { createContext } from 'react';
import { Pet } from './APIResponsesTypes';

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: 'Fido',
    animal: 'cat',
    breed: 'Beagle',
    description: 'fine cat this one',
    images: [],
    city: 'Guadalajara',
    state: 'Jalisco',
  },
  () => {},
]);

export default AdoptedPetContext;
