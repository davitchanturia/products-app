import axios from 'axios';

export const getProducts = async () => {
  try {
    const path = import.meta.env.VITE_BACKEND_BASE + 'products';

    const res = await axios.get(path);

    return res;
  } catch (error) {
    throw new Error('something went wrong');
  }
};
