import axios from 'axios';

export const getProducts = async () => {
  try {
    let path = import.meta.env.VITE_BACKEND_BASE + 'products';

    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');

    if (urlParams.has('page')) {
      path = path + '/?page=' + pageParam;
    }

    const res = await axios.get(path);

    return res;
  } catch (error) {
    throw new Error('something went wrong');
  }
};
