import { showNotification } from '@/utils/helper';

const successMessage = 'Submit successfully';
const errorMessage = 'Something went wrong';

export const sendContactForm = async (data) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (response.status === 200)
    return showNotification('success', successMessage);

  return showNotification('error', errorMessage);
};
