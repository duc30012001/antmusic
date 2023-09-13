export type PricingData = {
  title: string;
  data: { id: number; title: string }[];
  price: number;
};

export const freeData: PricingData = {
  title: 'Artist',
  price: 0,
  data: [
    {
      id: 1,
      title: 'Release unlimited music for 1 artist',
    },
    {
      id: 2,
      title: 'Keep 80% of your royalties',
    },
    {
      id: 3,
      title: 'Release to 100+ platforms worldwide',
    },
    {
      id: 4,
      title: 'In-depth insights, analytics & listener data',
    },
    {
      id: 5,
      title: 'Release unlimited music for 1 artist',
    },
  ],
};

export const proData: PricingData = {
  title: 'Label',
  price: 20,
  data: [
    {
      id: 1,
      title: 'All free features',
    },
    {
      id: 2,
      title: 'Keep 85% of your royalties',
    },
    {
      id: 3,
      title: 'Customize your label',
    },
  ],
};

export const superData: PricingData = {
  title: 'Multi Label',
  price: 100,
  data: [
    {
      id: 1,
      title: 'All free features',
    },
    {
      id: 2,
      title: 'Keep 85% of your royalties',
    },
    {
      id: 3,
      title: 'Create up to 10 labels',
    },
  ],
};
