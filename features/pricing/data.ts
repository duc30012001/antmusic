export type PricingData = {
  title: string;
  data: { id: number; title: string }[];
  price: number;
};

export const freeData: PricingData = {
  title: 'Free',
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
  title: 'Pro',
  price: 50,
  data: [
    {
      id: 1,
      title: 'All free features',
    },
    {
      id: 2,
      title: 'Keep 100% of your royalties',
    },
    {
      id: 3,
      title: 'Custom your label',
    },
  ],
};
